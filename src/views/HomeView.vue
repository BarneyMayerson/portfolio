<script setup>
import { computed, ref, watch } from "vue";
import Settings from "@/Components/Generic/Settings.vue";
import SettingsButton from "@/Components/Generic/SettingsButton.vue";
import colors from "tailwindcss/colors";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";
import LinkParticles from "@/Components/Generic/LinkParticles.vue";
import FadeImg from "@/Components/FadeImg.vue";
import LaravelLogo from "@/Components/Logos/LaravelLogo.vue";
import VueLogo from "@/Components/Logos/VueLogo.vue";
import BootstrapLogo from "@/Components/Logos/BootstrapLogo.vue";
import ChartLogo from "@/Components/Logos/ChartLogo.vue";
import LivewireLogo from "@/Components/Logos/LivewireLogo.vue";
import TailwindLogo from "@/Components/Logos/TailwindLogo.vue";

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

const images = ["26", "27", "28", "29", "30"];
let index = 0;
const currentImage = ref(images[index]);

const imgUrl = computed(() => `/${currentImage.value}.jpg`);

const change = () => {
  index = index < images.length - 1 ? ++index : 0;

  currentImage.value = images[index];
};

const imageKey = ref(0);
watch(currentImage, () => {
  imageKey.value++;
});

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
      </div>
    </div>
    <div id="about-me" class="container mx-auto px-4 lg:px-8 pt-16">
      <h2 class="font-bold leading-5 text-3xl text-center">About Me</h2>
      <div class="flex flex-col space-y-6 items-center justify-center">
        <div class="w-4/5 my-4 text-center text-xl">
          <p>
            Hello, my name is Ian and I am a web app amateur developer. I take
            ready-made packages and well-known techniques and create websites
            for my needs and the needs of the company where I work. It seems
            very simple :). But it is not so.
          </p>
          <p class="mt-2">
            My favorite developer stack includes Laravel, VueJS, TailwindCSS and
            InertiaJS for SPA.
          </p>
        </div>
        <div class="flex justify-center h-48">
          <div class="w-64">
            <FadeImg :imgUrl :key="imageKey" @click="change" />
          </div>
        </div>
        <div class="w-4/5 text-center text-xl">
          <p class="mt-4">
            I was once a huge Need for Speen Underground (2003) fan. I was
            really sad when EA closed the online service. Fortunately, there was
            a person who created a server for the online game from scratch. By
            chance I came across the source code of this server. The&nbsp;server
            allowed you to play online, but unfortunately did not keep
            statistics. Then I got the idea to improve the server for
            maintaining statistics. When I did this I wanted to create a website
            for online tournaments. This is what finally brought me into web app
            development.
          </p>
        </div>
      </div>
    </div>
    <div id="projects" class="container mx-auto px-4 lg:px-8 pt-16">
      <h2 class="font-bold leading-5 text-3xl text-center">Projects</h2>
      <div
        class="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6 mt-8"
      >
        <div class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700">
          <img src="/pvl.png" class="w-full" />
          <div class="mt-3">
            <a
              href="https://github.com/BarneyMayerson/pvlh"
              class="underline font-bold block"
            >
              Locomotive planning
            </a>
            <div class="mt-4 flex items-center space-x-1">
              <div class="w-6 h-6">
                <LaravelLogo />
              </div>
              <span class="text-xs">Laravel 7</span>
              <div class="w-6 h-6">
                <VueLogo />
              </div>
              <span class="text-xs">Vue 2</span>
              <div class="w-6 h-6">
                <BootstrapLogo />
              </div>
              <span class="text-xs">Bootstrap 4</span>
            </div>
          </div>
        </div>

        <div class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700">
          <img src="/dpv.png" class="w-full" />
          <div class="mt-3">
            <a
              href="https://github.com/BarneyMayerson/dpv"
              class="underline font-bold block"
            >
              Delayed Wagons
            </a>
            <div class="mt-4 flex items-center space-x-1">
              <div class="w-6 h-6">
                <LaravelLogo />
              </div>
              <span class="text-xs">Laravel 5</span>
              <div class="w-6 h-6">
                <VueLogo />
              </div>
              <span class="text-xs">Vue 2</span>
              <div class="w-6 h-6">
                <BootstrapLogo />
              </div>
              <span class="text-xs">Bootstrap 2</span>
              <div class="w-6 h-6">
                <ChartLogo />
              </div>
              <span class="text-xs">Chart 2</span>
            </div>
          </div>
        </div>

        <div
          class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700 col-span-1 lg:col-span-2 xl:col-span-1"
        >
          <img src="/nfsu.png" class="w-full" />
          <div class="mt-3">
            <a
              href="https://github.com/BarneyMayerson/nfsu2"
              class="underline font-bold block"
            >
              NFSU Cup
            </a>
            <div class="mt-4 flex items-center space-x-1">
              <div class="w-6 h-6">
                <LaravelLogo />
              </div>
              <span class="text-xs">Laravel 8</span>
              <div class="w-6 h-6">
                <LivewireLogo />
              </div>
              <span class="text-xs">Liveware 2 </span>
              <div class="w-6 h-6">
                <TailwindLogo />
              </div>
              <span class="text-xs">Tailwind 2</span>
            </div>
          </div>
        </div>
      </div>
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
