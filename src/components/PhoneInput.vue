<script setup lang="ts">
import { defineModel, ref, onMounted } from 'vue';

const phoneNumber = defineModel<string>({ required: true });
const formatedPhoneNumber = ref('');
const placeholder = ref('');

const placeholders: Record<string, string> = {
    'en-US': '(123) 456-7890'
}

const validatePhoneNumber = (input: string): string => {
    const regex = /^[0-9\s()+\-]+$/;
    return input.split('').filter(char => regex.test(char)).join('');
};

const handleInput = (event: Event) => {
    const input = (event.target as HTMLInputElement).value;
    formatedPhoneNumber.value = validatePhoneNumber(input);
    phoneNumber.value = formatedPhoneNumber.value;
};

const getLocale = (): string => {
    return navigator.language || navigator.languages[0] || 'en-US';
}

const setPlaceholder = () => {
    placeholder.value = placeholders[getLocale()] || 'Phone number';
}

onMounted(() => {
    setPlaceholder();
});
</script>

<template>
  <input
    type="tel"
    :placeholder="placeholder"
    v-model="formatedPhoneNumber"
    @input="handleInput"
  />

</template>

<style scoped>
input {
  background: white;
  border: 2px solid rgb(77, 184, 77);
  box-shadow: none;
  min-height: 50px;
  outline: none;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}
</style>
