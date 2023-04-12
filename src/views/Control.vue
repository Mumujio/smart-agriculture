<template>
  <div class="all">
    <div class="all-container">
      <topBar></topBar>
      <div class="content">
        <div class="content-left">
          <devSet></devSet>
        </div>
        <div class="content-center">
          <system></system>
          <curData></curData>
        </div>
        <div class="content-right">
          <fertilizer></fertilizer>
          <irrigate></irrigate>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import devSet from "@/components/control/left/devSet.vue";
import topBar from "@/components/topBar.vue";
import fertilizer from "@/components/control/right/fertilizer.vue";
import irrigate from "@/components/control/right/irrigate.vue";
import system from "@/components/control/center/system.vue";
import curData from "@/components/control/center/curData.vue";
</script>
<style scoped lang="less">
.all-container {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: url("../assets/indexPhoto/BG1.png");
  background-size: 100% 100%;
  background-image: url("@/assets/background2.png");
  z-index: -99;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    margin: 0 61px 61px 61px;
    justify-content: space-between;

    &-left {
      width: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    &-center {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin: 0 30px;
    }
    &-right {
      width: 570px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
}
</style>
