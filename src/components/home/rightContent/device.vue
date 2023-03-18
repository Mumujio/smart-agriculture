<template>
  <div class="all">
    <h2>物联设备</h2>
    <div class="content" ref="myChartDom"></div>
    <!-- <div class="data">
      <div>23043</div>
      <div>14658</div>
      <div>4758</div>
    </div> -->
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from "vue";
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
    title: {
      text: "Total\n42459",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ffffff",
        fontSize: (12 * window.innerWidth) / 1920,
        fontWeight: 400,
      },
    },
    series: [
      {
        name: "补光器",
        type: "pie",
        // selectedMode: "single",
        radius: ["35%", "45%"],
        label: {
          position: "inner",
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 4758,
            itemStyle: {
              color: "rgb(76,231,181)",
            },
          },
          {
            value: 10000,
            itemStyle: {
              color: "rgb(35,41,51)",
            },
          },
        ],
      },
      {
        name: "监测套件",
        type: "pie",
        radius: ["55%", "65%"],
        label: {
          position: "inner",
        },
        data: [
          {
            value: 14758,
            itemStyle: {
              color: "rgb(249,183,32)",
            },
          },
          {
            value: 20000,
            itemStyle: {
              color: "rgb(35,41,51)",
            },
          },
        ],
      },
      {
        name: "浇灌控制器",
        type: "pie",
        radius: ["75%", "85%"],
        label: {
          position: "inner",
        },
        data: [
          {
            value: 36758,
            itemStyle: {
              color: "rgb(61,135,251)",
            },
          },
          {
            value: 20000,
            itemStyle: {
              color: "rgb(35,41,51)",
            },
          },
        ],
      },
    ],
    legend: {
      data: [
        {
          name: "浇灌控制器",
          icon: "circle",
        },
        {
          name: "监测套件",
          icon: "circle",
        },
        {
          name: "补光器",
          icon: "circle",
        },
      ],
      // itemStyle: {
      //   //图例的样式
      //   itemWidth: 14,
      //   itemHeight: 14,
      // },
      textStyle: {
        fontSize: (12 * window.innerWidth) / 1920,
        fontWeight: 400,
        color: "#ffffff",
      },
      bottom: 0,
      left: 0,
      formatter: function (name) {
        var value = 0;
        var arr = [23043, 14658, 4758];
        for (var i = 0; i < 3; i++) {
          value = arr[i];
        }
        var v = value;
        return `${name}  ${v}`;
      },
      orient: "vertical",
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h2 {
    color: white;
    font-weight: bold;
    font-size: 0.275rem;
    padding-top: 2.44%;
    padding-left: 4%;
    // height: 16.7%;
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
