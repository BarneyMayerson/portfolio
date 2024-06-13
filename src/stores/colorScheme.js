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

  const shades = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  const primaryColor = ref(null);
  const primaryShade = ref(null);

  primaryColor.value = colorSchemes.includes(localStorage.colorScheme)
    ? localStorage.colorScheme
    : "blue";

  primaryShade.value = shades.includes(localStorage.shade)
    ? localStorage.shade
    : "500";

  function setColor(color) {
    primaryColor.value = color;
    localStorage.colorScheme = color;
  }

  function setShade(shade) {
    primaryShade.value = shade;
    localStorage.shade = shade;
  }

  return {
    primaryColor,
    primaryShade,
    setColor,
    setShade,
  };
});
