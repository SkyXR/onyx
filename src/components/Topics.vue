<template>
  <div class="flex flex-col items-center">
    <div class="text-sm text-gray-500 mt-11 w-4/6">
      <center >
        <b>Topics Covered:</b>
        <ul class="mt-2">
          <li v-for="topic in topics" class="inline">
            • {{ topic }}
          </li>
        </ul>
      </center>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const topics = ['Vue3', 'Typescript', 'Tailwind', 'Composition API', 'Data Binding (V-Model)',
    'Reactivity API', 'State Management', 'Vite', 'Lists' , 'Vue Components', 'CSS', 'HTML',
    'Arrow Functions', 'Mouse & Keyboard Events', 'Spread Operator', 'Vue App Mounting', 'Yarn', 'Vite Port Config']
    return { topics };
  },
});
</script>
