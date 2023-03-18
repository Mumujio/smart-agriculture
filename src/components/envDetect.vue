<template>
  <div id="envDetect"></div>
</template>

<script>
import { inject, onMounted, reactive, toRefs, onUnmounted } from "vue";
export default {
  name: "envDectect",
  setup() {
    let axios = inject("axios");
    let echarts = inject("echarts");
    const rawBar = { myChart: null, option: null };
    const chartPrepare = () => {
      rawBar.myChart = echarts.init(document.getElementById("envDetect"));
    };
    const chartOpen = () => {
      rawBar.option = {
        title: {
          text: "25℃",
          left: "center",
          top: "center",
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                labelLine: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  color: "#00ff00",
                },
              },
              {
                value: 100,
                labelLine: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  color: "#2c2d2d",
                },
              },
            ],
            radius: ["40%", "70%"],
          },
        ],
      };
      rawBar.myChart.setOption(rawBar.option);
    };
    onMounted(() => {
      chartPrepare();
      chartOpen();
      window.addEventListener("resize", () => {
        rawBar.myChart.resize();
      });
    });
    onUnmounted(() => {
      //销毁
      echarts.dispose(rawBar.myChart);
      rawBar.myChart = null;
    });

    return {
      rawBar,
    };
  },
};
</script>

<style lang="less" scoped>
#envDetect {
  width: 100%;
  height: 100%;
}
</style>
