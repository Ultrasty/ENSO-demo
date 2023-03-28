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
            availableData:[],
            currentData:0
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
            this.data.chart2selection.currentData = (this.data.chart2selection.currentData + 1) % this.data.chart2selection.availableData.length;
            this.initChart2again();
        },
        lastMonth(){
            this.data.chart2selection.currentData = (this.data.chart2selection.currentData + this.data.chart2selection.availableData.length - 1) % this.data.chart2selection.availableData.length;
            this.initChart2again();
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
                    url: 'http://192.168.50.122:8080/enso/findAllByModel/chart1?model=ef',
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
                    url: 'http://192.168.50.122:8080/enso/findAllByModel/chart2?model=ef',
                    success(res) {
                        that.data.chart2selection.availableData = res.data;
                        that.data.chart2data = that.data.chart2selection.availableData[0];
                        chart2.hideLoading();
                        var option = mergeDeep(that.data.chart2data,that.data.commomOption);
                        option.grid.bottom = 70;
                        chart2.setOption(option);
                    }
                })
                return chart2;
            })
        },
        initChart2again() {
            this.ecComponent2.init((canvas, width, height, dpr) => {
                chart2 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(chart2);

                this.data.chart2data = this.data.chart2selection.availableData[this.data.chart2selection.currentData];
                var option = mergeDeep(this.data.chart2data,this.data.commomOption);
                option.grid.bottom = 70;
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

                chart3.showLoading()
                let that = this;
                wx.request({
                    url: 'http://192.168.50.122:8080/enso/findAllByModel/chart3?model=ef',
                    success(res) {
                        that.data.chart3data = res.data;
                        chart3.hideLoading();
                        var option = mergeDeep(that.data.chart3data, that.data.commomOption);
                        option.grid.bottom = 180;
                        option.xAxis.axisLabel = {};
                        option.xAxis.axisLabel.formatter = function(value) {
                            let scope=["误差分析箱型图"];
                            return scope[value];
                        }
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
                    url: 'http://192.168.50.122:8080/enso/findAllByModel/chart4?model=ef',
                    success(res) {
                        that.data.chart4data = res.data;
                        chart4.hideLoading();
                        var option = mergeDeep(that.data.chart4data, that.data.commomOption);
                        option.grid.left = 80;
                        chart4.setOption(option);
                    }
                })
                return chart4;
            })
        }
    }
})