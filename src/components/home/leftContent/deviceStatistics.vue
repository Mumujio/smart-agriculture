<template>
  <div class="all">
    <h2>设备统计</h2>
    <div class="content" ref="mychartDom"></div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, onBeforeUnmount } from "vue";
let echarts = inject("echarts");
const mychartDom = ref(null);
let mychart = null;

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

<style lang="less" scoped>
.all {
  height: 100%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: blod;
    color: #ffffff;
    margin: 9px 0 0 14px;
    font-size: 30px;
    // height: 13.54%;
    letter-spacing: 0.02rem;
  }
  .content {
    flex: 1;
  }
}
</style>
