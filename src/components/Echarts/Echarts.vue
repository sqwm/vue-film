<template>
  <div id='chart' :style='{width, height}'></div>
</template>

<script>
  import echarts from 'echarts'
  import 'zrender/lib/svg/svg'

  export default {
    name: 'Echarts',
    data () {
      return {
        chart: null,
        width: '100%',
        height: '500px',
        dateTime:null
      }
    },
    created () {
      this.height = (document.body.clientHeight - 134) + 'px'
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      // drawLine () {
      //   let myChart = echarts.init(document.getElementById('chart'))
      //   myChart.setOption({
      //     title: { text: 'Column Chart' },
      //     tooltip: {},
      //     xAxis: {
      //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //     },
      //     yAxis: {},
      //     series: [{
      //       name: '销量',
      //       type: 'bar',
      //       data: [5, 20, 36, 10, 10, 20]
      //     }]
      //   })
      // }
      drawLine () {
        let myChart = echarts.init(document.getElementById('chart'))
         function xData () {
          var data = []
          for (var i = 1; i < 13; i++) {
            data.push(i + '日')
          }
          return data
        }
        this.dateTime = xData()
        myChart.setOption(
          {
            backgroundColor: '#344b58',
            'title': {
              'text': '每日申请服务详情',
              x: '4%',
              y: '2%',

              textStyle: {
                color: '#fff',
                fontSize: '22'
              },
              subtextStyle: {
                color: '#90979c',
                fontSize: '16'

              }
            },
            'tooltip': {
              'trigger': 'axis',
              'axisPointer': {
                'type': 'shadow',
                textStyle: {
                  color: '#fff'
                }

              }
            },
            'grid': {
              'borderWidth': 0,
              'top': 110,
              'bottom': 95,
              textStyle: {
                color: '#fff'
              }
            },
            'legend': {
              x: '1%',
              top: '11%',
              textStyle: {
                color: '#90979c'
              },
              'data': ['已处理', '未处理', '平均']
            },
            'calculable': true,
            'xAxis': [{
              'type': 'category',
              'axisLine': {
                lineStyle: {
                  color: '#90979c'
                }
              },
              'splitLine': {
                'show': false
              },
              'axisTick': {
                'show': false
              },
              'splitArea': {
                'show': false
              },
              'axisLabel': {
                'interval': 0

              },
              'data': this.dateTime
            }],
            'yAxis': [{
              'type': 'value',
              'splitLine': {
                'show': false
              },
              'axisLine': {
                lineStyle: {
                  color: '#90979c'
                }
              },
              'axisTick': {
                'show': false
              },
              'axisLabel': {
                'interval': 0

              },
              'splitArea': {
                'show': false
              }

            }],
            'dataZoom': [{
              'show': true,
              'height': 30,
              'xAxisIndex': [
                0
              ],
              bottom: 30,
              'start': 10,
              'end': 80,
              handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              handleSize: '110%',
              handleStyle:{
                color:'#d3dee5'

              },
              textStyle:{
                color:'#fff'},
              borderColor:'#90979c'
            }, {
              'type': 'inside',
              'show': true,
              'height': 15,
              'start': 1,
              'end': 35
            }],
            'series': [{
              'name': '已处理',
              'type': 'bar',
              'stack': '总量',
              'barMaxWidth': 35,
              'barGap': '10%',
              'itemStyle': {
                'normal': {
                  'color': 'rgba(255,144,128,1)',
                  'label': {
                    'show': true,
                    'textStyle': {
                      'color': '#fff'
                    },
                    'position': 'insideTop',
                    formatter: function (p) {
                      return p.value > 0 ? (p.value) : ''
                    }
                  }
                }
              },
              'data': [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544,
                3285,
                5208,
                3372,
                2484,
                4078
              ]
            },

              {
                'name': '未处理',
                'type': 'bar',
                'stack': '总量',
                'itemStyle': {
                  'normal': {
                    'color': 'rgba(0,191,183,1)',
                    'barBorderRadius': 0,
                    'label': {
                      'show': true,
                      'position': 'top',
                      formatter: function (p) {
                        return p.value > 0 ? (p.value) : ''
                      }
                    }
                  }
                },
                'data': [
                  327,
                  1776,
                  507,
                  1200,
                  800,
                  482,
                  204,
                  1390,
                  1001,
                  951,
                  381,
                  220
                ]
              }, {
                'name': '总申请数量',
                'type': 'line',
                'stack': '总量',
                symbolSize:10,
                symbol:'circle',
                'itemStyle': {
                  'normal': {
                    'color': 'rgba(252,230,48,1)',
                    'barBorderRadius': 0,
                    'label': {
                      'show': true,
                      'position': 'top',
                      formatter: function (p) {
                        return p.value > 0 ? (p.value) : ''
                      }
                    }
                  }
                },
                'data': [
                  1036,
                  3693,
                  2962,
                  3810,
                  2519,
                  1915,
                  1748,
                  4675,
                  6209,
                  4323,
                  2865,
                  4298
                ]
              }
            ]
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
