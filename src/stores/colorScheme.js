import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useColorSchemeStore = defineStore("colorSchemeStore", () => {
  const colorSchemes = [
    "blue",
    "teal",
    "purple",
    "green",
    "red",
    "orange",
    "yellow",
    "indigo",
    "pink",
    "lime",
    "sky",
    "emerald",
    "stone",
    "zinc",
    "slate",
  ];

  const primaryColor = ref(null);

  primaryColor.value = colorSchemes.includes(localStorage.colorScheme)
    ? localStorage.colorScheme
    : "blue";

  const primaryColorClass = computed(() => `text-${primaryColor.value}-500`);
  const primaryBgColorClass = computed(() => `bg-${primaryColor.value}-500`);

  function setColor(color) {
    primaryColor.value = color;
    localStorage.colorScheme = color;
  }

  return { primaryColor, primaryColorClass, primaryBgColorClass, setColor };
});
