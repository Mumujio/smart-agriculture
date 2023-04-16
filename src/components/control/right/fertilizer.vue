<template>
  <div class="all">
    <header>
      <h2>肥料使用量</h2>
      <el-select v-model="select_value" size="small" class="header-select">
        <el-option
          v-for="item in [
            { label: '上午', value: '上午' },
            { label: '中午', value: '中午' },
            { label: '下午', value: '下午' },
          ]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      /></el-select>
    </header>
    <div class="content" ref="mychartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, onBeforeUnmount } from "vue";
let echarts = inject("echarts");
const mychartDom = ref(null);
let mychart = null;
let select_value = ref("上午");

let data = [
  {
    name: "灌溉类",
    value: 36,
  },
  {
    name: "传感器",
    value: 14,
  },
  {
    name: "步进电机",
    value: 8,
  },
];
const chart = reactive({
  option: {},
});
const chartPrepare = () => {
  mychart = echarts.init(mychartDom.value);
};
const chartOpen = () => {
  chart.option = {
    series: [
      {
        type: "pie",
        data: data,
        name: "设备统计",
        radius: ["40%", "70%"],
        center: ["75%", "50%"],
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: (18 * window.innerWidth) / 1920,
        //     fontWeight: "bold",
        //   },
        // },
      },
    ],
    legend: {
      type: "plain",
      orient: "vertical",
      top: "center",
      left: (50 * window.innerWidth) / 1920,
      textStyle: {
        color: "#F5F6FA",
        fontSize: (20 * window.innerWidth) / 1920,
        fontWeight: 400,
        padding: [0, 0, 0, (26 * window.innerWidth) / 1920],
      },
      itemWidth: (17 * window.innerWidth) / 1920,
      itemHeight: (17 * window.innerHeight) / 1080,
      itemGap: (17 * window.innerHeight) / 1080,
      // data: ["灌溉类", "传感器", "步进电机"],
      formatter: function (name) {
        let arrValue = 0;
        data.forEach((item) => {
          if (item.name == name) {
            arrValue = item.value;
          }
        });
        return name + "    " + arrValue;
      },
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 41.85%;
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
      margin: 0 0 0 10px;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
