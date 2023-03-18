<template>
  <div id="map"></div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  name: "mapContent",
  setup() {
    let axios = inject("axios");
    let echarts = inject("echarts");
    let mapData = reactive({});
    async function getData() {
      mapData = await axios({
        method: "get",
        url: "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
      });
    }
    
    onMounted(() => {
      getData().then(() => {
        echarts.registerMap("China", mapData.data);
        let myChart = echarts.init(document.getElementById("map"));
        myChart.setOption({
          geo: {
            map: "China",
            layoutCenter: ["50%", "68%"],
            layoutSize: "130%",
          },
        });
        window.addEventListener('resize',()=>{
            myChart.resize();
        })
      });
    });

    return {
      mapData,
    };
  },
};
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
