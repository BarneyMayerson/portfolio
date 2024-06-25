<script setup>
import LaravelLogo from "@/Components/Logos/LaravelLogo.vue";
import VueLogo from "@/Components/Logos/VueLogo.vue";
import BootstrapLogo from "@/Components/Logos/BootstrapLogo.vue";
import ChartLogo from "@/Components/Logos/ChartLogo.vue";
import LivewireLogo from "@/Components/Logos/LivewireLogo.vue";
import TailwindLogo from "@/Components/Logos/TailwindLogo.vue";
</script>

<template>
  <h2 class="font-bold leading-5 text-3xl text-center">Projects</h2>
  <div
    class="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6 mt-8"
  >
    <div class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700">
      <img src="/pvl.png" class="w-full" />
      <div class="mt-3">
        <a
          href="https://github.com/BarneyMayerson/pvlh"
          class="underline font-bold block"
        >
          Locomotive planning
        </a>
        <div class="mt-4 flex items-center space-x-1">
          <div class="w-6 h-6">
            <LaravelLogo />
          </div>
          <span class="text-xs">Laravel 7</span>
          <div class="w-6 h-6">
            <VueLogo />
          </div>
          <span class="text-xs">Vue 2</span>
          <div class="w-6 h-6">
            <BootstrapLogo />
          </div>
          <span class="text-xs">Bootstrap 4</span>
        </div>
      </div>
    </div>

    <div class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700">
      <img src="/dpv.png" class="w-full" />
      <div class="mt-3">
        <a
          href="https://github.com/BarneyMayerson/dpv"
          class="underline font-bold block"
        >
          Delayed Wagons
        </a>
        <div class="mt-4 flex items-center space-x-1">
          <div class="w-6 h-6">
            <LaravelLogo />
          </div>
          <span class="text-xs">Laravel 5</span>
          <div class="w-6 h-6">
            <VueLogo />
          </div>
          <span class="text-xs">Vue 2</span>
          <div class="w-6 h-6">
            <BootstrapLogo />
          </div>
          <span class="text-xs">Bootstrap 2</span>
          <div class="w-6 h-6">
            <ChartLogo />
          </div>
          <span class="text-xs">Chart 2</span>
        </div>
      </div>
    </div>

    <div
      class="p-4 shadow-lg rounded-md bg-gray-200 dark:bg-gray-700 col-span-1 lg:col-span-2 xl:col-span-1"
    >
      <img src="/nfsu.png" class="w-full" />
      <div class="mt-3">
        <a
          href="https://github.com/BarneyMayerson/nfsu2"
          class="underline font-bold block"
        >
          NFSU Cup
        </a>
        <div class="mt-4 flex items-center space-x-1">
          <div class="w-6 h-6">
            <LaravelLogo />
          </div>
          <span class="text-xs">Laravel 8</span>
          <div class="w-6 h-6">
            <LivewireLogo />
          </div>
          <span class="text-xs">Liveware 2 </span>
          <div class="w-6 h-6">
            <TailwindLogo />
          </div>
          <span class="text-xs">Tailwind 2</span>
        </div>
      </div>
    </div>
  </div>
</template>
