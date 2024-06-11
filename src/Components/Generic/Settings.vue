<script setup>
import ThemesDropdown from "@/Components/Generic/ThemesDropdown.vue";
import ColorButton from "@/Components/Generic/ColorButton.vue";
import { useColorSchemeStore } from "@/stores/colorScheme";

const { setColor } = useColorSchemeStore();
</script>

<template>
  <div class="divide-y divide-red-500">
    <!-- Header -->
    <div class="flex flex-wrap px-3 py-2">
      <div class="w-2/3">
        <h2 class="text-xl ml-1">Theme Settings</h2>
      </div>
      <div class="w-1/3">
        <button class="w-5 h-5 float-right" @click="$emit('hide')">
          <svg
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
      <h3 class="text-lg ml-2 mb-1">Theme Mode</h3>
      <ThemesDropdown />
    </div>

    <!-- Theme Color -->
    <div class="px-3 py-2">
      <h3 class="text-lg ml-2 mb-1">Color Scheme</h3>
      <div class="flex flex-wrap w-full">
        <div class="w-1/5 p-1">
          <ColorButton color="purple" @click="setColor('purple')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="indigo" @click="setColor('indigo')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="blue" @click="setColor('blue')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="sky" @click="setColor('sky')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="teal" @click="setColor('teal')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="emerald" @click="setColor('emerald')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="green" @click="setColor('green')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="lime" @click="setColor('lime')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="yellow" @click="setColor('yellow')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="orange" @click="setColor('orange')" />
        </div>

        <div class="w-1/5 p-1">
          <ColorButton color="red" @click="setColor('red')" />
        </div>

        <div class="w-1/5 p-1">
          <ColorButton color="pink" @click="setColor('pink')" />
        </div>

        <div class="w-1/5 p-1">
          <ColorButton color="stone" @click="setColor('stone')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="zinc" @click="setColor('zinc')" />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton color="slate" @click="setColor('slate')" />
        </div>
      </div>
    </div>
  </div>
</template>
