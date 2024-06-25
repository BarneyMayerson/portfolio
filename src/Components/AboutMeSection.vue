<script setup>
import { computed, ref, watch } from "vue";
import FadeImg from "@/Components/FadeImg.vue";

const images = ["26", "27", "28", "29", "30"];
let index = Math.floor(Math.random() * 5);
const currentImage = ref(images[index]);

const imgUrl = computed(() => `/${currentImage.value}.jpg`);

const change = () => {
  index = index < images.length - 1 ? ++index : 0;

  currentImage.value = images[index];
};

const imageKey = ref(0);
watch(currentImage, () => {
  imageKey.value++;
});
</script>

<template>
  <h2 class="font-bold leading-5 text-3xl text-center">About Me</h2>
  <div class="flex flex-col space-y-6 items-center justify-center">
    <div class="w-4/5 my-4 text-center text-xl">
      <p>
        Hello, my name is Ian and I am a web app amateur developer. I take
        ready-made packages and well-known techniques and create websites for my
        needs and the needs of the company where I work. It seems very simple
        :). But it is not so.
      </p>
      <p class="mt-2">
        My favorite developer stack includes Laravel, VueJS, TailwindCSS and
        InertiaJS for SPA.
      </p>
    </div>
    <div class="flex justify-center h-48">
      <div class="w-64">
        <FadeImg :imgUrl :key="imageKey" @click="change" />
      </div>
    </div>
    <div class="w-4/5 text-center text-xl">
      <p class="mt-4">
        I was once a huge Need for Speen Underground (2003) fan. I was really
        sad when EA closed the online service. Fortunately, there was a person
        who created a server for the online game from scratch. By chance I came
        across the source code of this server. The&nbsp;server allowed you to
        play online, but unfortunately did not keep statistics. Then I got the
        idea to improve the server for maintaining statistics. When I did this I
        wanted to create a website for online tournaments. This is what finally
        brought me into web app development.
      </p>
    </div>
  </div>
</template>
