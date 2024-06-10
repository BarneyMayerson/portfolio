import { onMounted, ref, watch } from "vue";

const bgColorClasses = {
  blue: "bg-blue-500",
  teal: "bg-teal-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  indigo: "bg-indigo-500",
  pink: "bg-pink-500",
  lime: "bg-lime-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  stone: "bg-stone-500",
  zinc: "bg-zinc-500",
  slate: "bg-slate-500",
};

const textColorClasses = {
  blue: "text-blue-500",
  teal: "text-teal-500",
  purple: "text-purple-500",
  green: "text-green-500",
  red: "text-red-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  indigo: "text-indigo-500",
  pink: "text-pink-500",
  lime: "text-lime-500",
  sky: "text-sky-500",
  emerald: "text-emerald-500",
  stone: "text-stone-500",
  zinc: "text-zinc-500",
  slate: "text-slate-500",
};

export function useColorSchemes() {
  const colorScheme = ref("blue");

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

  onMounted(() => {
    if (colorSchemes.includes(localStorage.colorScheme)) {
      colorScheme.value = localStorage.colorScheme;
    }
  });

  watch(colorScheme, (colorValue) => {
    localStorage.colorScheme = colorValue;
  });

  return { bgColorClasses, colorScheme };
}
