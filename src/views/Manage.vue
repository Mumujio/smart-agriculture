<template>
  <div class="all">
    <div class="all-container">
      <topBar></topBar>
      <div class="content">
        <div class="content-left">
          <identify></identify>
          <disease></disease>
        </div>
        <div class="content-center">
          <production></production>
          <price></price>
        </div>
        <div class="content-right">
          <plant></plant>
          <areas></areas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import topBar from "@/components/topBar.vue";
import identify from "@/components/manage/left/identify.vue";
import disease from "@/components/manage/left/disease.vue";
import production from "@/components/manage/center/production.vue";
import price from "@/components/manage/center/price.vue";
import plant from "@/components/manage/right/plant.vue";
import areas from "@/components/manage/right/areas.vue";
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
      width: 570px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    &-center {
      //   flex: 1;
      width: 618px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
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
