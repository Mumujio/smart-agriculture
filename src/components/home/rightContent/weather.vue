<template>
  <div class="all">
    <h2>天气预报</h2>
    <div class="content">
      <div class="header">
        <div class="header-img">
          <img src="../../../assets/textWeather.png" alt="" />
        </div>
        <div class="header-text">
          <div>湿度：{{ option.humidity }}%</div>
          <div>气温：{{ option.temperature }}</div>
          <div>天气：{{ option.weather }}</div>
          <div>风力级别：{{ option.windpower }}</div>
        </div>
      </div>
      <div class="center">
        <div
          v-for="item in option.weatherFutureInfo"
          :key="item.week"
          class="center-item"
        >
          <div class="center-time">{{ item.date }}</div>
          <div class="center-img">
            <img src="../../../assets/weather1.png" alt="" />
          </div>
        </div>
      </div>
      <div class="footer" ref="mychartDom"></div>
    </div>
  </div>
  <!-- <div class="time">
    {{ option.reporttime + "  " + option.hours + ":" + option.minutes }}
  </div> -->
</template>

<script setup>
import {
  requestCurrentWeatherInfo,
  requestFutureWeatherInfo,
} from "../../../request/requests";
import { reactive, onMounted, computed, ref, inject } from "vue";
// 时间实例

// 天气接口数据
const option = reactive({
  weatherCurrentInfo: null,
  weatherFutureInfo: null,
  // 湿度
  humidity: "",
  // 气温
  temperature: "",
  // 风力级别
  windpower: "",
  // 天气
  weather: "",
  // 年月日
  reporttime: "",
  // 时
  hours: "",
  // 分钟
  minutes: "",
});
// 请求天气数据
async function getWeatherInfo() {
  option.weatherCurrentInfo = await requestCurrentWeatherInfo();
  option.weatherFutureInfo = await requestFutureWeatherInfo();
  // 设置实时天气数据
  option.humidity = option.weatherCurrentInfo.humidity;
  option.temperature = option.weatherCurrentInfo.temperature;
  option.windpower = option.weatherCurrentInfo.windpower;
  option.weather = option.weatherCurrentInfo.weather;
  option.reporttime = option.weatherCurrentInfo.reporttime.slice(0, 10);
  // 设置白天夜晚温度
  for (let item of option.weatherFutureInfo) {
    chart.daytemp.push(item.daytemp);
    chart.nighttemp.push(Number(item.nighttemp));
  }
}

// 请求时间
function getNowTime() {
  let now = new Date();
  setTimeout(() => {
    if (now.getHours() < 10) {
      option.hours = "0" + now.getHours();
    } else {
      option.hours = now.getHours();
    }
    if (now.getMinutes() < 10) {
      option.minutes = "0" + now.getMinutes();
    } else {
      option.minutes = now.getMinutes();
    }
    requestAnimationFrame(getNowTime);
  }, 1000);
}

// echart
let echarts = inject("echarts");
const mychartDom = ref(null);
let mychart = null;
const chart = reactive({
  option: {},
  daytemp: [],
  nighttemp: [],
});
const chartPrepare = () => {
  mychart = echarts.init(mychartDom.value);
};
const chartOpen = () => {
  chart.option = {
    xAxis: {
      type: "category",
      data: ["第一天", "第二天", "第三天", "第四天"],

      show: false,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      max: 30,
      min: 10,
      show: false,
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "白天温度",
        data: [
          chart.daytemp[0],
          chart.daytemp[1],
          chart.daytemp[2],
          chart.daytemp[3],
        ],
        type: "line",
        // 平滑过渡
        smooth: true,
        // 折线样式
        lineStyle: {
          color: "#ffffff",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 15,
          fontWeight: 400,
          color: "#ffffff",
        },
        itemStyle: {
          color: "#ffffff",
        },
      },
      {
        name: "晚上温度",
        data: [
          chart.nighttemp[0],
          chart.nighttemp[1],
          chart.nighttemp[2],
          chart.nighttemp[3],
        ],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#ffffff",
        },
        label: {
          show: true,
          position: "bottom",
          fontSize: 15,
          fontWeight: 400,
          color: "#ffffff",
        },
        itemStyle: {
          color: "#ffffff",
        },
      },
    ],
    grid: {
      // height: "80%",
      width: "115%",
      // top: "-20%",
      left: "center",
    },
  };
  mychart.setOption(chart.option);
};

// 传递父级
const emits = defineEmits(["weatherComponentReady"]);
onMounted(() => {
  getNowTime();
  getWeatherInfo();
  chartPrepare();
  setTimeout(() => {
    chartOpen();
    console.log(option.weatherCurrentInfo);
  }, 1000);
  window.addEventListener("resize", () => {
    mychart.resize();
  });
});
</script>

<style lang="less" scoped>
.all {
  width: 570px;
  height: 544px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;

  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    margin: 8px 0 31px 10px;

    font-family: "PingFang SC-Bold, PingFang SC";
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .header {
      display: flex;
      // height: 38.68%;
      width: 100%;
      height: 141px;
      justify-content: center;
      .header-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 39px;
        div {
          font-size: 22px;
          font-weight: 400;
          color: #ffffff;
        }
      }
      .header-img {
        height: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .center {
      display: flex;
      align-items: center;
      margin: 55px 39px 8px 39px;
      height: 110px;
      width: 100%;
      .center-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .center-time {
          // height: 36.39%;
          text-align: center;
          font-size: 19px;
          font-weight: 400;
          color: #ffffff;
        }
        .center-img {
          flex: 1;
          margin-top: 4px;
          img {
            width: 57px;
            height: 57px;
          }
        }
      }
    }
    .footer {
      flex: 1;
      width: 100%;
      margin: 0 39px;
    }
  }
}
</style>
