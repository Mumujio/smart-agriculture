<template>
  <div class="all">
    <h2>实时数据曲线图</h2>
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
      max: 24,
      min: 16,
      splitNumber: 9,
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      splitNumber: 6,
    },
    series: [
      {
        name: "光照强度",
        data: [
          [16, 62],
          [17, 83],
          [18, 100],
          [19, 72],
          [20, 87],
          [21, 72],
          [22, 87],
          [23, 72],
          [24, 87],
        ],
        type: "line",
        // 平滑过渡
        smooth: true,
        // 折线样式
        lineStyle: {
          color: "rgb(110,155,88)",
        },
        // 是否显示圆点
        symbol: "none",
      },
      // {
      //   name: "土壤湿度",
      //   data: [
      //     [16, 42],
      //     [17, 53],
      //     [18, 80],
      //     [19, 62],
      //     [20, 77],
      //     [21, 72],
      //     [22, 87],
      //     [23, 72],
      //     [24, 87],
      //   ],
      //   type: "line",
      //   smooth: true,
      //   lineStyle: {
      //     color: "rgb(0,30,200)",
      //   },
      //   // 折叠面积区域
      //   areaStyle: {
      //     color: "rgb(0,30,88)",
      //   },
      //   // 是否显示圆点
      //   symbol: "none",
      // },
    ],
    // legend: {
    //   data: [
    //     {
    //       name: "光照强度",
    //       icon: "circle",
    //     },
    //     {
    //       name: "土壤湿度",
    //       icon: "circle",
    //     },
    //   ],
    //   textStyle: {
    //     //图例的文字样式
    //     color: "#ffffff",
    //     fontSize: (16 * window.innerWidth) / 1920,
    //     fontWeight: 400,
    //   },
    //   top: "",
    //   // right: "32%",
    // },
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
<style scoped lang="less">
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40.8%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  .content {
    flex: 1;
  }
}
</style>
