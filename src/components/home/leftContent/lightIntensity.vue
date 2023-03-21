<template>
  <div class="all">
    <h2>光照强度检测曲线图</h2>
    <div class="content" ref="mychartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from "vue";
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
      max: 20,
      min: 16,
    },
    yAxis: {
      splitLine: {
        show: false,
      },
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
      {
        name: "土壤湿度",
        data: [
          [16, 42],
          [17, 53],
          [18, 80],
          [19, 62],
          [20, 77],
        ],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "rgb(0,30,200)",
        },
        // 折叠面积区域
        areaStyle: {
          color: "rgb(0,30,88)",
        },
        // 是否显示圆点
        symbol: "none",
      },
    ],
    legend: {
      data: [
        {
          name: "光照强度",
          icon: "circle",
        },
        {
          name: "土壤湿度",
          icon: "circle",
        },
      ],
      textStyle: {
        //图例的文字样式
        color: "#ffffff",
        fontSize: (16 * window.innerWidth) / 1920,
        fontWeight: 400,
      },
      top: "7%",
      right: "32%",
    },
  };
  mychart.setOption(chart.option);
};
onMounted(() => {
  chartPrepare();
  chartOpen();
  window.addEventListener("resize", () => {
    mychart.resize();
    chartOpen();
  });
});
</script>

<style lang="less" scoped>
.all {
  height: 382px;
  width: 100%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    // height: 13.54%;
    letter-spacing: 6px;
    margin: 10px 0 0 16px;
  }
  .content {
    flex: 1;
  }
}
</style>
