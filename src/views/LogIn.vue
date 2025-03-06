<script setup lang="ts">

import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
  fetch('http://localhost:3000', {
    method: "POST",
    body: JSON.stringify(credential),
    headers: {
      "Content-Type": "application/json",
    },
  })
  // .then(data => data.json())
  // .then(data => console.log(data))
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

</script>

<template>
 <body>
  <GoogleSignInButton
  type="standard"
  theme="filled_black"
  size="medium"
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
  </body>
</template>

<style>

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
