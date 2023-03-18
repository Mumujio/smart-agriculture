<template>
  <div class="all">
    <h2>今日数据</h2>
    <div class="day">
      <div class="dayContent"></div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, getCurrentInstance } from "vue";
let axios = inject("axios");
let echarts = inject("echarts");
let mychart = null;
const chart = reactive({
  option: {},
});
let width = window.innerWidth;
// const { proxy } = getCurrentInstance();
// proxy.$EventBus.on("light_dayData", (data) => {
//   light_change(data);
// });
// const light_change = (data) => {
//   chart.option = {
//     xAxis: {
//       type: "value",
//       splitLine: {
//         show: false,
//       },
//       axisLabel: {
//         show: false,
//       },
//     },
//     yAxis: {
//       type: "category",
//       data: ["数据采集", "图像采集", "自动控制", "智能预警"],

//       splitLine: {
//         show: false,
//       },
//       nameTextStyle: {
//         padding: [0, 0, 0, 4],
//       },
//       axisLabel: {
//         fontSize: (15 * window.innerWidth) / 1920,
//         fontWeight: 400,
//         color: "#ffffff",
//         hideOverlap: true,
//       },
//     },
//     series: [
//       {
//         data: data,
//         type: "bar",
//         showBackground: true,
//         backgroundStyle: {
//           color: "rgba(220, 220, 220, 0.2)",
//           borderRadius: [0, 10, 10, 0],
//         },
//         label: {
//           show: true,
//           position: "right",
//           valueAnimation: true,
//           fontSize: (15 * window.innerWidth) / 1920,
//           fontWeight: 400,
//           fontFamily: "PingFang SC-Regular",
//           textShadowColor: "#000000",
//           color: "#ffffff",
//         },
//         itemStyle: {
//           borderRadius: [0, 10, 10, 0],
//         },
//       },
//     ],
//     grid: {
//       containLabel: true,
//       left: "2%",
//       height: 100,
//       top: "middle",
//     },
//   };
//   mychart.setOption(chart.option);
// };
const chartPrepare = () => {
  mychart = echarts.init(document.querySelector(".dayContent"));
};
const chartOpen = () => {
  chart.option = {
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: ["数据采集", "图像采集", "自动控制", "智能预警"],

      splitLine: {
        show: false,
      },
      nameTextStyle: {
        padding: [0, 0, 0, 4],
      },
      axisLabel: {
        fontSize: (15 * window.innerWidth) / 1920,
        fontWeight: 400,
        color: "#ffffff",
        hideOverlap: true,
      },
    },
    series: [
      {
        data: [215, 311, 256, 384],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.2)",
          borderRadius: [0, 10, 10, 0],
        },
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
          fontSize: (15 * window.innerWidth) / 1920,
          fontWeight: 400,
          fontFamily: "PingFang SC-Regular",
          textShadowColor: "#000000",
          color: "#ffffff",
        },
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
        },
      },
    ],
    grid: {
      containLabel: true,
      left: "2%",
      height: 100,
      top: "middle",
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h2 {
    color: white;
    font-weight: bold;
    font-size: 0.275rem;
    // height: 15.3%;
    padding-top: 3.56%;
  }
  .day {
    flex: 1;
    padding-left: 11.11%;
    .dayContent {
      height: 100%;
    }
  }
}
</style>
