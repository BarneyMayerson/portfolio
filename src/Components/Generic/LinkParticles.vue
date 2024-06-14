<script setup>
const options = {
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 12,
    },
    move: {
      direction: "outside",
      enable: true,
      outModes: "bounce",
      // random: true,
      speed: 6,
      // straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        max: 15,
        min: 5,
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
  <vue-particles :options id="particles" />
</template>
