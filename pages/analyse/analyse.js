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
                top: 20,
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
            wx.request({
                url: "https://tjseai307.com/chart5data",
                success(res) {
                    wx.showToast({
                        title: JSON.stringify(res.data),
                        icon: 'success',
                        duration: 2000
                    })
                    console.log(res.data)
                },
                fail(res) {
                    wx.showToast({
                        title: '失败！',
                        icon: 'error',
                        duration: 2000
                    })
                }
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
                chart1.showLoading()
                let that = this;
                wx.request({
                    url: 'https://tjseai307.com/chartdata?chart=1',
                    success(res) {
                        that.data.chart1data = res.data;
                        chart1.hideLoading();
                        var option = mergeDeep(that.data.commomOption, that.data.chart1data);
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
                    url: 'https://tjseai307.com/chartdata?chart=2',
                    success(res) {
                        console.log(res.data)
                        that.data.chart2data = res.data;
                        chart2.hideLoading();
                        var option = mergeDeep(that.data.commomOption, that.data.chart2data);
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
                        console.log(res.data)
                        that.data.chart3data = res.data;
                        chart3.hideLoading();
                        var option = mergeDeep(that.data.commomOption, that.data.chart3data);
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
                        console.log(res.data);
                        that.data.chart4data = res.data;
                        chart4.hideLoading();
                        var option = mergeDeep(that.data.commomOption, that.data.chart4data);
                        chart4.setOption(option);
                    }
                })
                return chart4;
            })
        }
    }
})