<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useTotalStore } from './stores/total';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
// import { ref } from 'vue'

const account = useTotalStore();

function serverTest (){
  // fetch(`https://budgetree-server-27ca7f33b135.herokuapp.com/`)
  fetch('http://localhost:3000', {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    },
  })
  .then(data => data.json())
  .then(data => console.log(data))
}

</script>

<template>
  <!-- move this over to Home page, as the App will first show the log-in page -->
  <header>
    <div class="header-container">
      <RouterLink to="/" id="goHome">INVUETORY</RouterLink>
      <div class="total">${{ account.total }}</div>
    </div>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
    <button @click="serverTest()">ServerTime</button>
  <RouterView />
</template>

<style scoped>

.header-container {
  display: flex;
  align-items: center;
  gap: 10px; /* Adds space between elements */
}

header {
  /* changes the space between it and surrounding things for some reason */
  line-height: 1.5;
  /* not sure what this is, research later */
  max-height: 100vh;
}

.total {
  font-size: xx-large;
  margin-left: auto; /* Pushes the total to the right side */
}

#goHome {
  font-size: 3.5em;
  /* probably change this later */
  font-family: 'Times New Roman', Times, serif;
}

nav {
  /* something to do with width, so I'm not touching it */
  width: 100%;
  font-size: 1.25em;
  text-align: center;
  /* margin between the nav bar and whatever's above it */
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  /* this specifies the color of the text, that's it */
  color: var(--color-text);
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  /* this changes how it looks wide-screen */
  display: inline-block;
  /*  this changes how far apart each link is*/
  padding: 0 2rem;
  /* this adds the lines */
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  /* this prevents a line from showing up at the beginning of the nav bar */
  /* might do something else though, not sure */
  border: 0;
}
</style>
