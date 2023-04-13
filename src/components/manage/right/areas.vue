<template>
  <div class="all">
    <h2>占地面积</h2>
    <div class="content" ref="myChartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, onBeforeUnmount } from "vue";
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
    legend: {
      textStyle: {
        color: "#F5F6FA",
        fontSize: (window.innerWidth / 1920) * 20,
        fontFamily: "PingFang SC-Regular",
      },
      left: "20%",
    },
    xAxis: [
      {
        type: "category",
        // boundaryGap: true,
        data: ["番茄", "豆芽", "花菜", "香菜", "芹菜", "小白菜", "辣椒"],
        nameTextStyle: {
          fontSize: (12 * window.innerWidth) / 1920,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        nameTextStyle: {
          fontSize: (12 * window.innerWidth) / 1920,
        },
      },
    ],
    series: [
      {
        name: "单位：亩",
        type: "bar",
        data: [8.2, 10.4, 11.4, 12, 7.2, 12.2, 11],
      },
    ],
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
  chartOpen();
}
onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);

  mychart.dispose();
  mychart = null;
});
</script>
<style scoped lang="less">
.all {
  height: 55.6%;
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
