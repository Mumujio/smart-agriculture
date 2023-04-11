<template>
  <div class="all">
    <h2>用户排行</h2>
    <div class="content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="rank" label="排名" align="center" />
        <el-table-column prop="userName" label="用户名" align="center" />
        <el-table-column prop="DP" label="大棚数" align="center" />
        <el-table-column prop="SB" label="设备数" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    rank: 1,
    userName: "123****8324",
    DP: 20,
    SB: 128,
  },
  {
    rank: 2,
    userName: "253****1124",
    DP: 18,
    SB: 106,
  },
  {
    rank: 3,
    userName: "253****1124",
    DP: 15,
    SB: 88,
  },
  {
    rank: 4,
    userName: "253****1124",
    DP: 13,
    SB: 65,
  },
  {
    rank: 5,
    userName: "253****1124",
    DP: 13,
    SB: 65,
  },
  {
    rank: 6,
    userName: "123****8324",
    DP: 13,
    SB: 65,
  },
  {
    rank: 7,
    userName: "123****8324",
    DP: 13,
    SB: 65,
  },
  {
    rank: 8,
    userName: "253****1124",
    DP: 15,
    SB: 88,
  },
  {
    rank: 9,
    userName: "253****1124",
    DP: 15,
    SB: 88,
  },
  {
    rank: 10,
    userName: "253****1124",
    DP: 15,
    SB: 88,
  },
];
</script>
<style scoped lang="less">
.all {
  height: 48.8%;
  display: flex;
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
</style>
