<template>
  <div class="all">
    <h2>设备监测</h2>
    <div class="content">
      <div class="content-top" ref="myTopChartDom"></div>
      <div class="content-bottom" ref="myBotChartDom"></div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, getCurrentInstance } from "vue";
let echarts = inject("echarts");

let myTopChartDom = ref(null);
let myBotChartDom = ref(null);
let mycharTop = null;
let mycharBot = null;
const chartTop = reactive({
  option: {
    yAxis: {
      type: "category",
      data: ["正常节点", "异常节点"],
      nameTextStyle: {
        backgroundColor: "red",
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        fontSize: (14 * window.innerWidth) / 1920,
        fontWeight: 400,
        color: "#ffffff",
        hideOverlap: true,
      },
    },
    xAxis: {
      type: "value",
      nameTextStyle: {
        color: "#FFFFFF",
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },

      max: 600,
      min: 0,
    },
    series: [
      {
        data: [586, 87],
        type: "bar",
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
          fontSize: (18 * window.innerWidth) / 1920,
          fontWeight: 400,
          fontFamily: "PingFang SC-Regular",
          textShadowColor: "#000000",
          color: "#ffffff",
        },
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
        },
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
          borderRadius: [0, 10, 10, 0],
        },
      },
    ],
    grid: {
      containLabel: true,
      left: "3%",
      height: 100,
      top: "middle",
    },
  },
});
const chartBottom = reactive({
  option: {},
});

const chartPrepare = () => {
  mycharTop = echarts.init(myTopChartDom.value);
  mycharBot = echarts.init(myBotChartDom.value);
};

const chartOpen = () => {
  mycharTop.setOption(chartTop.option);
  // mycharBot.setOption(chartBottom.option);
};

onMounted(() => {
  chartPrepare();
  chartOpen();
  window.addEventListener("resize", () => {
    mycharTop.resize();
    // mycharBot.resize();
    chartOpen();
  });
});
</script>

<style lang="less" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    margin: 8px 0 13px 10px;

    font-family: "PingFang SC-Bold, PingFang SC";
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 42px 0 54px;
    justify-content: space-between;
    &-top {
      // height: 134px;
      height: 134px;
    }
    &-bottom {
      height: 260px;
    }
  }
}
</style>
