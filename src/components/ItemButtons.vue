<template>
  <div class="flex flex-col items-center mt-4">
    <input type="text" v-model="currentInput" placeholder="New task..."
      class="mb-4 border-2 w-full" v-on:keyup.enter="addItemzz(currentInput)" />

    <div class="flex items-center">
      <!-- Increment using a method defined in the composable -->
      <button
        class="mx-2 px-4 py-2 rounded-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none font-semibold transition-colors"
        @click.prevent="addItem(currentInput)"
      >
        + Add
      </button>

      <!-- Decrement by mutating the state directly -->
      <button
        class="mx-2 px-4 py-2 rounded-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none font-semibold transition-colors"
        @click.prevent="deleteItem()"
      >
        - Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import runItem from '../hooks/runItem';

export default defineComponent({
  setup(props, { emit }) {
    const { addItem, deleteItem, state } = runItem();
    const currentInput = ref(null);

    const addItemzz = (item) => {
      addItem(item);
      console.log(currentInput)
      currentInput.value = ""
    }
    return { ...state, addItem, addItemzz, deleteItem, currentInput };
  }
});
</script>
