<script setup>
import { useColorSchemes } from "@/Composables/useColorSchemes";
import { useColorSchemeStore } from "@/stores/colorScheme";

defineProps(["color", "shade"]);

const { bgColorClasses } = useColorSchemes();

const { primaryShade, setShade } = useColorSchemeStore();

const onInput = (event) => {
  const target = event.target;

  setShade(target.value);
};
</script>

<template>
  <input
    type="range"
    class="w-full appearance-none outline-none rounded h-2"
    :class="`${bgColorClasses[color][shade]}`"
    min="100"
    max="900"
    step="100"
    :value="primaryShade"
    @input="onInput"
  />
</template>
