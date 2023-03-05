
import * as echarts from '../../ec-canvas/echarts';
import { mergeDeep } from '../../utils/util';

//保存图表实例
let chart1 = null;
let chart2 = null;
let chart3 = null;
let chart4 = null;

Component({
    ready() {
        this.ecComponent1 = this.selectComponent("#chart1");
        this.ecComponent2 = this.selectComponent("#chart2");
        this.ecComponent3 = this.selectComponent("#chart3");
        this.ecComponent4 = this.selectComponent("#chart4");
        this.initChart1();
        this.initChart2();
        this.initChart3();
        this.initChart4();
    },
    data: {
        //Collapse 折叠面板 展开的栏的列表
        activeValues: [0,1,2,3],
        ec1:{
            lazyLoad: true
        },
        ec2:{
            lazyLoad: true
        },
        ec3:{
            lazyLoad: true
        },
        ec4: {
            lazyLoad: true
        },
        chart1data: {
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
        chart2data: {
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
        chart3data: {
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
        commomOption: {
            grid:{
                top:20,
                bottom: 20
            }
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
        initChart1() {
            this.ecComponent1.init((canvas, width, height, dpr) => {
                chart1 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart1);

                var option = mergeDeep(this.data.commomOption, this.data.chart1data);
                chart1.setOption(option);
                return chart1;
            })
        },
        initChart2() {
            this.ecComponent2.init((canvas, width, height, dpr) => {
                chart2 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart2);

                var option = mergeDeep(this.data.commomOption, this.data.chart2data);
                chart2.setOption(option);
                return chart2;
            })
        },
        initChart3() {
            this.ecComponent3.init((canvas, width, height, dpr) => {
                chart3 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart3);

                var option = mergeDeep(this.data.commomOption, this.data.chart3data);
                chart3.setOption(option);
                return chart3;
            })
        },
        initChart4() {
            this.ecComponent4.init((canvas, width, height, dpr) => {
                chart4 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart4);

                var option = mergeDeep(this.data.commomOption, this.data.chart4data);
                chart4.setOption(option);
                return chart4;
            })
        }
    }
})