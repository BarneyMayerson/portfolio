<script setup>
defineProps(["href"]);
</script>

<template>
  <a
    :href
    class="outline-none px-2 py-1 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-500 rounded"
  >
    <slot />
  </a>
</template>
