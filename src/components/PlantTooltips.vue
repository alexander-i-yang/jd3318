<script setup>
  import {store} from '@/store';
</script>

<template>
  <ol-overlay
    :position="plant.coords"
    v-for="plant in store.list"
    :key="plant"
  >
    <div class="overlay-content plant-tooltip">
      {{plant.plantName}}
    </div>
  </ol-overlay>
</template>

<style scoped>
  .plant-tooltip {
    text-align: left;
    left: 30px;
    top: -20px;
    position: relative;
    background: white;
    padding: 10px;
  }
</style>