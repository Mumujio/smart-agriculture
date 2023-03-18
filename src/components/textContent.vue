<template>
  <div id="text">123</div>
</template>

<script>
import { onMounted, reactive, watch,inject,onBeforeMount, toRef } from "vue";
export default {
  setup() {
    let axios = inject("axios");
    let echarts = inject("echarts");
    return {
    };
  },
};
</script>

<style lang="less" scoped>
#text {
  height: 100%;
  width: 100%;
  text-align: center;
  color: rgb(255, 247, 247);
  font-size: 30px;
}
</style>
