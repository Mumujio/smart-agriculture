<template>
  <div class="all">
    <header>
      <h2>灌溉量</h2>
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
    <div class="content" ref="myChartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, onBeforeUnmount } from "vue";
let echarts = inject("echarts");
let select_value = ref("下午");
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
  height: 55.3%;
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
