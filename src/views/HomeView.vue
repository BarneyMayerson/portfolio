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
    <div id="about-me" class="container mx-auto px-4 lg:px-8 pt-[65px]">
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
        <div class="flex justify-center">
          <div class="w-64">
            <FadeImg :imgUrl :key="imageKey" @click="change" />
          </div>
        </div>
        <div class="w-4/5 my-8 text-center text-xl">
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
    <div id="projects" class="container mx-auto px-4 lg:px-8 pt-[65px]">
      <div class="h-[500px] border flex items-center justify-center">
        <div>Projects content goes here</div>
      </div>
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
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
</style>
