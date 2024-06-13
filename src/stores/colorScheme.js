import { defineStore } from "pinia";
import { ref } from "vue";

const colors = [
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

const shades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

export const useColorSchemeStore = defineStore("colorSchemeStore", () => {
  const primaryColor = ref(null);
  const primaryShade = ref(null);

  primaryColor.value = colors.includes(localStorage.color)
    ? localStorage.color
    : "blue";

  primaryShade.value = shades.includes(localStorage.shade)
    ? localStorage.shade
    : "500";

  function setColor(color) {
    primaryColor.value = color;
    localStorage.color = color;
  }

  function setShade(shade) {
    primaryShade.value = shade;
    localStorage.shade = shade;
  }

  return {
    primaryColor,
    primaryShade,
    colors,
    shades,
    setColor,
    setShade,
  };
});
