// store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  offset: 0,
  list: [],
  addingPlant: false,
  selectedPlant: null,
})

// export const mutations = {
//   increment() {
//     count.value++;
//   }
// };