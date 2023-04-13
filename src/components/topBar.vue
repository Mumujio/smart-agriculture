<template>
  <div class="head">
    <div class="text">水肥一体化精准控制云平台</div>

    <div class="tabsContent">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="设备检测" name="second"></el-tab-pane>
        <el-tab-pane label="设备控制" name="third"></el-tab-pane>
        <el-tab-pane label="生产管理" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="head-right">
      <div class="select">
        <el-select v-model="select_value" class="selectA" size="large">
          <el-option
            v-for="item in [
              { label: '宜昌富农大棚1号', value: '宜昌富农大棚1号' },
              { label: '宜昌富农大棚2号', value: '宜昌富农大棚2号' },
              { label: '宜昌富农大棚3号', value: '宜昌富农大棚3号' },
            ]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="icon">
        <el-icon style="font-size: 40px; color: white; height: 100%"
          ><User
        /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { User } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
const select_value = ref("宜昌富农大棚1号");
const activeName = ref("first");
const router = useRouter();
const route = useRoute();
const handleClick = (TabsPaneContext) => {
  let TabPaneName = TabsPaneContext.props.name;
  if (TabPaneName == "first") {
    router.push("/index");
  } else if (TabPaneName == "second") {
    let email = localStorage.getItem("login");
    router.push(`/home/${email}`);
  } else if (TabPaneName == "third") {
    router.push("/control");
  } else if (TabPaneName == "fourth") {
    router.push("/manage");
  }
};
onMounted(() => {
  if (route.name == "home") {
    activeName.value = "second";
  } else if (route.name == "index") {
    activeName.value = "first";
  } else if (route.name == "control") {
    activeName.value = "third";
  } else if (route.name == "manage") {
    activeName.value = "fourth";
  }
});
</script>
<style scoped lang="less">
.head {
  height: 8.2%;
  display: flex;
  box-shadow: inset 0px 0px 41px 1px rgba(26, 94, 199, 0.79);
  opacity: 1;
  border: 2px solid #4e93ff;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-around;

  .text {
    font-size: 40px;
    line-height: 45px;
    text-align: start;
    text-shadow: 0px 5px 8px #3383ff;
    color: #f5f6fa;
    font-family: "PingFang SC-Bold";
  }
  .tabsContent {
    align-self: self-end;
    /deep/ .el-tabs {
      --el-tabs-header-height: 100%;
    }
    /deep/.el-tabs__header {
      margin: 0;
    }
    /deep/ .el-tabs__item {
      font-size: 20px;
      font-weight: 400;
      color: rgba(161, 167, 196, 1);
      line-height: 45px;
      font-family: "PingFang SC-Regular";
    }
    /deep/ .el-tabs__item:hover {
      font-weight: 400;
      color: #f5f6fa;
      line-height: 45px;

      text-shadow: 0px 0px 7px #20bdff;
    }
    /deep/ .el-tabs__item + .is-active {
      color: #f5f6fa;
      line-height: 45px;
      font-weight: 400;
      text-shadow: 0px 0px 7px #20bdff;
    }
    // /deep/ .el-table__row > td {
    //   border: none;
    // }

    // /deep/ .el-table::before {
    //   height: 0px;
    // }

    :deep(.el-table__header .cell) {
      font-size: 20px;
    }
  }
  &-right {
    // position: absolute;
    // top: 37px;
    // right: 24px;
    display: flex;

    .select {
      margin-right: 30px;
      ::v-deep .selectA {
        max-width: 300px;
        height: 100%;
        > div {
          height: 100%;
        }
        .el-input__wrapper {
          background-color: transparent;
          border: none !important;
          box-shadow: none !important;
          padding: 0;

          .el-input__inner {
            height: auto;
            color: #ffffff;
            font-size: 29px;
            font-weight: 400;
            border: none !important;
            box-shadow: none !important;
            text-align: right;
            font-family: "PingFang SC-Bold";
          }
        }
      }
    }
  }
}
.el-input__inner {
  height: auto;
}
</style>
