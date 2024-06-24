<script setup>
import { onMounted, ref } from "vue";

const show = ref(false);

onMounted(() => (show.value = true));
</script>
<template>
  <Transition name="fade">
    <slot v-if="show"></slot>
  </Transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}
</style>
