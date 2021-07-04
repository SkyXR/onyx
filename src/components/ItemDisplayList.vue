<template>
  <div class="flex flex-col items-center">
    <!-- <p class="text-xs text-gray-500 font-mono mb-4">wadi</p> -->

    <div
      class="inline-flex justify-center items-center text-center"
    >
      <ul id="example-1">
        <li v-for="item in items">
          • {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useItem from '../hooks/runItem';

export default defineComponent({
  setup() {
    const { state } = useItem();

    return { ...state };
  },
});
</script>
