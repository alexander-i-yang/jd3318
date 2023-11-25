<template>
  <div id="mouse-position"></div>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 100%"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <LoadFile/>

    <ol-vector-layer>
      <ol-source-vector :projection="projection">
        <ol-interaction-draw
          v-if="store.addingPlant"
          type="Point"
          @drawend="drawend"
          @drawstart="drawstart"
        >
          <ol-style>
            <ol-style-stroke color="blue" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgba(255, 255, 0, 0.4)"></ol-style-fill>
          </ol-style>
        </ol-interaction-draw>
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="gray" :width="2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="15">
          <ol-style-fill color="gray"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

    <Selector/>
    <PlantTooltips/>
  </ol-map>
</template>

<script setup>
import { ref } from "vue";
import {store} from "@/store";
import {Plant} from "@/plant.js";
import PlantTooltips from "@/components/PlantTooltips.vue";
import Selector from "@/components/Selector.vue";
import LoadFile from "@/components/LoadFile.vue";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(8);
const rotation = ref(0);

console.log(center);

const drawstart = (event) => {
};

const drawend = (event) => {
  const prevList = store.list;
  const newPlant = new Plant(event.target.sketchCoords_, `Plant ${prevList.length}`, event.feature);

  event.feature.values_.plant = newPlant;

  store.list.push(newPlant);
  store.addingPlant = false;
};
</script>

<style>

</style>