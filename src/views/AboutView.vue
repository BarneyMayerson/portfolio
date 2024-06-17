<script setup>
import { useThemes } from "@/Composables/useThemes";
import LinkParticles from "@/Components/Generic/LinkParticles.vue";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage
</script>
<template>
  <div class="relative min-h-screen">
    <LinkParticles class="h-screen" />
    <div class="absolute left-1/4 lg:left-1/3 top-1/3 w-1/2 lg:w-1/3">
      <div
        class="bg-black/40 w-full md:mx-0 md:p-8 rounded border p-4 text-center text-white border-red-500"
      >
        <h1 class="text-2xl sm:text-3xl md:text-4xl">Barney Mayerson</h1>
        <h2 class="sm:text-1xl text-lg md:text-2xl">Web App Developer</h2>
        <p class="md:text-1xl sm:text-1xl">From Polotsk</p>
      </div>
    </div>
  </div>
</template>
