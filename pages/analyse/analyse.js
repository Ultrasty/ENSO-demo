import * as echarts from '../../ec-canvas/echarts';
import {
    mergeDeep
} from '../../utils/util';

//保存图表实例
let chart1 = null;
let chart2 = null;
let chart3 = null;
let chart4 = null;

Component({
    options: {
        styleIsolation: 'shared'
    },
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
        chart2selection:{
            availableMonth:[2,3,4,5,6,7,8,9,10,11,12,1],
            currentMonth:0
        },
        //Collapse 折叠面板 展开的栏的列表
        activeValues: [0, 1, 2, 3],
        ec1: {
            lazyLoad: true
        },
        ec2: {
            lazyLoad: true
        },
        ec3: {
            lazyLoad: true
        },
        ec4: {
            lazyLoad: true
        },
        chart1data: {},
        chart2data: {},
        chart3data: {},
        chart4data: {},
        commomOption: {
            grid: {
                top: 40,
                bottom:140,
                right: 5,
                left:50
            },
            legend:{
                bottom: 0
            },
            yAxis:{
                name: '        Niño 3.4 Index',
            },
            textStyle: {
                rich: {
                    a: {
                        color: 'black',
                        fontSize:9,
                    },
                }
            },
            formatter: function (name) {
                return '{a|' + name + "}";
            },
        }
    },
    methods: {
        nextMonth(){
            this.data.chart2selection.currentMonth = (this.data.chart2selection.currentMonth + 1) % this.data.chart2selection.availableMonth.length;
            this.initChart2();
        },
        lastMonth(){
            this.data.chart2selection.currentMonth = (this.data.chart2selection.currentMonth + this.data.chart2selection.availableMonth.length - 1) % this.data.chart2selection.availableMonth.length;
            this.initChart2();
        },
        //用户分析页的Collapse 折叠面板 展开项列表
        handleChange(e) {
            this.setData({
                activeValues: e.detail.value,
            });
        },
        test() {

        },
        initChart1() {
            this.ecComponent1.init((canvas, width, height, dpr) => {
                chart1 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart1);
                chart1.showLoading()
                let that = this;
                wx.request({
                    url: 'https://tjseai307.com/chartdata?chart=1',
                    success(res) {
                        that.data.chart1data = res.data;
                        chart1.hideLoading();
                        var option = mergeDeep(that.data.chart1data, that.data.commomOption);
                        chart1.setOption(option);
                    }
                })
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

                chart2.showLoading()
                let that = this;
                wx.request({
                    url: 'https://tjseai307.com/chartdata?chart=2&year=2022&month=' +this.data.chart2selection.availableMonth[this.data.chart2selection.currentMonth].toString(),
                    success(res) {
                        that.data.chart2data = res.data;
                        chart2.hideLoading();
                        var option = mergeDeep(that.data.chart2data,that.data.commomOption);
                        option.grid.bottom = 70;
                        chart2.setOption(option);
                    }
                })
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

                chart3.showLoading()
                let that = this;
                wx.request({
                    url: 'https://tjseai307.com/chartdata?chart=3',
                    success(res) {
                        that.data.chart3data = res.data;
                        chart3.hideLoading();
                        var option = mergeDeep(that.data.chart3data, that.data.commomOption);
                        // option.xAxis.axisLabel.formatter = function(value) {
                        //     let scope=["2022年1月起报预报误差","2022年2月起报预报误差","2022年3月起报预报误差","2022年4月起报预报误差","2022年10月起报预报误差"];
                        //     return scope[value];
                        // }
                        chart3.setOption(option);
                    }
                })
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

                chart4.showLoading()
                let that = this;
                wx.request({
                    url: 'https://tjseai307.com/chartdata?chart=4',
                    success(res) {
                        that.data.chart4data = res.data;
                        chart4.hideLoading();
                        var option = mergeDeep(that.data.chart4data, that.data.commomOption);
                        chart4.setOption(option);
                    }
                })
                return chart4;
            })
        }
    }
})