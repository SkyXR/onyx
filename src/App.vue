<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="font-extrabold text-black-900 mb-4 text-5xl">SkyXR ONYX</h1>

    <!-- <VModelComponent></VModelComponent> -->
    <ItemDisplayList />
    <ItemButtons />
    <Topics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemDisplayList from './components/ItemDisplayList.vue';
import ItemButtons from './components/ItemButtons.vue';
import Topics from './components/Topics.vue';

export default defineComponent({
  name: 'App',
  components: {
    ItemDisplayList,
    ItemButtons,
    Topics
  },
});
</script>
