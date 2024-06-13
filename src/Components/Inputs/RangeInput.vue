<script setup>
import { computed } from "vue";
import { useColorSchemes } from "@/Composables/useColorSchemes";
import { useColorSchemeStore } from "@/stores/colorScheme";

defineProps(["color", "shade"]);

const { bgColorClasses } = useColorSchemes();

const colorScheme = useColorSchemeStore();

const primaryShade = computed(() => colorScheme.primaryShade);

const onInput = (event) => {
  colorScheme.setShade(event.target.value);
};
</script>

<template>
  <input
    type="range"
    class="w-full h-2 appearance-none outline-none rounded mt-3 focus:ring-1 focus:ring-neutral-500 focus:ring-offset-4"
    :class="`${bgColorClasses[color][shade]}`"
    min="100"
    max="900"
    step="100"
    :value="primaryShade"
    @input="onInput"
  />
</template>
