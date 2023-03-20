<template>
  <div class="all">
    <div class="all-container" v-loading="!flag">
      <div class="head">
        <div class="text">“温室管家”智慧农业云平台</div>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="envDetection">
            <envDetection
              :projectData="projectData"
              ref="envDetection1"
            ></envDetection>
          </div>
          <div class="dayData"><dayData></dayData></div>
          <div class="lightIntensity" :projectData="projectData">
            <lightIntensity></lightIntensity>
          </div>
        </div>
        <!-- <div class="content-center"><center v-if="flag"></center></div> -->

        <div class="content-right">
          <div class="weather">
            <weather></weather>
          </div>
          <div class="device"><device></device></div>
          <div class="dynamic"><dynamic></dynamic></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import envDetection from "../components/home/leftContent/envDetection.vue";
import dayData from "../components/home/leftContent/dayData.vue";
import lightIntensity from "../components/home/leftContent/lightIntensity.vue";
import weather from "../components/home/rightContent/weather.vue";
import device from "../components/home/rightContent/device.vue";
import dynamic from "../components/home/rightContent/dynamic.vue";
import center from "@/components/home/centerContent/main.vue";
import { reactive, provide } from "@vue/reactivity";
import { requestProjectData } from "@/request/requests";
import { ref, onMounted } from "vue";
const projectData = reactive({});
const flag = ref(false);
const envDetection1 = ref(null);
onMounted(() => {
  getData();
});

function getData() {
  requestProjectData("subscribeSoilEnv").then(() => {
    requestProjectData("getSoilEnv").then((res) => {
      projectData.soilEnv = res;
      requestProjectData("subscribeAirHum").then(() => {
        requestProjectData("getAirHum").then((res) => {
          projectData.airHum = res;
          requestProjectData("subscribeAirTmp").then(() => {
            requestProjectData("getAirTmp").then((res) => {
              projectData.airTmp = res;
              requestProjectData("subscribeLightValue").then(() => {
                requestProjectData("getLightValue").then((res) => {
                  projectData.lightValue = res;

                  envDetection1.value.chartOpen();
                  flag.value = true;

                  setTimeout(() => {
                    getData();
                  }, 10000);
                });
              });
            });
          });
        });
      });
    });
  });
}
</script>

<style lang="less" scoped>
.all-container {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-image: url("../assets/indexPhoto/BG1.png");
  // background-size: 100% 100%;
  // background-image: "../assets/background1.png";
  z-index: -99;
  .head {
    height: 17.5%;
    // display: flex;
    // justify-content: center;
    text-align: center;
    letter-spacing: 0.07rem;
    // padding-top: 0.425rem;
    color: white;
    font-weight: bold;
    // position: relative;
    .text {
      font-size: 0.4875rem;
      padding-top: 1.77%;
      font-family: "PingFang SC-Bold, PingFang SC";
    }
  }
  .content {
    height: 82.5%;
    display: flex;
    .content-left {
      // flex: 1.5;
      width: 25.26%;
      display: flex;
      flex-direction: column;
      padding-left: 1.82%;
      padding-bottom: 2.6%;
      //   justify-content: center;
      //   align-items: center;
      .envDetection {
        height: 21.4%;
      }
      .dayData {
        height: 35.67%;
      }
      .lightIntensity {
        flex: 1;
        padding-top: 2.89%;
      }
    }
    .content-center {
      flex: 1;
    }
    .content-right {
      // flex: 1.4;
      width: 25.26%;
      display: flex;
      flex-direction: column;
      padding-right: 1.82%;
      padding-bottom: 1.72%;
      .weather {
        height: 40.84%;
      }
      .device {
        height: 28.59%;
      }
      .dynamic {
        flex: 1;
      }
    }
  }
}
.dv-border-box-1 {
  z-index: -999;
}
</style>
