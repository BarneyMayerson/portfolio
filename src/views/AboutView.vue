<script setup>
import { computed, ref, watch } from "vue";
import { useThemes } from "@/Composables/useThemes";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";
import FadeTransition from "@/Components/FadeTransition.vue";

const { theme } = useThemes(); // needs to init the theme was saved in the local storage

const { textColorClasses } = useColorSchemes();
const colorScheme = useColorSchemeStore();
const primaryColorClass = computed(
  () => textColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);

const images = ["26", "27", "28", "29", "30"];
let index = 0;
const current = ref(images[index]);

const loop = () => {
  index = index < images.length - 1 ? ++index : 0;

  current.value = images[index];
};

const renderKey = ref(0);
watch(current, () => {
  renderKey.value++;
});
</script>

<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 min-h-screen"
    :class="primaryColorClass"
  >
    <div class="container mx-auto px-4 lg:px-8 pt-6">
      <FadeTransition :key="renderKey">
        <div>
          <img
            :src="`/${current}.jpg`"
            alt="photo"
            class="w-44 object-cover rounded-lg"
            @click="loop()"
          />
        </div>
      </FadeTransition>
    </div>
  </div>
</template>
