<script setup lang="ts">
import PhoneInput from '@/components/PhoneInput.vue';
import { ref } from 'vue';

const phoneNumber = ref<string>('');
</script>

<template>
  <div class="page">
    <PhoneInput v-model="phoneNumber"/>
    <h1>Result: {{ phoneNumber }}</h1>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
}
</style>
