<script setup>
import { computed, ref } from "vue";
import Settings from "@/Components/Generic/Settings.vue";
import SettingsButton from "@/Components/Generic/SettingsButton.vue";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage

const displaySettings = ref(false);

const colorScheme = useColorSchemeStore();
const primaryBgColorClass = computed(() => colorScheme.primaryBgColorClass);
</script>

<template>
  <Transition name="slide">
    <div
      v-if="displaySettings"
      class="fixed left-0 min-h-full text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-700 w-full border-r border-t border-red-500 top-16 z-20 lg:w-1/4"
    >
      <Settings @hide="displaySettings = false" />
    </div>
  </Transition>

  <div class="text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4 lg:px-8 pt-6 min-h-full">
      <h1 class="text-3xl font-bold">Here is the Home page</h1>
    </div>
  </div>

  <div
    class="rounded-r-md text-white py-2 pl-1 pr-2 fixed right-0 top-[50%] flex items-center justify-center z-10"
    :class="primaryBgColorClass"
  >
    <SettingsButton @show="displaySettings = true" />
  </div>
</template>

<style scoped>
.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
