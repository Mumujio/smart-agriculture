<template>
  <!-- <flop></flop> -->
  <div class="center" id="echarts">
    <!-- <earth></earth> -->
  </div>
</template>

<script setup>
// import earth from "./earth.vue";
import { onMounted, getCurrentInstance } from "vue";
import flop from "./flopContent2.vue";
import * as echarts from "echarts";
import { requestHuBeiData } from "@/request/requests";

let mychart = {};
// 市地区位置
let geoCoordMap = {
  十堰市: [110.505076, 32.3907915],
  荆州市: [112.661799, 30.0451365],
  荆门市: [112.6694995, 31.0027585],
  襄阳市: [111.9355865, 31.9309895],
  鄂州市: [114.796437, 30.3183775],
  随州市: [113.42538, 31.8812465],
  黄冈市: [115.26422, 30.664937],
  黄石市: [115.015914, 29.9212475],
  咸宁市: [114.250381, 29.6665605],
  天门市: [113.0242125, 30.643268],
  孝感市: [113.9487345, 31.119153],
  宜昌市: [111.1645635, 30.7619465],
  恩施: [109.500639, 30.2582235],
  武汉市: [114.3859335, 30.6665495],
  潜江市: [112.762119, 30.3637185],
  神农架: [110.456263, 31.5808695],
};
// 市区人数数据
let data = [
  {
    name: "十堰市",
    value: 12,
  },
  {
    name: "荆州市",
    value: 27,
  },
  {
    name: "荆门市",
    value: 43,
  },
  {
    name: "襄阳市",
    value: 21,
  },
  {
    name: "鄂州市",
    value: 54,
  },
  {
    name: "随州市",
    value: 20,
  },
  {
    name: "黄冈市",
    value: 46,
  },
  {
    name: "黄石市",
    value: 7,
  },
  {
    name: "咸宁市",
    value: 76,
  },
  {
    name: "天门市",
    value: 89,
  },
  {
    name: "孝感市",
    value: 123,
  },
  {
    name: "宜昌市",
    value: 11,
  },
  {
    name: "恩施",
    value: 12,
  },
  {
    name: "武汉市",
    value: 6,
  },
  {
    name: "潜江市",
    value: 12,
  },
  {
    name: "神农架",
    value: 5,
  },
];

// const { ctx } = getCurrentInstance();
// ctx.$EventBus.emit("change_personNum", data);
let convertData = function (data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  // 有数据的地区的名称和value值
  return res;
};
console.log(convertData(data));
onMounted(() => {
  requestHuBeiData("./hubei.json").then((res) => {
    echarts.registerMap("hubei", res.data);
    mychart = echarts.init(document.querySelector("#echarts"));

    mychart.setOption({
      backgroundColor: "#000",

      // series: [
      //   {
      //     name: "地图数据",
      //     type: "map",
      //     zoom: 1.1,
      //     roam: true, //是否开启鼠标缩放和平移漫游
      //     mapType: "hubei", // 自定义扩展图表类型
      //     itemStyle: {
      //       normal: {
      //         borderColor: "brown",
      //       },
      //       emphasis: {
      //         label: {
      //           show: true,
      //           textStyle: {
      //             color: "darkslategray",
      //           },
      //         },
      //       },
      //     },

      //     label: {
      //       //区域名样式
      //       normal: {
      //         show: true,
      //         textStyle: {
      //           fontSize: 10,
      //           color: "rgba(0,0,0,.5)",
      //         },
      //       },
      //       emphasis: {
      //         textStyle: {
      //           color: "rgba(255,255,255,1)",
      //         },
      //       },
      //     },
      //   },
      // ],
      // series: [
      //   {
      //     name: "bar3D",
      //     type: "bar3D",
      //     coordinateSystem: "geo3D",
      //     barSize: 1, //柱子粗细
      //     shading: "lambert",
      //     opacity: 1,
      //     bevelSize: 0.3,
      //     label: {
      //       show: false,
      //       formatter: "{b}",
      //     },
      //     data: barData,
      //   },
      // ],

      geo: {
        show: true,
        map: "hubei",
        roam: true,

        color: "#fff",
        // label: {
        //   //区域名样式
        //   normal: {
        //     show: true,
        //     textStyle: {
        //       fontSize: 10,
        //       color: "rgba(255,255,255,1)",
        //     },
        //   },
        //   emphasis: {
        //     textStyle: {
        //       color: "rgba(255,255,255,1)",
        //     },
        //   },
        // },
        itemStyle: {
          normal: {
            areaColor: {
              type: "linear-gradient",
              x: 0,
              y: 400,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(37,108,190,0.3)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(15,169,195,0.3)", // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: "#4ecee6",
            borderWidth: 1,
          },
          emphasis: {
            areaColor: {
              type: "linear-gradient",
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(37,108,190,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(15,169,195,1)", // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
          },
        },
      },
      series: [
        // {
        //   name: "定位点",
        //   type: "effectScatter", // 散点图
        //   coordinateSystem: "geo", // 使用地理坐标系
        //   hoverAnimation: "false",
        //   legendHoverLink: "false",
        //   rippleEffect: {
        //     period: 4,
        //     brushType: "stroke",
        //     scale: 3,
        //   },
        //   data: convertData(data),
        //   symbolSize: function (val) {
        //     if (val[2] <= 100) {
        //       return 4;
        //     }
        //     if (val[2] > 100 && val[2] <= 200) {
        //       return 8;
        //     }
        //     if (val[2] > 200 && val[2] <= 300) {
        //       return 12;
        //     }
        //     if (val[2] > 300 && val[2] <= 400) {
        //       return 16;
        //     }
        //     if (val[2] > 400 && val[2] <= 500) {
        //       return 20;
        //     }
        //     if (val[2] > 500) {
        //       return 24;
        //     }
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: "#5599E4",
        //     },
        //   },
        //   zlevel: 1,
        // },
        // {
        //   name: "点",
        //   type: "scatter",
        //   coordinateSystem: "geo",
        //   symbol: "pin",
        //   symbolSize: 25,
        //   label: {
        //     normal: {
        //       show: true,
        //       textStyle: {
        //         color: "#fff",
        //         fontSize: 9,
        //       },
        //     },
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: "#F62157", //标志颜色
        //     },
        //   },
        //   zlevel: 6,
        //   data: [
        //     {
        //       name: "十堰市",
        //       value: [110.505076, 32.3907915, 121],
        //     },
        //   ],
        // },
        {
          type: "scatter",
          coordinateSystem: "geo",
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                var name = params.name;
                var value = params.value[2];
                var text = `{fline|${value}人}\n{tline|${name}}`;
                return text;
              },
              color: "#fff",
              rich: {
                fline: {
                  padding: [0, 25],
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 400,
                },
                tline: {
                  padding: [0, 27],
                  color: "#ABF8FF",
                  fontSize: 11,
                },
              },
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            color: "#00FFF6",
          },
          symbol: "roundRect",
          symbolSize: [70, 35],
          symbolOffset: [0, -60],
          z: 999,
          data: convertData(data),
        },
        {
          type: "scatter",
          coordinateSystem: "geo",
          itemStyle: {
            color: "#00FFF6",
          },
          symbol:
            "path://M512 0C294.208 0 117.034667 177.152 117.056 394.922667c0 80.896 24.298667 158.677333 69.781333 224.149333 2.282667 3.925333 4.586667 7.722667 7.296 11.413333l288.277333 379.989333C490.24 1019.2 500.757333 1024 512.021333 1024c11.114667 0 21.696-4.842667 30.848-15.104l286.954667-378.474667c2.837333-3.754667 5.248-7.872 6.570667-10.282667 46.144-66.389333 70.570667-144.256 70.570667-225.173333C906.965333 177.152 729.792 0 512 0zM512 536.170667c-77.781333 0-141.077333-63.296-141.077333-141.098667 0-77.781333 63.296-141.056 141.077333-141.056 77.781333 0 141.077333 63.296 141.077333 141.056C653.077333 472.874667 589.781333 536.170667 512 536.170667z",
          symbolSize: [20, 29],

          symbolOffset: [0, -20],
          z: 999,
          data: convertData(data),
        },
        {
          tooltip: {
            show: false,
          },
          type: "effectScatter",
          coordinateSystem: "geo",
          rippleEffect: {
            scale: 10,
            brushType: "stroke",
          },
          showEffectOn: "render",
          itemStyle: {
            normal: {
              color: "#00FFFF",
            },
          },
          label: {
            normal: {
              color: "#fff",
            },
          },
          symbol: "circle",
          symbolSize: [10, 5],
          data: convertData(data),
          zlevel: 1,
        },
      ],
    });
  });

  window.addEventListener("resize", () => {
    mychart.resize();
  });
});
</script>

<style lang="less" scoped>
.center {
  color: white;
  height: 100%;
  width: 100%;

  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
  }
}
</style>
