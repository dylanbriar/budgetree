<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// function serverTest (){
//   fetch(`https://budgetree-server-27ca7f33b135.herokuapp.com/`)
//   .then(data => data.json())
//   .then(data => console.log(data))
// }
</script>

<template>
  <!-- move this over to Home page, as the App will first show the log-in page -->
  <header>
    <RouterLink to="/" id="goHome">BUDGETREE</RouterLink>
      <nav>
        <RouterLink to="/">BudgetBreakdown</RouterLink>
        <RouterLink to="/">Income</RouterLink>
        <RouterLink to="/">Why Budgetree</RouterLink>
        <RouterLink to="/">Settings</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  /* changes the space between it and surrounding things for some reason */
  line-height: 1.5;
  /* not sure what this is, research later */
  max-height: 100vh;
}

#goHome {
  font-size: xx-large;
  /* probably change this later */
  font-family: 'Times New Roman', Times, serif;
}

nav {
  /* something to do with width, so I'm not touching it */
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin between the nav bar and whatever's above it */
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  /* this specifies the color of the text, that's it */
  color: var(--color-text);
}

/* with this commented out, it allows a little glow in the back which is nice
nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  /* this changes how it looks wide-screen */
  display: inline-block;
  /*  this changes how far apart each link is*/
  padding: 0 1rem;
  /* this adds the lines */
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  /* this prevents a line from showing up at the beginning of the nav bar */
  /* might do something else though, not sure */
  border: 0;
}
</style>
