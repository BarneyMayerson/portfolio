<script setup>
import { computed } from "vue";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage

const { textColorClasses } = useColorSchemes();
const colorScheme = useColorSchemeStore();
const primaryColorClass = computed(
  () => textColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);
</script>
<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 min-h-screen"
    :class="primaryColorClass"
  >
    <div class="container mx-auto px-4 lg:px-8 pt-6">
      <h2 class="sm:text-1xl text-lg md:text-2xl">Here is about page</h2>
    </div>
  </div>
</template>
