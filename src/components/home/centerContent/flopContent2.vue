<template>
  <div class="flopContent">
    <div class="userTotal">
      <div class="text">用户总数</div>
      <div class="flop">
        <dv-digital-flop :config="config1" style="height: 100%" />
      </div>
    </div>
    <div class="area">
      <div class="text">覆盖地区</div>
      <div class="flop">
        <dv-digital-flop :config="config2" style="height: 100%" />
      </div>
    </div>
    <div class="device">
      <div class="text">设备总数</div>
      <div class="flop">
        <dv-digital-flop :config="config3" style="height: 100%" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
const config1 = reactive({
  number: [100],
  content: "{nt}",
  style: {
    fontSize: 40,
    fill: "#ffffff",
  },
});
const config2 = reactive({
  number: [120],
  content: "{nt}",
  style: {
    fontSize: 40,
    fill: "#ffffff",
  },
});
const config3 = reactive({
  number: [130],
  content: "{nt}",
  style: {
    fontSize: 40,
    fill: "#ffffff",
  },
});
</script>

<style lang="less" scoped>
.flopContent {
  position: absolute;
  top: 14.54%;
  left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 5.185%;

  .userTotal {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    .text {
      color: white;
      font-size: 0.2125rem;
      width: 30%;
      white-space: nowrap;
    }
    .flop {
      flex: 1;
      height: 100%;
      // padding-right: 10%;
      // background-clip: content-box;
      // background-color: rgb(126, 90, 90);
      canvas {
        height: 100%;
      }
    }
  }
  .area {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .text {
      color: white;
      font-size: 0.2125rem;
      width: 30%;
      white-space: nowrap;
    }
    .flop {
      flex: 1;
      height: 100%;
      // background-color: rgb(126, 90, 90);
      // padding-right: 10%;
      // background-clip: content-box;
      canvas {
        height: 100%;
      }
    }
  }
  .device {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .text {
      color: white;
      font-size: 0.2125rem;
      width: 30%;
      white-space: nowrap;
    }
    .flop {
      flex: 1;
      height: 100%;
      // padding-right: 10%;
      // background-clip: content-box;
      // background-color: rgb(126, 90, 90);
      canvas {
        height: 100%;
      }
    }
  }
}
</style>
