<template>
  <div class="all">
    <div class="all-container">
      <div class="head">
        <div class="text">水肥一体化精准控制云平台</div>
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
      <div class="content">
        <div class="content-left">
          <div class="content-left-top">
            <div class="content-left-top-left">
              <div class="envDetection">
                <envDetection
                  :projectData="projectData"
                  ref="envDetection1"
                ></envDetection>
              </div>
              <div class="dayData"><devStatis></devStatis></div>
            </div>
            <div class="content-left-top-right"><equipMon></equipMon></div>
          </div>

          <div class="lightIntensity" :projectData="projectData">
            <lightIntensity></lightIntensity>
          </div>
        </div>
        <div class="content-right">
          <div class="plantDis"><plantDis></plantDis></div>

          <div class="weather">
            <weather></weather>
          </div>
          <!-- <div class="device"><device></device></div>
          <div class="dynamic"><dynamic></dynamic></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import envDetection from "../components/home/leftContent/envDetection.vue";
// import dayData from "../components/home/leftContent/dayData.vue";
import lightIntensity from "../components/home/leftContent/lightIntensity.vue";
import weather from "../components/home/rightContent/weather.vue";
// import device from "../components/home/rightContent/device.vue";
// import dynamic from "../components/home/rightContent/dynamic.vue";
// import center from "@/components/home/centerContent/main.vue";
import plantDis from "@/components/home/rightContent/plantingDistribution.vue";
import devStatis from "@/components/home/leftContent/deviceStatistics.vue";
import equipMon from "@/components/home/leftContent/equipmentMonitor.vue";
import { reactive, provide } from "@vue/reactivity";
import { requestProjectData } from "@/request/requests";
import { ref, onMounted } from "vue";
import { User } from "@element-plus/icons-vue";
const projectData = reactive({});
const flag = ref(false);
const envDetection1 = ref(null);
const select_value = ref("宜昌富农大棚1号");
// onMounted(() => {
//   getData();
// });

// function getData() {
//   requestProjectData("subscribeSoilEnv").then(() => {
//     requestProjectData("getSoilEnv").then((res) => {
//       projectData.soilEnv = res;
//       requestProjectData("subscribeAirHum").then(() => {
//         requestProjectData("getAirHum").then((res) => {
//           projectData.airHum = res;
//           requestProjectData("subscribeAirTmp").then(() => {
//             requestProjectData("getAirTmp").then((res) => {
//               projectData.airTmp = res;
//               requestProjectData("subscribeLightValue").then(() => {
//                 requestProjectData("getLightValue").then((res) => {
//                   projectData.lightValue = res;

//                   envDetection1.value.chartOpen();
//                   flag.value = true;

//                   setTimeout(() => {
//                     getData();
//                   }, 10000);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// }
</script>

<style lang="less" scoped>
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

  .head {
    text-align: center;

    height: 144px;
    .text {
      margin: 30px 0 60px 0;
      font-size: 39px;
      letter-spacing: 20px;
      font-weight: bold;
      color: #ffffff;
      font-family: "PingFang SC-Bold";
    }
    &-right {
      position: absolute;
      top: 37px;
      right: 24px;
      display: flex;
      .select {
        margin-right: 30px;
        ::v-deep .selectA {
          max-width: 300px;
          .el-input__wrapper {
            background-color: transparent;
            border: none !important;
            box-shadow: none !important;
            padding: 0;

            .el-input__inner {
              color: #ffffff;
              font-size: 29px;
              font-weight: 400;
              border: none !important;
              box-shadow: none !important;
              text-align: right;
            }
          }
        }
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    margin: 0 61px 61px 61px;
    justify-content: space-between;
    .content-left {
      // flex: 1.5;
      width: 1210px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      &-top {
        height: 473px;
        display: flex;
        justify-content: space-between;
        &-left {
          width: 570px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .envDetection {
            width: 100%;

            height: 240px;
          }
          .dayData {
            width: 100%;

            height: 213px;
          }
        }
        &-right {
          width: 616px;
        }
      }
    }
    .content-center {
      flex: 1;
    }
    .content-right {
      // flex: 1.4;
      width: 570px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      // .weather {
      //   height: 40.84%;
      // }
      // .device {
      //   height: 28.59%;
      // }
      // .dynamic {
      //   flex: 1;
      // }
    }
  }
}
.dv-border-box-1 {
  z-index: -999;
}
</style>
