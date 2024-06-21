<script setup>
import { computed, ref } from "vue";
import NavLink from "@/Components/Generic/NavLink.vue";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";

defineProps({
  currentRouteName: String,
  currentRouteHash: String,
});

const colorScheme = useColorSchemeStore();
const { textColorClasses } = useColorSchemes();
const primaryColorClass = computed(
  () => textColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);
</script>

<template>
  <nav
    class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-10"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="h-16 flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex items-center">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              class="mr-2 h-8 w-8 fill-current"
              :class="primaryColorClass"
            >
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
            <span
              class="text-xl font-semibold tracking-tight"
              :class="primaryColorClass"
            >
              Barney Mayerson
            </span>
          </div>
          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <NavLink :to="{ name: 'home' }" :active="!currentRouteHash">
              Home
            </NavLink>

            <NavLink
              :to="{ name: 'home', hash: '#about-me' }"
              :active="currentRouteHash === '#about-me'"
            >
              About Me
            </NavLink>
            <NavLink
              :to="{ name: 'home', hash: '#projects' }"
              :active="currentRouteHash === '#projects'"
            >
              Projects
            </NavLink>

            <NavLink to="about" :active="currentRouteName === 'about'">
              About Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
