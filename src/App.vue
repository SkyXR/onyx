<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <Counter></Counter>
    <Increment></Increment>
    <p class="text-xs text-gray-500 font-mono my-4">
      State is managed in ~/composables/useCounter.ts
    </p>
    <p class="text-sm text-gray-500 mt-4">
      Counter example using state made in Composition API.
      <br />Made by
      <a
        class="text-blue-500 border-b border-blue-400 hover:text-blue-600 hover:border-blue-500 transition-colors"
        href="https://github.com/vlourme"
        >@vlourme</a
      >.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './components/Counter.vue';
import Increment from './components/Increment.vue';

export default defineComponent({
  name: 'App',
  components: {
    Counter,
    Increment,
  },
});
</script>
