<template>
  <router-view />
</template>
<script>
import { onMounted, provide, reactive,props} from "vue";
import * as echarts from "echarts";
import axios from "axios";
export default {
  setup() {
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
