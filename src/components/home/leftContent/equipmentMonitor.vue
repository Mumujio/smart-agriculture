<template>
  <div class="all">
    <h2>设备监测</h2>
    <div class="content">
      <div class="content-top" ref="myTopChartDom"></div>
      <div class="content-bottom">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column
            prop="name"
            label="节点名称"
            width="100"
            align="center"
          />
          <el-table-column
            prop="status"
            label="节点状态"
            width="100"
            align="center"
          />
          <el-table-column
            prop="time"
            label="最近一次检测时间"
            align="center"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, ref, getCurrentInstance } from "vue";
let echarts = inject("echarts");

let myTopChartDom = ref(null);
let mycharTop = null;
const tableData = [
  {
    name: "节点1",
    status: "异常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点2",
    status: "异常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点3",
    status: "正常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点4",
    status: "正常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点5",
    status: "异常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点6",
    status: "正常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点7",
    status: "正常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点8",
    status: "正常",
    time: "2022/10/12/12:30",
  },

  {
    name: "节点9",
    status: "正常",
    time: "2022/10/12/12:30",
  },
  {
    name: "节点10",
    status: "正常",
    time: "2022/10/12/12:30",
  },
];
const chartTop = reactive({
  option: {
    yAxis: {
      type: "category",
      data: ["正常节点", "异常节点"],
      nameTextStyle: {
        backgroundColor: "red",
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        fontSize: (14 * window.innerWidth) / 1920,
        fontWeight: 400,
        color: "#ffffff",
        hideOverlap: true,
      },
    },
    xAxis: {
      type: "value",
      nameTextStyle: {
        color: "#FFFFFF",
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },

      max: 600,
      min: 0,
    },
    series: [
      {
        data: [586, 87],
        type: "bar",
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
          fontSize: (18 * window.innerWidth) / 1920,
          fontWeight: 400,
          fontFamily: "PingFang SC-Regular",
          textShadowColor: "#000000",
          color: "#ffffff",
        },
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
        },
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
          borderRadius: [0, 10, 10, 0],
        },
      },
    ],
    grid: {
      containLabel: true,
      left: "3%",
      height: 100,
      top: "middle",
    },
  },
});
const chartBottom = reactive({
  option: {},
});

const chartPrepare = () => {
  mycharTop = echarts.init(myTopChartDom.value);
};

const chartOpen = () => {
  mycharTop.setOption(chartTop.option);
  // mycharBot.setOption(chartBottom.option);
};

onMounted(() => {
  chartPrepare();
  chartOpen();
  window.addEventListener("resize", () => {
    mycharTop.resize();
    // mycharBot.resize();
    chartOpen();
  });
});
</script>

<style lang="less" scoped>
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    margin: 8px 0 13px 10px;

    font-family: "PingFang SC-Bold, PingFang SC";
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 42px 0 54px;
    justify-content: space-between;
    &-top {
      // height: 134px;
      height: 30%;
    }
    &-bottom {
      flex: 1;
      overflow: hidden;
      .el-table {
        background-color: transparent;
        color: #ffffff;
        height: 100%;
        overflow: hidden;
        border: none;
      }

      /deep/.el-table th {
        background-color: transparent;
        border: none;
      }
      /deep/.el-table tr td {
        background-color: transparent;
        border: none;
      }
      /deep/.el-table tr:nth-child(2n) {
        background-color: rgba(255, 255, 255, 0.14);
      }
      /deep/.el-table tr {
        background-color: transparent;
      }
    }
  }
}
</style>
<style lang="less">
.content-bottom {
  // .el-table {
  //   background-color: transparent;
  // }
  // .el-table__expanded-cell {
  //   background-color: transparent;
  // }
}
</style>
