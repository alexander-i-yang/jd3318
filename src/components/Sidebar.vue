<script setup>
  import {store} from "@/store";
  import {ref, watch} from "vue";
  import PlantTable from "@/components/PlantTable.vue";

  const plant = ref(null);

  watch(() => store.selectedPlant, (newPlant) => {
    plant.value = newPlant;
  });
</script>

<template>
  <div id="sidebar">
    <PlantTable v-if="plant" :plant="plant"/>
    <span v-else>Select a plant on the map</span>
  </div>
</template>

<style scoped>
#sidebar {
  background: white;
  top: 120px;
  right: 20px;
  position: absolute;
  padding: 20px;
}
</style>