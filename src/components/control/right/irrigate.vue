<template>
  <div class="all">
    <header>
      <h2>灌溉量</h2>
      <el-select
        v-model="select_value"
        size="small"
        class="header-select"
        @change="change"
      >
        <el-option
          v-for="item in [
            { label: '上午', value: '上午' },
            { label: '中午', value: '中午' },
            { label: '下午', value: '下午' },
          ]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      /></el-select>
    </header>
    <div class="content"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let select_value = ref("下午");
</script>
<style scoped lang="less">
.all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 55.3%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    ::v-deep .header-select {
      max-width: 180px;
      // min-width: 1.8rem;
      margin-right: 35px;

      .el-input__wrapper {
        background-color: rgb(39, 41, 46);
        border: none !important;
        box-shadow: none !important;
        width: 151px;
        height: 35px;
        .el-input__inner {
          color: white;
          border: none !important;
          box-shadow: none !important;
          font-size: 21px;
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          height: auto;
        }
      }
    }
    h2 {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      margin: 0 0 0 10px;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
