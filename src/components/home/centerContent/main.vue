<template>
  <flop></flop>
  <div class="center">
    <earth></earth>
  </div>
</template>

<script setup>
import earth from "./earth.vue";
import flop from "./flopContent2.vue";
</script>

<style lang="less" scoped>
.center {
  color: white;
  height: 100%;
  width: 100%;

  flex-direction: column;
}
</style>
