<template>
  <div class="all">
    <h2>控制系统</h2>
    <div class="content">
      <section class="water">
        <h3>水泵组</h3>
        <div class="buttonContent">
          <div class="buttonContent-div">
            <div><span>水泵1</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>水泵2</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>水泵3</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>水泵4</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
        </div>
      </section>
      <section class="roller">
        <h3>卷帘组</h3>
        <div class="buttonContent">
          <div class="buttonContent-div">
            <div><span>卷帘1</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>卷帘2</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>卷帘3</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
          <div class="buttonContent-div">
            <div><span>卷帘4</span><span>开</span></div>
            <el-button type="primary">开</el-button>
          </div>
        </div>
      </section>
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
  height: 57%;
  background-color: rgba(245, 246, 250, 0.1);
  border-radius: 6px 6px 6px 6px;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 23px 25px 18px 25px;
    h3 {
      font-size: 27px;
      min-height: 40px;
      font-weight: 500;
      color: #ffffff;
      margin: 8px 0 7px 37px;
    }
    .water,
    .roller {
      height: 47.7%;
      box-shadow: inset 0px 0px 40px 1px rgba(32, 189, 255, 0.2);
      border-radius: 6px 6px 6px 6px;
      border: 1px solid rgba(51, 131, 255, 0.2);
      background-color: rgba(90, 96, 127, 0.2);
      display: flex;
      flex-direction: column;

      .buttonContent {
        margin: 0px 22px 6px 22px;
        display: flex;
        justify-content: space-around;
        height: 100%;

        &-div {
          width: 22.8%;
          height: 100%;
          box-shadow: inset 0px 0px 40px 1px rgba(32, 189, 255, 0.2);
          border-radius: 6px 6px 6px 6px;
          border: 1px solid rgba(51, 131, 255, 0.2);
          background-color: rgba(90, 96, 127, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 9px 15px;
          > div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            > span {
              font-size: 20px;
              font-family: "PingFang SC-Regular";
              font-weight: 500;
              color: #ffffff;
              text-shadow: 0px 0px 3px #20bdff;
            }
          }
        }
      }
    }
  }
}
</style>
