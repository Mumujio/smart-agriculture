<template>
  <div class="all">
    <h2>种植分布</h2>
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

let data = [
  {
    name: "番茄",
    value: 25,
  },

  {
    name: "豆芽",
    value: 13,
  },
  {
    name: "花菜",
    value: 12,
  },
  {
    name: "香菜",
    value: 12,
  },
  {
    name: "芹菜",
    value: 25,
  },
  {
    name: "小白菜",
    value: 13,
  },
];
const chartPrepare = () => {
  mychart = echarts.init(myChartDom.value);
};

const chartOpen = () => {
  chart.option = {
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
      formatter: function (name) {
        let arrValue = 0;
        data.forEach((item) => {
          if (item.name == name) {
            arrValue = item.value;
          }
        });
        return name + "    " + arrValue + "%";
      },
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "种植分布",
        type: "pie",
        // radius: [20, 100],
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          // borderRadius: 5,
        },
        label: {
          show: false,
        },
        data: data,
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

<style lang="less" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 570px;
  height: 310px;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    margin: 8px 0 0 10px;

    font-family: "PingFang SC-Bold, PingFang SC";
  }
  .content {
    flex: 1;
  }
  .data {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
    font-size: 0.15rem;
    height: 35.9%;
    padding-top: 4.5%;
    font-weight: 400;
    div {
      flex: 1;
    }
  }
}
</style>
