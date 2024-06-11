<script setup>
import { computed } from "vue";
import { useColorSchemeStore } from "@/stores/colorScheme";
import ThemesDropdown from "@/Components/Generic/ThemesDropdown.vue";
import ColorButton from "@/Components/Generic/ColorButton.vue";

const colorScheme = useColorSchemeStore();
const primaryColor = computed(() => colorScheme.primaryColor);
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

    <!-- Color Schema -->
    <div class="px-3 py-2">
      <h3 class="text-lg ml-2 mb-1">Color Scheme</h3>
      <div class="flex flex-wrap w-full">
        <div class="w-1/5 p-1">
          <ColorButton
            color="purple"
            @click="colorScheme.setColor('purple')"
            :active="primaryColor === 'purple'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="indigo"
            @click="colorScheme.setColor('indigo')"
            :active="primaryColor === 'indigo'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="blue"
            @click="colorScheme.setColor('blue')"
            :active="primaryColor === 'blue'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="sky"
            @click="colorScheme.setColor('sky')"
            :active="primaryColor === 'sky'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="teal"
            @click="colorScheme.setColor('teal')"
            :active="primaryColor === 'teal'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="emerald"
            @click="colorScheme.setColor('emerald')"
            :active="primaryColor === 'emerald'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="green"
            @click="colorScheme.setColor('green')"
            :active="primaryColor === 'green'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="lime"
            @click="colorScheme.setColor('lime')"
            :active="primaryColor === 'lime'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="yellow"
            @click="colorScheme.setColor('yellow')"
            :active="primaryColor === 'yellow'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="orange"
            @click="colorScheme.setColor('orange')"
            :active="primaryColor === 'orange'"
          />
        </div>

        <div class="w-1/5 p-1">
          <ColorButton
            color="red"
            @click="colorScheme.setColor('red')"
            :active="primaryColor === 'red'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="pink"
            @click="colorScheme.setColor('pink')"
            :active="primaryColor === 'pink'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="stone"
            @click="colorScheme.setColor('stone')"
            :active="primaryColor === 'stone'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="zinc"
            @click="colorScheme.setColor('zinc')"
            :active="primaryColor === 'zinc'"
          />
        </div>
        <div class="w-1/5 p-1">
          <ColorButton
            color="slate"
            @click="colorScheme.setColor('slate')"
            :active="primaryColor === 'slate'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
