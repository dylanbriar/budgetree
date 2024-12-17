<script setup lang="ts">
import { useTotalStore } from '@/stores/total';
import { ref } from 'vue';

const account = useTotalStore();

//Total Editing
let enteredTotal: number = 0;
let wantsToChange = ref(false);
function showTotalForm () {wantsToChange.value = !wantsToChange.value}
function submitNewTotal (enteredTotal: number) {
  account.setTotal(enteredTotal);
  wantsToChange.value = !wantsToChange.value
}

</script>

<template>
  <div class="total-container">
    <span class="total-label">Current Total: ${{ account.total }}</span>
    <div class="total-controls">
      <div class="arrow-buttons">
        <button @click="account.increment" class="increment">+</button>
        <button @click="account.decrement" class="decrement">-</button>
      </div>
    </div>
    <br>
    <form v-if="wantsToChange" @submit.prevent="submitNewTotal(enteredTotal)">
      <input type="number" placeholder="Edit Total" v-model="enteredTotal">
    </form>
    <button v-if="wantsToChange" @click="showTotalForm">Cancel</button>
  </div>
  <div id="updateTotal">
    <button v-if="!wantsToChange" @click="showTotalForm">Update Total?</button>
  </div>
</template>

<style scoped>

.total-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.total-label {
  font-size: 2em;
}

.total-controls {
  display: flex;
  align-items: center;
}

.arrow-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Add positioning context */
  height: 15px; /* Explicit height to create space */
}

.increment, 
.decrement {
  width: 7px;
  height: 4px;
  color: rgb(0, 255, 132);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  font-size: 1em;
  border: transparent;
  background-color: transparent;
  border-radius: 4px;
  position: absolute; /* Use absolute positioning */
  left: 0em; /* Adjust horizontal position */
}

.increment {
  top: 0; /* Position at the top of the container */
}

.decrement {
  bottom: 0; /* Position at the bottom of the container */
}

#updateTotal {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
