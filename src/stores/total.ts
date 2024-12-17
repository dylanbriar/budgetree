import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTotalStore = defineStore('total', () => {
  const total = ref(0)

  //methods

  function decrement () {
    total.value--
  }

  function increment() {
    total.value++
  }

  function setTotal(newTotal: number) {
    // Optional: Add validation if needed
    total.value = Math.max(0, Number(newTotal))
  }

  return { total, decrement, increment, setTotal }
})
