<script setup>
  import {store} from "@/store";

  const props = defineProps(['plant']);

  const round = x => Math.round(x*100)/100;

  const formatCoords = coords => {
    coords = coords.map(round);
    return `(${coords[0]}, ${coords[1]})`;
  }

  function deletePlant() {
    const index = store.list.indexOf(store.selectedPlant);
    console.log(store.selectedPlant.feature.values_.geometry.flatCoordinates = [0, 0]);
    //please fix later ^
    if (index > -1) { // only splice array when item is found
      store.list.splice(index, 1); // 2nd parameter means remove one item only
    }
    store.selectedPlant = null;
  }
</script>

<template>
<table>
  <tr>
    <td>Name:</td>
    <td>{{ plant.plantName }}</td>
  </tr>
  <tr>
    <td>Coords:</td>
    <td>{{formatCoords(plant.coords)}}</td>
  </tr>
  <tr>
    <td>Temp:</td>
    <td>500 C</td>
  </tr>
</table>
<button @click="deletePlant">Delete Plant</button>
</template>

<style scoped>

</style>