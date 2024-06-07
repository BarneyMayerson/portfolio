<script setup>
import ThemesDropdown from "@/Components/Generic/ThemesDropdown.vue";

defineEmits(["hide"]);
</script>

<template>
  <div class="divide-y divide-red-500">
    <!-- Header -->
    <div class="flex flex-wrap px-3 py-2">
      <div class="w-2/3">
        <h2 class="text-xl">Theme Settings</h2>
      </div>
      <div class="w-1/3">
        <button class="w-5 h-5 float-right" @click="$emit('hide')">
          <svg
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Themes Dropdown -->
    <div class="px-3 py-2">
      <h3 class="text-lg">Theme Mode</h3>
      <ThemesDropdown />
    </div>
  </div>
</template>
