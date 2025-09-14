<script setup>
import HippoAnimation from "./HippoAnimation.vue";
</script>

<template>
  <router-link
    :to="{ name: 'Note' }"
    class="w-full h-full flex flex-col justify-center items-center"
  >
    <span class="text-3xl md:text-5xl font-bold pb-2 md:pb-20 text-white animate-pulse"
      >Quick Start Hippo Note</span
    >
    <HippoAnimation />
  </router-link>
</template>

<style scoped></style>
