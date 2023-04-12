<template>
  <div class="all">
    <h2>设备监测</h2>
    <div class="content">
      <el-menu default-active="1-1">
        <el-sub-menu index="1">
          <template #title>
            <span class="tempName">番茄一号大棚(4/5)</span></template
          >
          <el-menu-item-group>
            <el-menu-item index="1-1"
              ><span class="_icon" style="color: white">在线</span
              ><span class="itemName">节点1</span></el-menu-item
            >
            <el-menu-item index="1-2"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点2</span></el-menu-item
            >
            <el-menu-item index="1-3"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点3</span></el-menu-item
            >
            <el-menu-item index="1-4"
              ><span class="_icon" style="background: #6c6c6f; color: #e6e9f4"
                >离线</span
              ><span class="itemName">节点4</span></el-menu-item
            >
            <el-menu-item index="1-5"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点5</span></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span class="tempName">番茄二号大棚(4/5)</span></template
          >
          <el-menu-item-group>
            <el-menu-item index="2-1"
              ><span class="_icon" style="color: white">在线</span
              ><span class="itemName">节点1</span></el-menu-item
            >
            <el-menu-item index="2-2"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点2</span></el-menu-item
            >
            <el-menu-item index="2-3"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点3</span></el-menu-item
            >
            <el-menu-item index="2-4"
              ><span class="_icon" style="background: #6c6c6f; color: #e6e9f4"
                >离线</span
              ><span class="itemName">节点4</span></el-menu-item
            >
            <el-menu-item index="2-5"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点5</span></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <span class="tempName">辣椒一号大棚(4/5)</span></template
          >
          <el-menu-item-group>
            <el-menu-item index="3-1"
              ><span class="_icon" style="color: white">在线</span
              ><span class="itemName">节点1</span></el-menu-item
            >
            <el-menu-item index="3-2"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点2</span></el-menu-item
            >
            <el-menu-item index="3-3"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点3</span></el-menu-item
            >
            <el-menu-item index="3-4"
              ><span class="_icon" style="background: #6c6c6f; color: #e6e9f4"
                >离线</span
              ><span class="itemName">节点4</span></el-menu-item
            >
            <el-menu-item index="3-5"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点5</span></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <span class="tempName">茄子一号大棚(4/5)</span></template
          >
          <el-menu-item-group>
            <el-menu-item index="4-1"
              ><span class="_icon" style="color: white">在线</span
              ><span class="itemName">节点1</span></el-menu-item
            >
            <el-menu-item index="4-2"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点2</span></el-menu-item
            >
            <el-menu-item index="4-3"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点3</span></el-menu-item
            >
            <el-menu-item index="4-4"
              ><span class="_icon" style="background: #6c6c6f; color: #e6e9f4"
                >离线</span
              ><span class="itemName">节点4</span></el-menu-item
            >
            <el-menu-item index="4-5"
              ><span class="_icon" style="background-color: #21d59b">在线</span
              ><span class="itemName">节点5</span></el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="less">
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
    margin: 6px 0 14px 15px;
    padding: 0;
  }
  .content {
    flex: 1;
    .el-menu {
      height: 100%;
      background-color: transparent;
      border: none;
      :deep(.el-menu--inline) {
        background-color: transparent;
      }
      :deep(.el-menu-item:hover) {
        background: linear-gradient(
          90deg,
          #20bdff 0%,
          rgba(63, 66, 82, 0.3) 100%
        );
        border-radius: 0px 0px 0px 0px;
      }
      :deep(.el-menu-item + .is-active) {
        background: linear-gradient(
          90deg,
          #20bdff 0%,
          rgba(63, 66, 82, 0.3) 100%
        );
        border-radius: 0px 0px 0px 0px;
      }
      :deep(.el-sub-menu__title:hover) {
        background-color: transparent;
      }

      :deep(.el-sub-menu__icon-arrow) {
        left: 0;
        right: auto;
        svg {
          color: white;
          //   background-color: #fff;
        }
      }
    }
    .tempName {
      font-size: 19px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
    ._icon {
      display: inline-block;
      width: 34px;
      height: 18px;
      background: #21d59b;
      border-radius: 0px 9px 9px 0px;
      font-size: 10px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 18px;
      text-align: center;
      margin-right: 18px;
      color: #ffffff;
    }
    .itemName {
      font-size: 19px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
