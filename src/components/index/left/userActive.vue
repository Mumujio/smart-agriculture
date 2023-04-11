<template>
  <div class="all">
    <h2>用户活跃概况</h2>
    <div class="content" ref="myChartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, getCurrentInstance } from "vue";
let echarts = inject("echarts");

const myChartDom = ref(null);
let mychart = null;
const chart = reactive({
  option: {},
});
const chartPrepare = () => {
  mychart = echarts.init(myChartDom.value);
};

const chartOpen = () => {
  chart.option = {
    // title: {
    //   text: "Dynamic Data",
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56",
        },
      },
    },
    // legend: {},
    // toolbox: {
    //   show: true,
    //   feature: {
    //     dataView: { readOnly: false },
    //     restore: {},
    //     saveAsImage: {},
    //   },
    // },
    // dataZoom: {
    //   show: false,
    //   start: 0,
    //   end: 100,
    // },
    xAxis: [
      {
        type: "category",
        // boundaryGap: true,
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
      },
    ],
    yAxis: [
      {
        type: "value",
        // scale: true,
        // name: "Price",
        // max: 16,
        // min: 0,
        // boundaryGap: [0.2, 0.2],
      },
    ],
    series: [
      {
        name: "活跃人数",
        type: "bar",
        data: [5, 9, 12, 10, 13, 8, 11, 9],
      },
      {
        name: "活跃人数",
        type: "line",
        data: [5, 9, 12, 10, 13, 8, 11, 9],
      },
    ],
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
<style scoped lang="less">
.all {
  height: 48.8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: rgba(255, 255, 255, 0.1);

  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px 8px 8px 8px;

  h2 {
    font-size: 30px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 0px 6px #20bdff;
    padding-top: 2.44%;
    padding-left: 4%;
  }
  .content {
    flex: 1;
  }
}
</style>
