<script setup>
defineProps({
  color: {
    type: String,
    default: "blue",
  },
});

const colorClasses = {
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
</script>

<template>
  <button :class="`${colorClasses[color]} p-5 rounded`"></button>
</template>
