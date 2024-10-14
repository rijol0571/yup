<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div class="spinner"></div>
      <h1>Do Not Wait there is nothing..,</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const loading = ref(true);
  
  // Simulatsiya qilish uchun loadingni o'zgartirish (masalan, 2 soniyadan so'ng)
  setTimeout(() => {
    loading.value = false; // loading tugashi
    // Bu yerda boshqa sahifaga o'tish mumkin
  }, 2000); // 2 soniya kutish
  </script>
  
  <style scoped>
  .spinner {
    @apply w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin;
  }
  </style>
  