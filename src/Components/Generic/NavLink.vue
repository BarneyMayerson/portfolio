<script setup>
import { computed } from "vue";
import { useColorSchemeStore } from "@/stores/colorScheme";
import { useColorSchemes } from "@/Composables/useColorSchemes";

const props = defineProps({
  to: Object | String,
  active: Boolean,
});

const colorScheme = useColorSchemeStore();
const { textColorClasses } = useColorSchemes();
const primaryColorClass = computed(
  () => textColorClasses[colorScheme.primaryColor][colorScheme.primaryShade]
);
</script>

<template>
  <RouterLink
    :to
    class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out"
    :class="
      active
        ? 'border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700'
        : `border-transparent ${primaryColorClass} hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700`
    "
  >
    <slot />
  </RouterLink>
</template>
