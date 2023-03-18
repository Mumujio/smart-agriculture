<template>
  <div id="all">
    <dv-border-box-1>
      <el-row class="row1">
        <el-col :span="24">
          <div class="top"><h2>全国疫情可视化展示</h2></div>
        </el-col>
      </el-row>
      <dv-decoration-10 style="width: 100%; height: 5px" />
      <el-row class="row2">
        <el-col :span="6">
          <dv-capsule-chart :config="config1" style="width:100%;height:100%" />
        </el-col>
        <el-col :span="12">
          <dv-border-box-10>
            <div class="borderBox10">
              <dv-flyline-chart-enhanced
                :dev="true"
                :config="config"
                style="width: 99%; height: 99%; margin: 0 auto"
              />
            </div>
          </dv-border-box-10>
        </el-col>
        <el-col :span="6">123</el-col>
      </el-row>
      <el-row class="row3">
        <el-col :span="12">123</el-col>
        <el-col :span="12">123</el-col>
      </el-row>
    </dv-border-box-1>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  name: "indexPage",
  setup() {
    let $echarts = inject("echarts");
    let $axios = inject("axios");
    let config = {
      points: [
        {
          name: "新疆",
          coordinate: [0.32, 0.4],
          text: {
            show: true,
          },
        },
        {
          name: "西藏",
          coordinate: [0.3, 0.61],
          text: {
            show: true,
          },
        },
        {
          name: "青海",
          coordinate: [0.42, 0.54],
          text: {
            show: true,
          },
        },
        {
          name: "甘肃",
          coordinate: [0.42, 0.4],
          text: {
            show: true,
          },
        },
        {
          name: "四川",
          coordinate: [0.48, 0.65],
          text: {
            show: true,
          },
        },
        {
          name: "云南",
          coordinate: [0.48, 0.81],
          text: {
            show: true,
          },
        },
        {
          name: "贵州",
          coordinate: [0.54, 0.76],
          text: {
            show: true,
          },
        },
        {
          name: "广西",
          coordinate: [0.57, 0.83],
          text: {
            show: true,
          },
        },{
          name: "湖南",
          coordinate: [0.61, 0.73],
          text: {
            show: true,
          },
        },{
          name: "广东",
          coordinate: [0.61, 0.73],
          text: {
            show: true,
          },
        },{
          name: "澳门",
          coordinate: [0.62, 0.91],
          text: {
            show: true,
          },
        },{
          name: "香港",
          coordinate: [0.66, 0.85],
          text: {
            show: true,
          },
        },{
          name: "海南",
          coordinate: [0.58, 0.95],
          text: {
            show: true,
          },
        },{
          name: "台湾",
          coordinate: [0.73, 0.80],
          text: {
            show: true,
          },
        },{
          name: "福建",
          coordinate: [0.69, 0.75],
          text: {
            show: true,
          },
        },{
          name: "江西",
          coordinate: [0.65, 0.72],
          text: {
            show: true,
          },
        },{
          name: "浙江",
          coordinate: [0.71, 0.66],
          text: {
            show: true,
          },
        },{
          name: "湖北",
          coordinate: [0.61, 0.64],
          text: {
            show: true,
          },
        },{
          name: "安徽",
          coordinate: [0.66, 0.60],
          text: {
            show: true,
          },
        },{
          name: "上海",
          coordinate: [0.70, 0.57],
          text: {
            show: true,
          },
        },{
          name: "江苏",
          coordinate: [0.68, 0.54],
          text: {
            show: true,
          },
        },{
          name: "河南",
          coordinate: [0.62, 0.56],
          text: {
            show: true,
          },
        },{
          name: "陕西",
          coordinate: [0.56, 0.57],
          text: {
            show: true,
          },
        },{
          name: "宁夏",
          coordinate: [0.53, 0.49],
          text: {
            show: true,
          },
        },{
          name: "海南",
          coordinate: [0.58, 0.95],
          text: {
            show: true,
          },
        },{
          name: "内蒙古",
          coordinate: [0.55, 0.39],
          text: {
            show: true,
          },
        },{
          name: "山西",
          coordinate: [0.59, 0.48],
          text: {
            show: true,
          },
        },{
          name: "山东",
          coordinate: [0.66, 0.49],
          text: {
            show: true,
          },
        },{
          name: "海南",
          coordinate: [0.58, 0.95],
          text: {
            show: true,
          },
        },{
          name: "河北",
          coordinate: [0.63, 0.45],
          text: {
            show: true,
          },
        },{
          name: "北京",
          coordinate: [0.62, 0.39],
          text: {
            show: true,
          },
        },{
          name: "天津",
          coordinate: [0.67, 0.41],
          text: {
            show: true,
          },
        },{
          name: "辽宁",
          coordinate: [0.71, 0.36],
          text: {
            show: true,
          },
        },{
          name: "吉林",
          coordinate: [0.73, 0.28],
          text: {
            show: true,
          },
        },{
          name: "黑龙江",
          coordinate: [0.74, 0.19],
          text: {
            show: true,
          },
        }
      ],
      lines: [
        {
          source: "西藏",
          target: "北京",
        },
         {
          source: "新疆",
          target: "北京",
        },
         {
          source: "甘肃",
          target: "北京",
        },
         {
          source: "青海",
          target: "北京",
        },
         {
          source: "四川",
          target: "北京",
        },
         {
          source: "云南",
          target: "北京",
        },
         {
          source: "内蒙古",
          target: "北京",
        },
         {
          source: "宁夏",
          target: "北京",
        },
         {
          source: "陕西",
          target: "北京",
        },
         {
          source: "贵州",
          target: "北京",
        },
         {
          source: "山西",
          target: "北京",
        },
         {
          source: "广西",
          target: "北京",
        },
         {
          source: "海南",
          target: "北京",
        },
         {
          source: "澳门",
          target: "北京",
        },
         {
          source: "香港",
          target: "北京",
        },
         {
          source: "海南",
          target: "北京",
        },
         {
          source: "河南",
          target: "北京",
        },
         {
          source: "河北",
          target: "北京",
        },
         {
          source: "湖南",
          target: "北京",
        },
         {
          source: "湖北",
          target: "北京",
        },
         {
          source: "江西",
          target: "北京",
        },
         {
          source: "福建",
          target: "北京",
        },
         {
          source: "浙江",
          target: "北京",
        },
         {
          source: "台湾",
          target: "北京",
        },
         {
          source: "江苏",
          target: "北京",
        },
         {
          source: "上海",
          target: "北京",
        },
         {
          source: "山东",
          target: "北京",
        },
         {
          source: "天津",
          target: "北京",
        },
         {
          source: "辽宁",
          target: "北京",
        },
         {
          source: "吉林",
          target: "北京",
        },
         {
          source: "黑龙江",
          target: "北京",
        },



        
        
      ],
      bgImgSrc: require("../assets/indexPhoto/中国地图.png"),
    };
    let config1 = reactive({
      data: [
    {
      name: '北京',
      value: 168
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    }
  ]
    })
    onMounted(async function(){
      let msg = await $axios({
        method:'get',
        url:'http://111.231.75.86:8000/api/provinces/CHN/BJ/',
      })
      const {confirmedCount,curedCount} = msg.data
      config1.data[0].value=confirmedCount
    })
    return {
      config,config1
    };
    
  },
  
};
</script>

<style lang="less" scoped>
#all {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(@/assets/indexPhoto/背景图.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.row1 {
  height: 12%;
}
.row2 {
  height: 50%;
}
.row3 {
  height: 38%;
}
.top {
  height: 100%;
  text-align: center;
  font-weight: 800;
  color: white;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.borderBox10 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
