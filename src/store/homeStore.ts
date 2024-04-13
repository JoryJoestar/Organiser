import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHomeStore = defineStore(
  'home',
  () => {
    const history = ref()
    return { history }
  },
  {
    persist: true,
  }
)
