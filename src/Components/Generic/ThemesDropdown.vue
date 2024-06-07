<script setup>
import { useThemes } from "@/Composables/useThemes";

const { theme } = useThemes();
</script>

<template>
  <select
    v-model="theme"
    class="block w-full rounded px-2 py-2 border-r-8 border-transparent leading-tight bg-white dark:bg-gray-700"
  >
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>
