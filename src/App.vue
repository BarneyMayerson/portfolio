<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationMenu from "@/Components/Generic/NavigationMenu.vue";

const route = useRoute();
const currentRouteName = computed(() => route.name);
const currentRouteHash = computed(() => route.hash);
</script>

<template>
  <header class="sticky top-0">
    <div class="antialiased font-sans">
      <NavigationMenu :currentRouteName :currentRouteHash />
    </div>
  </header>

  <RouterView />
</template>
