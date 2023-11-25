import PlantTable from "@/components/PlantTable.vue";

class Plant {
  constructor(coords, plantName, feature) {
    this.coords = coords;
    this.plantName = plantName;
    this.feature = feature;
  }
}

export {Plant};