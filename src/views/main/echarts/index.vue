<template>
  <div>
    LH
    <v-chart :options="options" autoresize class="canvas_box" theme="light"></v-chart>
  </div>
</template>

<script>
  var colors = ['#5793f3', '#8f8f8d', '#675bba'];
  export default {
    data() {
      return {
        options: {
          color: ['#5793f3', '#8f8f8d', '#675bba'],
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: []
          },
          grid: {
            top:'20%',//距上边距
            right:'2%',//距离右边距
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLabel:{
                interval: 0,
                fontSize: 10
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            // axisPointer: {
            //     label: {
            //         formatter: function (params) {
            //             return '降水量  ' + params.value
            //                 + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
            //         }
            //     }
            // },
            data: ["10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:20\n9/3", "10:21\n9/3"]
          }, ],
          yAxis: [{
            type: 'value',
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            splitLine: {
              show: false
            },
            max: 100,
            min: 0,
            interval: 25
          }],
          series: [{
              name: 'LH',
              type: 'line',
              smooth: true,
              data: [5.9, 6.05, 10.97, 25.00, 55.09, 89.09, 45.42, 18.25, 12.20, 6.5],
              showSymbol: true,
              color: '#f6665e',
              // 矢量画五角星
              symbol: 'image://https://ileyun.ivfcn.com/tools/static/img/_fill.png',
              symbolSize: 10,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    fontSize: 13
                  }
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'red'
                    },
                    {
                      offset: 1,
                      color: '#ffe7e7'
                    }
                  ], ),
                  shadowColor: 'rgba(250,180,101,0.2)',
                  shadowBlur: 20
                }
              },
              markLine: {
                symbol: "none", //去掉警戒线最后面的箭头
                label: {
                  position: "end", //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                  formatter: "",
                },
                data: [{
                  silent: false, //鼠标悬停事件  true没有，false有
                  lineStyle: { //警戒线的样式  ，虚实  颜色
                    type: "dashed",
                    color: "#f6665e"
                  },
                  name: '警戒线',
                  yAxis: 25
                }]
              }
            },

          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.canvas_box {
  width: 100vw;
  height: 260px;
}
</style>
