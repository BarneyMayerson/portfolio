<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationMenu from "@/Components/Generic/NavigationMenu.vue";

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
