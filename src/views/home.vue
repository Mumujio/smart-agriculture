<template>
  <div class="all">
    <div class="all-container">
      <topBar></topBar>
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

            <div class="content-left-top-right">
              <equipMon></equipMon>
            </div>
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
import lightIntensity from "../components/home/leftContent/lightIntensity.vue";
import weather from "../components/home/rightContent/weather.vue";
import plantDis from "@/components/home/rightContent/plantingDistribution.vue";
import devStatis from "@/components/home/leftContent/deviceStatistics.vue";
import equipMon from "@/components/home/leftContent/equipmentMonitor.vue";
import { reactive, provide } from "@vue/reactivity";
import { requestProjectData } from "@/request/requests";
import { ref, onMounted } from "vue";
import topBar from "@/components/topBar.vue";
const projectData = reactive({});
const flag = ref(false);
const envDetection1 = ref(null);

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
        height: 54%;
        display: flex;
        justify-content: space-between;
        &-left {
          width: 570px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .envDetection {
            width: 100%;

            height: 50%;
          }
          .dayData {
            width: 100%;

            height: 45%;
          }
        }
        &-right {
          width: 616px;
          .equipMon {
            height: 20%;
          }
          .formData {
            height: 80%;
          }
        }
      }
      .lightIntensity {
        height: 43%;
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
      .plantDis {
        height: 35%;
      }
      .weather {
        height: 62%;
      }
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
</style>
