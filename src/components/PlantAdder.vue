<script setup>
  // import moveToEast from './Map.vue';
  import {store} from "@/store";
  function hello() {
    store.addingPlant = true;
  }
</script>

<template>
  <div class="plant-adder">
    <div>Plant Adder</div>
    <button @click=hello>Add Plant</button>
  </div>
</template>

<style scoped>
  .plant-adder {
    background: white;
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 20px;
  }
</style>