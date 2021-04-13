<template>
  <div class="flex flex-col items-center">
    <p class="text-xs text-gray-500 font-mono mb-4">~/components/Counter.vue</p>

    <div
      class="inline-flex justify-center items-center text-4xl p-4 bg-gray-800 bg-opacity-75 text-white rounded-lg"
    >
      {{ counter }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '../composables/useCounter';

export default defineComponent({
  setup() {
    const { state } = useCounter();

    return { ...state };
  },
});
</script>
