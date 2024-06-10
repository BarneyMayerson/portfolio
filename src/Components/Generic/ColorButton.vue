<script setup>
import { useColorSchemes } from "@/Composables/useColorSchemes";

defineProps({
  color: {
    type: String,
    default: "blue",
  },
});

const { bgColorClasses } = useColorSchemes();
</script>

<template>
  <button :class="`${bgColorClasses[color]} p-5 rounded`"></button>
</template>
