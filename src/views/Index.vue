<template>
  <div class="all">
    <div class="all-container">
      <topBar></topBar>
      <div class="content">
        <div class="content-left">
          <userActive></userActive>

          <userTop></userTop>
        </div>
        <div class="content-center">
          <div style="height: 100%">
            <userMap></userMap>
          </div>
        </div>
        <div class="content-right">
          <userLocation></userLocation>
          <platData></platData>
          <identify></identify>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import topBar from "@/components/topBar.vue";
import userMap from "@/components/index/center/map.vue";
import userTop from "@/components/index/left/userTop.vue";
import userActive from "@/components/index/left/userActive.vue";
import userLocation from "@/components/index/right/userLocation.vue";
import platData from "@/components/index/right/platData.vue";
import identify from "@/components/index/right/identify.vue";
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
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    &-center {
      flex: 1;
    }
    &-right {
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
}
</style>
