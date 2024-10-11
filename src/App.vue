<script setup lang="ts">
import Page from './views/Page.vue'
</script>

<template>
  <header>
    <img src="@/assets/12go-logo.svg" alt="logo" />
    <span>Baranov Denis, Frontend Developer</span>
  </header>
  <Page/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
