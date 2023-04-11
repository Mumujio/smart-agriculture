<template>
  <div class="all">
    <h2>用户分布</h2>
    <div class="content" ref="myChartDom"></div>
    <!-- <div class="data">
      <div>23043</div>
      <div>14658</div>
      <div>4758</div>
    </div> -->
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
// const { ctx } = getCurrentInstance();
// ctx.$EventBus.on("change_personNum", (data) => {
//   console.log(data);
// });
// 市区人数数据
let data = [
  {
    name: "鄂州市",
    value: 84,
  },

  {
    name: "咸宁市",
    value: 96,
  },
  {
    name: "天门市",
    value: 89,
  },
  {
    name: "孝感市",
    value: 123,
  },
  {
    name: "其它",
    value: 172,
  },
];
const chartPrepare = () => {
  mychart = echarts.init(myChartDom.value);
};

const chartOpen = () => {
  chart.option = {
    legend: {
      type: "scroll",
      orient: "vertical",
      top: "center",
      left: "5%",
      textStyle: {
        color: "#fff",
        fontSize: (16 * window.innerWidth) / 1920,
      },
      itemWidth: (30 * window.innerWidth) / 1920,
      // itemHeight: (16 * window.innerHeight) / 1920,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "用户分布",
        type: "pie",
        radius: [15, 70],
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 5,
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
  height: 32%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: rgba(255, 255, 255, 0.1);

  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px 8px 8px 8px;
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
