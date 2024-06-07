<script setup>
import { useThemes } from "@/Composables/useThemes";

const { theme } = useThemes();
</script>

<template>
  <div class="">
    <select v-model="theme">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
