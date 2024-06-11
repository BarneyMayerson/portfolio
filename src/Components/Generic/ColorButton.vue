<script setup>
import { useColorSchemes } from "@/Composables/useColorSchemes";
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "blue",
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const { bgColorClasses } = useColorSchemes();

const outliningClasses = computed(() =>
  props.active
    ? "outline outline-2 outline-neutral-400 dark:outline-neutral-200"
    : "focus:outline focus:outline-neutral-800 dark:focus:outline-neutral-200"
);
</script>

<template>
  <button
    :class="`${bgColorClasses[color]} p-5 rounded outline-offset-2 ${outliningClasses}`"
  ></button>
</template>
