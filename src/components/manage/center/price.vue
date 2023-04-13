<template>
  <div class="all">
    <h2>价格走向</h2>
    <div class="content" ref="mychartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, onBeforeUnmount } from "vue";
let echarts = inject("echarts");
const props = defineProps(["projectData"]);
const mychartDom = ref(null);
let mychart = null;
const chart = reactive({
  option: {},
});
// const { proxy } = getCurrentInstance();
// proxy.$EventBus.on("light_strength", (data) => {
//   light_change(data);
// });

// const light_change = (data) => {};
const chartPrepare = () => {
  mychart = echarts.init(mychartDom.value);
};
const chartOpen = () => {
  chart.option = {
    xAxis: {
      splitNumber: 9,
      axisLine: {
        show: false,
      },
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
      type: "category",
    },
    yAxis: {
      type: "value",

      //   splitLine: {
      //     show: false,
      //   },
      splitNumber: 6,
    },
    series: [
      {
        name: "光照强度",
        data: [3, 6, 7, 4, 5, 4, 7, 10],
        type: "line",
        // 平滑过渡
        smooth: true,
        // 折线样式
        lineStyle: {
          color: "rgb(110,155,88)",
        },
        // 是否显示圆点
        symbol: "none",
        areaStyle: {},
      },
    ],
    grid: {
      containLabel: true,
      // left: "3%",
      // height: "100%",
      left: "2%",
      right: "2%",
      top: "2%",
      bottom: "2%",
    },
    tooltip: {
      show: true,
    },
  };
  mychart.setOption(chart.option);
};
onMounted(() => {
  chartPrepare();
  chartOpen();
  window.addEventListener("resize", resize);
});
function resize() {
  mychart.resize();
}
onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);

  mychart.dispose();
  mychart = null;
});
</script>

<style lang="less" scoped>
.all {
  height: 55.6%;
  width: 100%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    flex: 1;
  }
}
</style>
