<script setup>
import { useColorSchemes } from "@/Composables/useColorSchemes";

defineProps(["color"]);

const { bgColorClasses } = useColorSchemes();
</script>

<template>
  <input
    type="range"
    class="w-full appearance-none outline-none rounded h-2"
    :class="`${bgColorClasses[color]}`"
    min="100"
    max="900"
    value="500"
  />
</template>
