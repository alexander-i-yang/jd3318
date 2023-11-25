<script setup>
  // import {format} from "ol/coordinate";
  import { ref, inject } from "vue";
  const format = inject("ol-format");
  const geoJson = new format.GeoJSON();

  const url = "500m_Estimated_Temperature.geojson";
</script>

<template>
  <ol-vector-layer>
    <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
  </ol-vector-layer>
</template>

<style scoped>

</style>