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
  console.log("被触发");
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
      text:
        `${props?.projectData?.soilEnv?.soilTemperature?.toFixed(1) || 0}` +
        "℃",
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
</script>

<style lang="less" scoped>
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    ::v-deep .header-select {
      max-width: 1.9rem;
      min-width: 1.8rem;

      .el-input__wrapper {
        background-color: rgb(39, 41, 46);
        border: none !important;
        box-shadow: none !important;
        .el-input__inner {
          color: white;
          border: none !important;
          box-shadow: none !important;
        }
      }
    }
    h2 {
      min-width: 1.4rem;
      color: white;
      font-weight: bold;
      font-size: 0.275rem;
      // height: 16.67%;
    }
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
