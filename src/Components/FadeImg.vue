<script setup>
import { reactive, ref, watch } from "vue";
import FadeTransition from "@/Components/FadeTransition.vue";
import AnimatedSpin from "@/Components/Generic/AnimatedSpin.vue";

const props = defineProps({
  imgUrl: String,
});

const src = ref();
const show = reactive({ showing: false });
const showImg = function () {
  show.showing = true;
};

watch(
  () => props.imgUrl,
  () => {
    src.value = props.imgUrl;
    show.showing = false;
  },
  { immediate: true }
);
</script>

<template>
  <div class="relative">
    <div
      v-show="!show.showing"
      class="absolute top-[50%] left-[50%] -ml-2.5 -mt-2.5"
    >
      <AnimatedSpin />
    </div>
    <FadeTransition v-show="show.showing">
      <img
        class="w-full object-cover rounded-xl cursor-pointer"
        :src="src"
        @load="showImg()"
      />
    </FadeTransition>
  </div>
</template>
