<template>
  <div class="all">
    <header>
      <h2>环境检测</h2>
      <el-select
        v-model="select_value"
        size="small"
        class="header-select"
        @change="change"
      >
        <el-option
          v-for="item in [
            { label: '1号节点', value: '1号节点' },
            { label: '2号节点', value: '2号节点' },
            { label: '3号节点', value: '3号节点' },
          ]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      /></el-select>
    </header>

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
import {
  inject,
  onMounted,
  reactive,
  ref,
  getCurrentInstance,
  defineProps,
  onBeforeUnmount,
} from "vue";
let echarts = inject("echarts");
let select_value = ref("1号节点");
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
const props = defineProps(["projectData"]);

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
      text: `${props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0}` + "℃",
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
            value: props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0,
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
      text:
        `${props?.projectData?.soilEnv?.soilTemperature?.toFixed(1) || 0}` +
        "℃",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (17 * window.innerWidth) / 1920,
      },
    },
    series: [
      {
        type: "pie",
        data: [
          {
            value: props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0,
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
      text:
        `${props?.projectData?.lightValue?.lightValue?.toFixed(1) || 0}` +
        "Lux",
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
            value: props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0,
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
      text: `${props?.projectData?.airHum?.airHumidity?.toFixed(1) || 0}` + "%",
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
            value: props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0,
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
      text:
        `${props?.projectData?.soilEnv?.soilHumidity?.toFixed(1) || 0} ` + "%",
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
            value: props?.projectData?.airTmp?.airTemp?.toFixed(1) || 0,
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
defineExpose({
  chartOpen,
});
const { proxy } = getCurrentInstance();
const change = (val) => {
  // 模拟节点改变
  // if (val == "1号节点") {
  //   proxy.$EventBus.emit("light_dayData", [215, 311, 256, 384]);
  //   proxy.$EventBus.emit("light_strength", [
  //     [
  //       [16, 62],
  //       [17, 83],
  //       [18, 100],
  //       [19, 72],
  //       [20, 87],
  //     ],
  //     [
  //       [16, 42],
  //       [17, 53],
  //       [18, 80],
  //       [19, 62],
  //       [20, 77],
  //     ],
  //   ]);
  // } else if (val == "2号节点") {
  //   proxy.$EventBus.emit("light_dayData", [123, 425, 215, 582]);
  //   proxy.$EventBus.emit("light_strength", [215, 311, 256, 384]);
  // } else {
  //   proxy.$EventBus.emit("light_dayData", [98, 356, 125, 411]);
  //   proxy.$EventBus.emit("light_strength", [215, 311, 256, 384]);
  // }
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
onBeforeUnmount(() => {
  airTemChart.dispose();
  soilTemChart.dispose();
  lightChart.dispose();
  airHumChart.dispose();
  soilHumChart.dispose();
});
</script>

<style lang="less" scoped>
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    ::v-deep .header-select {
      max-width: 180px;
      // min-width: 1.8rem;
      margin-right: 35px;

      .el-input__wrapper {
        background-color: rgb(39, 41, 46);
        border: none !important;
        box-shadow: none !important;
        width: 151px;
        height: 35px;
        .el-input__inner {
          color: white;
          border: none !important;
          box-shadow: none !important;
          font-size: 21px;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          height: auto;
        }
      }
    }
    h2 {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      margin: 5px 0 0 10px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;

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
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    font-weight: 400;
    margin-bottom: 15px;
    div {
      width: 100%;
    }
  }
}
</style>
