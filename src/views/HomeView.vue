<script setup>
import { computed, ref, watch } from "vue";
import Settings from "@/Components/Generic/Settings.vue";
import SettingsButton from "@/Components/Generic/SettingsButton.vue";
import colors from "tailwindcss/colors";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";
import LinkParticles from "@/Components/Generic/LinkParticles.vue";
import AboutMeSection from "@/Components/AboutMeSection.vue";
import ProjectsSection from "@/Components/ProjectsSection.vue";
import LinkedinLogo from "@/Components/Logos/LinkedinLogo.vue";
import GithubLogo from "@/Components/Logos/GithubLogo.vue";
import ActiveAnchor from "@/Components/Generic/ActiveAnchor.vue";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage

const displaySettings = ref(false);

const { bgColorClasses, borderColorClasses, textColorClasses } =
  useColorSchemes();

const colorScheme = useColorSchemeStore();
const primaryBgColorClass = computed(
  () => bgColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);
const primaryBorderColorClass = computed(
  () => borderColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
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
    <div class="absolute left-1/4 lg:left-1/3 top-1/3 w-1/2 lg:w-1/3">
      <div
        class="bg-black/20 w-full md:mx-0 md:p-8 rounded border p-4 text-center"
        :class="`${primaryBorderColorClass} ${primaryColorClass}`"
      >
        <h1 class="text-2xl sm:text-3xl md:text-4xl">Barney Mayerson</h1>
        <h2 class="sm:text-1xl text-lg md:text-2xl">Web App Developer</h2>
        <p class="md:text-1xl sm:text-1xl">From Polotsk</p>
        <div class="mt-4 flex justify-center space-x-4">
          <ActiveAnchor
            href="https://www.linkedin.com/in/ivan-vassiliev-4b978051/"
          >
            <LinkedinLogo class="w-16 h-16" />
          </ActiveAnchor>
          <ActiveAnchor href="https://github.com/BarneyMayerson">
            <GithubLogo class="w-16 h-16" />
          </ActiveAnchor>
        </div>
      </div>
    </div>
    <div id="about-me" class="container mx-auto px-4 lg:px-8 pt-16">
      <AboutMeSection />
    </div>
    <div id="projects" class="container mx-auto px-4 lg:px-8 pt-16">
      <ProjectsSection />
    </div>
    <div class="mt-12 h-56"></div>
  </div>

  <div
    class="rounded-r-md text-white py-2 pl-1 pr-2 fixed left-0 top-[50%] flex items-center justify-center z-10"
    :class="primaryBgColorClass"
  >
    <SettingsButton @show="displaySettings = true" />
  </div>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
</style>
