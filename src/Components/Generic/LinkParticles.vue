<script setup>
const props = defineProps({
  primaryColor: {
    type: String,
    default: "#3b82f6",
  },
});

const options = {
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  particles: {
    color: {
      value: props.primaryColor,
    },
    links: {
      color: props.primaryColor,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: true,
      speed: 8,
      // straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 160,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        max: 6,
        min: 2,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 5,
      },
    },
  },
};
</script>

<template>
  <vue-particles id="particles" :options />
</template>
