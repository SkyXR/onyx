<template>
  <div class="flex flex-col items-center mt-4">
    <p class="text-xs text-gray-500 font-mono mb-4">
      ~/components/Increment.vue
    </p>
    <div class="flex items-center">
      <!-- Increment using a method defined in the composable -->
      <button
        class="mx-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-semibold transition-colors"
        @click.prevent="increment()"
      >
        + Increment
      </button>

      <!-- Decrement by mutating the state directly -->
      <button
        class="mx-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-semibold transition-colors"
        @click.prevent="counter--"
      >
        - Decrement
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '../composables/useCounter';

export default defineComponent({
  setup() {
    const { state, increment } = useCounter();

    return { ...state, increment };
  },
});
</script>
