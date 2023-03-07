import {
    mergeDeep
} from '../../utils/util';

import * as echarts from '../../ec-canvas/echarts';

Component({
    ready() {
        this.ecComponentMain = this.selectComponent('#chartMain');
        this.ecComponentRotated = this.selectComponent('#chartRotated');
        this.initChartMain();
    },
    data: {

        chartStyle:"",

        //保存图表实例
        chartRotated: null,
        chartMain: null,
        chartDataMainOption: {
            xAxis: {
                data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
            },
            yAxis: {
                data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
            },
            series: [{
                    name: 'ENSO-Cross',
                    data: [-0.85, -0.74, -0.60, -0.46, -0.30, -0.19, -0.14, 0.19, 0.59, 0.88, 1.11, 1.27, 1.34, 1.45, 1.55, 1.57, 1.43],
                    type: 'line',
                },
                {
                    name: 'ENSO-ASC',
                    data: [-0.98, -0.67, -0.74, -0.93, -0.35, 0.33, 0.42, 0.48, 0.19, -0.25, -0.49, -0.71, -0.35, 0.05, 0.33, 1.41, 1.28],
                    type: 'line',
                }, {
                    name: 'ENSO-MC',
                    data: [-1.17, -0.96, -0.95, -0.96, -0.61, -0.23, -0.20, -0.10, -0.23, -0.28, -0.28, -0.28, -0.06, 0.20, 0.37, 0.93, 0.80],
                    type: 'line',
                }, {
                    name: 'EnsembleForecast',
                    data: [-0.92, -0.70, -0.67, -0.69, -0.33, 0.07, 0.14, 0.34, 0.39, 0.32, 0.31, 0.28, 0.49, 0.75, 0.94, 1.49, 1.36],
                    type: 'line',
                }
            ]
        },
        cur: {},
        position: [{
                value: 'top',
                text: '顶部弹出'
            },
            {
                value: 'left',
                text: '左侧弹出'
            },
            {
                value: 'center',
                text: '中间弹出'
            },
            {
                value: 'bottom',
                text: '底部弹出'
            },
            {
                value: 'right',
                text: '右侧弹出'
            },
        ],
        //PC使用canvas 2d会导致渲染层级错误，但移动端正常
        isPC: wx.getSystemInfoSync().platform == "devtools",
        start: '2022-01',
        end: '2022-12',
        mode: '',
        month: '2022-10',
        second: '10:00:00',
        minute: '23:59',
        //预测 主图
        ecMain: {
            lazyLoad: true
        },
        //预测 放大旋转图
        ecRotated: {
            lazyLoad: true
        }
    },
    methods: {
        //日期选择器
        showPicker(e) {
            const {
                mode
            } = e.currentTarget.dataset;
            this.setData({
                mode,
                [`${mode}Visible`]: true,
            });
        },
        //日期选择器
        hidePicker() {
            const {
                mode
            } = this.data;
            this.setData({
                [`${mode}Visible`]: false,
            });
        },
        //日期选择器
        onConfirm(e) {
            const {
                value
            } = e.detail;
            const {
                mode
            } = this.data;

            console.log('confim', value);

            this.setData({
                [mode]: value,
                [`${mode}Text`]: value,
            });

            this.hidePicker();

            this.chartMain.showLoading({
                text: 'loading'
            });
            wx.request({
                url: 'https://tjseai307.com/enso/findByYearAndMonth?year=2022&month=' + parseInt(this.data.month.split('-')[1]).toString(),
                success: (res) => {
                    this.data.chartDataMainOption = res.data;
                    //重新初始化图表即可，初始化函数里已经有获取当前month的方法了
                    this.chartMain.hideLoading();
                    this.initChartMain()
                }
            })
        },
        //日期选择器
        onColumnChange(e) {
            console.log('pick', e.detail.value);
        },
        //popup
        handlePopup(e) {
            const {
                item
            } = e.currentTarget.dataset;

            this.setData({
                    cur: item,
                },
                () => {
                    this.setData({
                        visible: true
                    });
                },
            );

            //懒加载，保证绘图的时候，canvas的大小是正确的
            //设300是因为popup的动画时间是240
            setTimeout(() => {
                this.initChartRotated();
            }, 300)

        },
        //popup
        onVisibleChange(e) {
            this.setData({
                visible: e.detail.visible,
            });
        },
        //popup
        onClose() {
            this.setData({
                visible: false,
            });
        },

        initChartMain() {
            this.ecComponentMain.init((canvas, width, height, dpr) => {

                this.chartMain = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(this.chartMain);

                var option = {

                    grid: {
                        //控制margin
                        y: 35
                    },
                    dataZoom: [
                        // 本来是用来水平移动图表的，但是有概率会闪退，遂放弃
                    ],
                    title: {
                        left: 'center',
                        textStyle: {
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    legend: {
                        data: ['ENSO-Cross', 'ENSO-ASC', 'ENSO-MC', 'EnsembleForecast'],
                        bottom: 0,
                        textStyle: {
                            rich: {
                                a: {
                                    color: 'blue',
                                    fontSize:12,
                                    rotate: 90
                                },
                            }
                        },
                        formatter: function (name) {
                            return '{a|' + name + "}";
                        },
                    }
                };

                //将图表【样式配置】和【数据配置】合并成【最终配置】
                option = mergeDeep(option, this.data.chartDataMainOption);
                //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                option.title.text = 'Niño 3.4 Forecast Results ' + this.data.month;
                //旋转图表的骚操作
                delete(option.yAxis.data);
                this.setData({chartStyle:"transform: rotate(90deg)"});
                this.chartMain.setOption(option);
                
                return this.chartMain;
            })
        },
        initChartRotated() {
            this.ecComponentRotated.init((canvas, width, height, dpr) => {

                this.chartRotated = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // 像素
                });
                canvas.setChart(this.chartRotated);

                var option = {
                    grid: {
                        // y:35
                    },
                    title: {
                        left: 'center',
                        textStyle: {
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            rotate: -90
                        },
                        inverse: 'true',
                    },
                    xAxis: {
                        // min:-3,
                        // max:3,
                        axisLabel: { //坐标轴刻度标签的相关设置。
                            rotate: 90 //刻度标签旋转的角度，
                        },
                        position: 'top',
                        splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        }
                    },
                    //echarts图例的文字没法旋转，只能这样了
                    legend: {
                        data: ['ENSO-Cross', 'ENSO-ASC', 'ENSO-MC', 'EnsembleForecast'],
                        bottom: 0
                    }
                };

                //将图表【样式配置】和【数据配置】合并成【最终配置】
                option = mergeDeep(option, this.data.chartDataMainOption);
                //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                option.title.text = 'Niño 3.4 Forecast Results ' + this.data.month;
                //旋转图表的骚操作
                delete(option.xAxis.data);


                this.chartRotated.setOption(option);
                return this.chartRotated;
            })
        },
        test() {
            console.log(parseInt(this.data.month.split('-')[1]))
        }
    }
})