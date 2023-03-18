<template>
  <dv-loading v-if="option.isShowLoading">Loading...</dv-loading>

  <div class="earth" ref="containerDom">
    <canvas ref="webgl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import threeExperience from "./indexTHREE/Experience";
const webgl = ref(null);
const three = {
  experience: null,
};
const containerDom = ref(null);
const option = reactive({
  isShowLoading: true,
});
onMounted(() => {
  three.experience = new threeExperience(webgl.value, containerDom.value);
  three.experience.resources.on("sourceReady", () => {
    option.isShowLoading = false;
  });
});

onBeforeUnmount(() => {
  three.experience.destroy();
});
</script>

<style lang="less" scoped>
.earth {
  height: 100%;
  width: 100%;
  canvas {
    width: 100%;
  }
}
</style>
