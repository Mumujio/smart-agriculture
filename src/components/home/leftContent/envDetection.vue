<template>
  <div class="all">
    <h2>环境检测</h2>
    <div class="content">
      <div class="airTem"></div>
      <div class="soilTem"></div>
      <div class="light"></div>
      <div class="airHum"></div>
      <div class="soilHum"></div>
    </div>
    <div class="text">
      <div>空气温度</div>
      <div>土壤温度</div>
      <div>光照强度</div>
      <div>空气湿度</div>
      <div>土壤湿度</div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";
let echarts = inject("echarts");

let airTemChart = null;
let soilTemChart = null;
let lightChart = null;
let airHumChart = null;
let soilHumChart = null;
let chart = reactive({
  airTemOption: {},
  soilTemOption: {},
  lightOption: {},
  airHumOption: {},
  soilHumOption: {},
});

const chartPrepare = () => {
  airTemChart = echarts.init(document.querySelector(".airTem"));
  soilTemChart = echarts.init(document.querySelector(".soilTem"));
  lightChart = echarts.init(document.querySelector(".light"));
  airHumChart = echarts.init(document.querySelector(".airHum"));
  soilHumChart = echarts.init(document.querySelector(".soilHum"));
};
const chartOpen = () => {
  chart.airTemOption = {
    title: {
      text: "25℃",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (13 * window.innerWidth) / 1920,
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: 3,
            itemStyle: {
              color: "#3383FF",
            },
          },
          {
            value: 1,

            itemStyle: {
              color: "#000000",
            },
          },
        ],
        radius: ["40%", "70%"],
        labelLine: {
          show: false,
        },
      },
    ],
  };
  chart.soilTemOption = {
    title: {
      text: "22℃",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (13 * window.innerWidth) / 1920,
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: 1.2,
            itemStyle: {
              color: "#3383FF",
            },
          },
          {
            value: 1,

            itemStyle: {
              color: "#000000",
            },
          },
        ],
        radius: ["40%", "70%"],
        labelLine: {
          show: false,
        },
      },
    ],
  };
  chart.lightOption = {
    title: {
      text: "144Lux",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (13 * window.innerWidth) / 1920,
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: 3,
            itemStyle: {
              color: "#3383FF",
            },
          },
          {
            value: 1,

            itemStyle: {
              color: "#000000",
            },
          },
        ],
        radius: ["40%", "70%"],
        labelLine: {
          show: false,
        },
      },
    ],
  };
  chart.airHumOption = {
    title: {
      text: "20%",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (13 * window.innerWidth) / 1920,
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: 1.3,
            itemStyle: {
              color: "#3383FF",
            },
          },
          {
            value: 3,
            itemStyle: {
              color: "#000000",
            },
          },
        ],
        radius: ["40%", "70%"],
        labelLine: {
          show: false,
        },
      },
    ],
  };
  chart.soilHumOption = {
    title: {
      text: "15%",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (13 * window.innerWidth) / 1920,
      },
    },

    series: [
      {
        type: "pie",
        data: [
          {
            value: 1.2,
            itemStyle: {
              color: "#3383FF",
            },
          },
          {
            value: 3,

            itemStyle: {
              color: "#000000",
            },
          },
        ],
        radius: ["40%", "70%"],
        labelLine: {
          show: false,
        },
      },
    ],
  };
  airTemChart.setOption(chart.airTemOption);
  soilTemChart.setOption(chart.soilTemOption);
  lightChart.setOption(chart.lightOption);
  airHumChart.setOption(chart.airHumOption);
  soilHumChart.setOption(chart.soilHumOption);
};

onMounted(() => {
  chartPrepare();
  chartOpen();
  window.addEventListener("resize", () => {
    airTemChart.resize();
    soilTemChart.resize();
    lightChart.resize();
    airHumChart.resize();
    soilHumChart.resize();
    chartOpen();
  });
});
</script>

<style lang="less" scoped>
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // height: 180px;
  h2 {
    color: white;
    font-weight: bold;
    font-size: 0.275rem;
    // height: 16.67%;
  }
  .content {
    display: flex;
    align-items: center;
    height: 58.89%;
    padding-left: 4.44%;
    padding-right: 2%;
    .airTem {
      flex: 1;
      height: 100%;
    }
    .soilTem {
      flex: 1;
      height: 100%;
    }
    .light {
      flex: 1;
      height: 100%;
    }
    .airHum {
      flex: 1;
      height: 100%;
    }
    .soilHum {
      flex: 1;
      height: 100%;
    }
  }
  .text {
    // flex: 1;
    display: flex;
    font-size: 0.1875rem;
    color: #ffffff;
    text-align: center;
    padding-left: 4.44%;
    padding-right: 2%;
    font-weight: 400;
    div {
      width: 100%;
    }
  }
}
</style>
