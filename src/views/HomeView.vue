<script setup>
import { computed, ref, watch } from "vue";
import Settings from "@/Components/Generic/Settings.vue";
import SettingsButton from "@/Components/Generic/SettingsButton.vue";
import colors from "tailwindcss/colors";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";
import LinkParticles from "@/Components/Generic/LinkParticles.vue";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage

const displaySettings = ref(false);

const { bgColorClasses, textColorClasses } = useColorSchemes();

const colorScheme = useColorSchemeStore();
const primaryBgColorClass = computed(
  () => bgColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);
const primaryColorClass = computed(
  () => textColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);

const primaryColor = computed(
  () => colors[colorScheme.primaryColor][colorScheme.primaryShade]
);

// track the primaryColor
const renderKey = ref(0);
watch(primaryColor, () => {
  renderKey.value++;
});
</script>

<template>
  <Transition name="slide">
    <div
      v-if="displaySettings"
      class="fixed left-0 min-h-full text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-700 w-full border dark:border-gray-500 top-16 z-20 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <Settings @hide="displaySettings = false" />
    </div>
  </Transition>

  <div
    class="bg-gray-100 dark:bg-gray-800 min-h-screen"
    :class="primaryColorClass"
  >
    <LinkParticles class="h-screen" :primaryColor :key="renderKey" />
    <div class="container mx-auto px-4 lg:px-8 pt-6">
      <h1 class="text-3xl font-bold">Here is the Home page</h1>
    </div>
  </div>

  <div
    class="rounded-r-md text-white py-2 pl-1 pr-2 fixed left-0 top-[50%] flex items-center justify-center z-10"
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
