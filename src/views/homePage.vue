<template>
  <div>
    <div id="all">
      <el-row class="row1" :gutter="20">
        <el-col :span="6">
          <div class="envDetect">
            <div class="top">
              <h2>环境检测</h2>
              <div class="select">
                <el-select v-model="value" placeholder="请选择" size="small">
                  <el-option
                    v-for="item in envOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="envTime">2022.10.05</div>
            </div>
            <div class="main"><envDetect></envDetect></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mainText">
            <h2>"温室管家"智慧农业云平台</h2>
            <img src="@/assets/mainTextPhoto.png" alt="" />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="top">全国疫情可视化展示</div>
        </el-col>
      </el-row>
      <el-row class="row2" :gutter="20">
        <el-col :span="6">
          <barContent :option="option" v-if="option.length > 0"></barContent>
        </el-col>
        <el-col :span="12">
          <mapContent></mapContent>
        </el-col>
        <el-col :span="6">
          <div class="control">
            <pieContent :option="option" v-if="option.length > 0"></pieContent>
          </div>
        </el-col>
      </el-row>
      <el-row class="row3" :gutter="20">
        <el-col :span="12">
          <scatterContent
            :option="option"
            v-if="option.length > 0"
          ></scatterContent>
        </el-col>
        <el-col :span="12">
          <lineContent :option="option" v-if="option.length > 0"></lineContent>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive, onBeforeMount } from "vue";
import mapContent from "@/components/mapContent.vue";
import barContent from "@/components/barContent.vue";
import pieContent from "@/components/pieContent.vue";
import scatterContent from "@/components/scatterContent";
import lineContent from "@/components/lineContent";
import envDetect from "@/components/envDetect.vue";
export default {
  name: "homePage",
  setup() {
    let axios = inject("axios");
    let echarts = inject("echarts");
    let option = reactive([]);
    let envOption = reactive([
      {
        value: "节点1",
        label: "节点1",
      },
      {
        value: "节点2",
        label: "节点2",
      },
      {
        value: "节点3",
        label: "节点3",
      },
      {
        value: "节点4",
        label: "节点4",
      },
      {
        value: "节点5",
        label: "节点5",
      },
    ]);

    async function getData() {
      let rawOption = await axios({
        method: "get",
        url: "http://111.231.75.86:8000/api/provinces/CHN/",
      });
      option.push(...rawOption.data);
    }
    function change() {
      option[0].confirmedCount += 500;
    }
    function display() {
      alert(option);
    }

    onMounted(() => {
      getData();
      //轮询请求数据，每3s请求一次
      /*  setInterval(() => {
        setTimeout(()=>{
          getData();
        },0)
      }, 3000); */
    });
    return {
      option,
      change,
      display,
      envOption,
    };
  },
  components: {
    mapContent,
    barContent,
    pieContent,
    scatterContent,
    lineContent,
    envDetect,
  },
};
</script>

<style lang="less" scoped>
#all {
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-image: url(@/assets/indexPhoto/背景图.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  background-color: rgb(12, 12, 15);
  color: white;
  .row1 {
    height: 20%;
    .envDetect {
      height: 100%;
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          font-size: 2vw;
          flex: 2;
          font-weight: 400;
          white-space: nowrap;
        }
        .select {
          flex: 1;
          padding-right: 2vw;
        }
        .envTime {
          flex: 1;
          min-width: 62px;
        }
      }
      .main {
        height: 100%;
      }
    }
    .mainText {
      display: flex;
      h2 {
        white-space: nowrap;
      }
      img {
        width: 100%;
      }
    }
  }
  .row2 {
    height: 30%;
  }
  .row3 {
    height: 45%;
  }
  .el-row {
    margin: 1vh 0;
    padding: 1vh 2vw;
    .el-col {
      background-color: rgba(44, 45, 45, 0.5);
    }
  }
}

// .top {
//   height: 100%;
//   text-align: center;
//   font-weight: 800;
//   color: rgb(0, 0, 0);
//   font-size: 0.6rem;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// }
// /* #map {
//   width: 100%;
//   height: 100%;
// } */
// .control {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// }
</style>
