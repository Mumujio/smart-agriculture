<template>
  <div class="all">
    <h2>基地动态</h2>
    <div class="content">
      <div class="content1">
        <div class="imgContent">
          <img src="../../../assets/Icon1.png" alt="" />
        </div>
        <div class="textContent">黄冈5号大棚已将带病植株移出大棚</div>
      </div>
      <div class="content2">
        <div class="imgContent">
          <img src="../../../assets/Icon2.png" alt="" />
        </div>

        <div class="textContent">恩施3号大棚检测出20例细菌斑番茄植株。</div>
      </div>
      <div class="content3">
        <div class="imgContent">
          <img src="../../../assets/Icon3.png" alt="" />
        </div>
        <div class="textContent">武汉1号大棚已完成所有节点的图像采集。</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3.79%;
  h2 {
    color: white;
    font-weight: bold;
    font-size: 0.275rem;
    padding-top: 2.44%;
    padding-left: 4%;
    // height: 16.7%;
  }
  .content {
    flex: 1;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.2125rem;
    padding-top: 5.1%;
    padding-left: 7.56%;
    padding-right: 2.67%;
    padding-bottom: 5.1%;
    .content1 {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      .imgContent {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          height: 68.17%;
        }
      }
      .textContent {
        width: 91.09%;
        padding-left: 4.46%;
        font-weight: 400;
      }
    }
    .content2 {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;

      .imgContent {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          height: 68.17%;
        }
      }
      .textContent {
        width: 91.09%;
        padding-left: 4.46%;
        font-weight: 400;
      }
    }
    .content3 {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      .imgContent {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          height: 68.17%;
        }
      }
      .textContent {
        width: 91.09%;
        padding-left: 4.46%;
        font-weight: 400;
      }
    }
  }
}
</style>
