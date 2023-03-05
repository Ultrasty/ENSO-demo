Component({
    ready() {
        let ecComponent = this.selectComponent("#chart4");
        ecComponent.init(this.initChart);
    },
    data: {
        //Collapse 折叠面板 展开的栏的列表
        activeValues: [],
        ec: {
            lazyLoad: true
        },
        chart4data: {
            legend: {
                // Try 'horizontal'
                orient: 'vertical',
                right: 10,
                top: 'center'
            },
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {},
            series: [{
                type: 'bar'
            }, {
                type: 'bar'
            }, {
                type: 'bar'
            }]
        },
        chart4option: {

        }
    },
    methods: {
        //用户分析页的Collapse 折叠面板 展开项列表
        handleChange(e) {
            this.setData({
                activeValues: e.detail.value,
            });
        },
        test() {
            wx.navigateTo({
              url: '/pages/nullpage/nullpage',
            })
        },
        initChart(canvas, width, height, dpr,test) {
            console.log(test)
            chart4 = echarts.init(canvas, null, {
                width: width,
                height: height,
                devicePixelRatio: dpr // 像素
            });
            canvas.setChart(chart4);
        
            var option = {
                legend: {
                    // Try 'horizontal'
                    orient: 'vertical',
                    right: 10,
                    top: 'center'
                },
                dataset: {
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.4, 53.9, 39.1]
                    ]
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {},
                series: [{
                    type: 'bar'
                }, {
                    type: 'bar'
                }, {
                    type: 'bar'
                }]
            };
            chart4.setOption(option);
            return chart4;
        }
    }
})

import * as echarts from '../../ec-canvas/echarts';

//保存图表实例
let chart4 = null;
