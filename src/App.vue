<script setup>
import { useRoute } from "vue-router";
import NavigationMenu from "@/components/Generic/NavigationMenu.vue";
import { computed } from "vue";

const route = useRoute();
const currentRouteName = computed(() => route.name);
</script>

<template>
  <header>
    <div class="antialiased font-sans">
      <NavigationMenu :currentRouteName />
    </div>
  </header>

  <RouterView />
</template>
