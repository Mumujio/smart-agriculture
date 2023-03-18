<template>
  <div id="pie"></div>
</template>

<script>
import { onMounted, reactive, watch, inject, onUnmounted, toRefs } from "vue";
export default {
  name: "linePage",
  props: ["option"],
  setup(props) {
    let axios = inject("axios");
    let echarts = inject("echarts");
    const dataBar = reactive({
      chartData: props.option,
      option: {},
    });
    const rawBar = {};
    const chartPrepare = () => {
      rawBar.myChart = echarts.init(document.getElementById("pie"));
    };
    const chartOpen = () => {
      dataBar.option = {
        title: {
          text: "各省份确诊病例数",
          left: "center",
          top: "center",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: dataBar.chartData[0].confirmedCount,
                name: "安徽",
              },
              {
                value: dataBar.chartData[1].confirmedCount,
                name: "澳门",
              },
              {
                value: dataBar.chartData[2].confirmedCount,
                name: "北京",
              },
              {
                value: dataBar.chartData[3].confirmedCount,
                name: "重庆",
              },
              {
                value: dataBar.chartData[4].confirmedCount,
                name: "福建",
              },
              {
                value: dataBar.chartData[5].confirmedCount,
                name: "广东",
              },
              {
                value: dataBar.chartData[6].confirmedCount,
                name: "甘肃",
              },
            ],
          },
        ],
        
      };
      rawBar.myChart.setOption(dataBar.option, true);
      window.addEventListener("resize", () => {
        rawBar.myChart.resize();
      });
    };
    onMounted(() => {
      chartPrepare();
      chartOpen();
    });
    watch(
      dataBar.chartData,
      (newValue) => {
        chartOpen();
      },
      { deep: true }
    );
    onUnmounted(() => {
      //销毁
      echarts.dispose(rawBar.myChart);
      rawBar.myChart = null;
    });
    return {
      ...toRefs(dataBar),
      rawBar,
    };
  },
};
</script>

<style lang="less" scoped>
#pie {
  height: 80%;
  width: 80%;
}
canvas {
  height: 100%;
  width: 100%;
}
</style>
