<script setup>
import { inject } from "vue";
import {store} from "@/store";
const featureSelected = (event) => {
  const selected = event.selected.length > 0;
  let plant = null;

  if (selected) {
    plant = event.selected[0].values_.plant;
  } else {
    // plant = event.deselected[0].values_.plant;
    plant = null;
  }

  store.selectedPlant = plant;
};

const selectInteactionFilter = (feature) => {
  return true;
};

const selectConditions = inject("ol-selectconditions");
const selectCondition = selectConditions.click;
</script>

<template>
  <ol-interaction-select
    @select="featureSelected"
    :condition="selectCondition"
    :filter="selectInteactionFilter"
  >
    <ol-style>
      <ol-style-stroke color="yellow" :width="2"></ol-style-stroke>
      <ol-style-fill color="rgba(255,255,0,0.1)"></ol-style-fill>
      <ol-style-circle :radius="16">
        <ol-style-fill color="yellow"></ol-style-fill>
      </ol-style-circle>
    </ol-style>
  </ol-interaction-select>
</template>

<style scoped>
</style>