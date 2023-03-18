<template>
  <div id="textall"></div>
</template>

<script>
import { inject, onMounted } from "vue";

export default {
  setup() {
    let axios = inject("axios");
    let echarts = inject("echarts");
    var option = {
      title: {},
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    // 指定图表的配置项和数据
    onMounted(() => {
      var myChart = echarts.init(document.getElementById("textall"));
      myChart.setOption(option);
    });

    // 使用刚指定的配置项和数据显示图表。

    return {};
  },
};
</script>

<style lang="less" scoped>
#textall {
  width: 100vw;
  height: 100vh;
}
</style>
