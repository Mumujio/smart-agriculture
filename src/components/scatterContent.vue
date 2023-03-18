<template>

  <div id="scatter"></div>
  

  
  
</template>

<script>
import { inject, onMounted, onUpdated, reactive,watch,toRef,toRefs,onUnmounted} from "vue";
export default {
  name: "barContent",
  props:['option'],
  setup(props) {
    let axios = inject("axios");
    let echarts = inject("echarts");
    const dataBar = reactive({
      chartData:props.option,
      option:{}
    })
    const rawBar ={}
    const chartPrepare =()=>{
      rawBar.myChart = echarts.init(document.getElementById('scatter'))
    }
    const chartOpen =()=>{
        dataBar.option = {
        xAxis: {
            data: ["安徽", "澳门", "北京", "重庆", "福建", "广东", "甘肃"],
          },
          yAxis: {},
          series: [
            {
              type: "scatter",
              data: [dataBar.chartData[0].confirmedCount, dataBar.chartData[1].confirmedCount, dataBar.chartData[2].confirmedCount, dataBar.chartData[3].confirmedCount, dataBar.chartData[4].confirmedCount, dataBar.chartData[5].confirmedCount, dataBar.chartData[6].confirmedCount],
            },
          ],
      }
      rawBar.myChart.setOption(dataBar.option, true);
      window.addEventListener('resize',()=>{
            rawBar.myChart.resize();
        })
    }
    /* async function getData() {
        let rawOption = await axios({
          method: "get",
          url: "http://111.231.75.86:8000/api/provinces/CHN/",
        })
        console.log(rawOption.data)
    } */
    onMounted(() => {
      chartPrepare()
      chartOpen()
    });
    watch(dataBar.chartData,(newValue)=>{
      chartOpen()
    },{deep:true})
    /* watch(props.option,(newValue)=>{
      console.log('子组件，传来的值改变啦！！')
    },{deep:true}) */
    onUnmounted(() => {
				//销毁
				echarts.dispose(rawBar.myChart);
				rawBar.myChart = null;
			})

    onUpdated(()=>{
        /* console.log('有数据被更新啦！！！') */
    })
    return {
      ...toRefs(dataBar),rawBar
    };
  },
};
</script>

<style lang="less" scoped>

#scatter {
  width: 100%;
  height: 100%;
}

</style>
