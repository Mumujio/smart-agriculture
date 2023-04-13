<template>
  <div class="all">
    <h2>病害排行</h2>
    <div class="content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="rank" label="排名" align="center" />
        <el-table-column prop="type" label="病害类型" align="center" />
        <el-table-column prop="num" label="数量" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    rank: 1,
    type: "白粉病",
    num: 128,
  },
  {
    rank: 2,
    type: "黑斑病",
    num: 106,
  },
  {
    rank: 3,
    type: "红蜘蛛",
    num: 88,
  },
  {
    rank: 4,
    type: "叶斑病",
    num: 65,
  },
  {
    rank: 5,
    type: "白粉病",
    num: 44,
  },
  {
    rank: 6,
    type: "白粉病",
    num: 22,
  },
  {
    rank: 7,
    type: "白粉病",
    num: 22,
  },
  {
    rank: 8,
    type: "白粉病",
    num: 22,
  },
  {
    rank: 9,
    type: "白粉病",
    num: 22,
  },
];
</script>
<style scoped lang="less">
.all {
  height: 55.6%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px 8px 8px 8px;

  h2 {
    font-size: 30px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 0px 6px #20bdff;
    padding-top: 2.44%;
    padding-left: 4%;
  }
  .content {
    flex: 1;
    // position: relative;
    // width: 100%;
    // > div {
    //   position: absolute;
    //   width: 100%;
    // }
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
    // /deep/.el-table tr:nth-child(2n) {
    //   background-color: rgba(255, 255, 255, 0.14);
    // }
    /deep/.el-table tr {
      //   background-color: transparent;
      background-color: rgba(255, 255, 255, 0.14);

      .cell {
        color: #ffffff;
        line-height: 20px;
        font-size: 15px;
      }
    }

    :deep(.el-scrollbar__view) {
      width: 100%;
    }
    :deep(.el-table__body) {
      width: auto !important;
      -webkit-border-vertical-spacing: 15px;
    }
    :deep(.el-table__header) {
      width: auto !important;
      tr {
        background-color: transparent;
      }
      .cell {
        font-size: 20px;
        color: #f5f6fa;
        line-height: 20px;
      }
    }
  }
}
</style>
