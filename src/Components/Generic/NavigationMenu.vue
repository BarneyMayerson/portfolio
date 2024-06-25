<script setup>
import NavLink from "@/Components/Generic/NavLink.vue";

defineProps({
  currentRouteHash: String,
});
</script>

<template>
  <nav
    class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="h-16 flex items-center justify-between">
        <div class="flex items-center">
          <a href="/">
            <div class="flex items-center space-x-3">
              <img
                src="https://avatars.githubusercontent.com/u/120561976?v=4"
                class="w-10 h-10 rounded-full"
              />
              <span
                class="text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-100"
              >
                Barney Mayerson
              </span>
            </div>
          </a>
          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
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
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
