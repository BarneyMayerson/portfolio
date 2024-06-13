import { onMounted, ref, watch } from "vue";
import { useColorSchemeStore } from "@/stores/colorScheme";

const bgColorClasses = {
  blue: {
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",
  },
  teal: {
    100: "bg-teal-100",
    200: "bg-teal-200",
    300: "bg-teal-300",
    400: "bg-teal-400",
    500: "bg-teal-500",
    600: "bg-teal-600",
    700: "bg-teal-700",
    800: "bg-teal-800",
    900: "bg-teal-900",
  },
  purple: {
    100: "bg-purple-100",
    200: "bg-purple-200",
    300: "bg-purple-300",
    400: "bg-purple-400",
    500: "bg-purple-500",
    600: "bg-purple-600",
    700: "bg-purple-700",
    800: "bg-purple-800",
    900: "bg-purple-900",
  },
  green: {
    100: "bg-green-100",
    200: "bg-green-200",
    300: "bg-green-300",
    400: "bg-green-400",
    500: "bg-green-500",
    600: "bg-green-600",
    700: "bg-green-700",
    800: "bg-green-800",
    900: "bg-green-900",
  },
  red: {
    100: "bg-red-100",
    200: "bg-red-200",
    300: "bg-red-300",
    400: "bg-red-400",
    500: "bg-red-500",
    600: "bg-red-600",
    700: "bg-red-700",
    800: "bg-red-800",
    900: "bg-red-900",
  },
  orange: {
    100: "bg-orange-100",
    200: "bg-orange-200",
    300: "bg-orange-300",
    400: "bg-orange-400",
    500: "bg-orange-500",
    600: "bg-orange-600",
    700: "bg-orange-700",
    800: "bg-orange-800",
    900: "bg-orange-900",
  },
  yellow: {
    100: "bg-yellow-100",
    200: "bg-yellow-200",
    300: "bg-yellow-300",
    400: "bg-yellow-400",
    500: "bg-yellow-500",
    600: "bg-yellow-600",
    700: "bg-yellow-700",
    800: "bg-yellow-800",
    900: "bg-yellow-900",
  },
  indigo: {
    100: "bg-indigo-100",
    200: "bg-indigo-200",
    300: "bg-indigo-300",
    400: "bg-indigo-400",
    500: "bg-indigo-500",
    600: "bg-indigo-600",
    700: "bg-indigo-700",
    800: "bg-indigo-800",
    900: "bg-indigo-900",
  },
  pink: {
    100: "bg-pink-100",
    200: "bg-pink-200",
    300: "bg-pink-300",
    400: "bg-pink-400",
    500: "bg-pink-500",
    600: "bg-pink-600",
    700: "bg-pink-700",
    800: "bg-pink-800",
    900: "bg-pink-900",
  },
  lime: {
    100: "bg-lime-100",
    200: "bg-lime-200",
    300: "bg-lime-300",
    400: "bg-lime-400",
    500: "bg-lime-500",
    600: "bg-lime-600",
    700: "bg-lime-700",
    800: "bg-lime-800",
    900: "bg-lime-900",
  },
  sky: {
    100: "bg-sky-100",
    200: "bg-sky-200",
    300: "bg-sky-300",
    400: "bg-sky-400",
    500: "bg-sky-500",
    600: "bg-sky-600",
    700: "bg-sky-700",
    800: "bg-sky-800",
    900: "bg-sky-900",
  },
  emerald: {
    100: "bg-emerald-100",
    200: "bg-emerald-200",
    300: "bg-emerald-300",
    400: "bg-emerald-400",
    500: "bg-emerald-500",
    600: "bg-emerald-600",
    700: "bg-emerald-700",
    800: "bg-emerald-800",
    900: "bg-emerald-900",
  },
  stone: {
    100: "bg-stone-100",
    200: "bg-stone-200",
    300: "bg-stone-300",
    400: "bg-stone-400",
    500: "bg-stone-500",
    600: "bg-stone-600",
    700: "bg-stone-700",
    800: "bg-stone-800",
    900: "bg-stone-900",
  },
  zinc: {
    100: "bg-zinc-100",
    200: "bg-zinc-200",
    300: "bg-zinc-300",
    400: "bg-zinc-400",
    500: "bg-zinc-500",
    600: "bg-zinc-600",
    700: "bg-zinc-700",
    800: "bg-zinc-800",
    900: "bg-zinc-900",
  },
  slate: {
    100: "bg-slate-100",
    200: "bg-slate-200",
    300: "bg-slate-300",
    400: "bg-slate-400",
    500: "bg-slate-500",
    600: "bg-slate-600",
    700: "bg-slate-700",
    800: "bg-slate-800",
    900: "bg-slate-900",
  },
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
  const colorShade = ref("500");

  onMounted(() => {
    const { colors, shades } = useColorSchemeStore();

    if (colors.includes(localStorage.colorScheme)) {
      colorScheme.value = localStorage.colorScheme;
    }

    if (shades.includes(localStorage.colorShade)) {
      colorShade.value = localStorage.shade;
    }
  });

  watch(colorScheme, (colorValue) => {
    localStorage.colorScheme = colorValue;
  });

  watch(colorShade, (shadeValue) => {
    localStorage.shade = shadeValue;
  });

  return { bgColorClasses, colorScheme, colorShade };
}
