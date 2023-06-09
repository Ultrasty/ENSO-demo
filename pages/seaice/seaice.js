import {
    mergeDeep
} from '../../utils/util';

import * as echarts from '../../ec-canvas/echarts';

var app = getApp();

Component({
    options: {
        styleIsolation: 'shared'
    },
    ready() {
        this.ecComponentMain = this.selectComponent('#chartMain');
        this.ecComponentRotated = this.selectComponent('#chartRotated');
        this.initChartMain();
        let that = this;
        wx.request({
            url: app.globalData.baseUrl + '/ice/availableyear',
            success: (res) => {
                that.setData(res.data);
            }
        })
    },
    data: {
        description:"",
        cityText: '',
        cityValue: [],
        citys: [
            {
                label: '2023',
                value: '2023'
            }
        ],


        chartStyle: "",
        commomOption: {
            grid: {
                //控制margin
                top: 35,
                right: 20
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
                bottom: 0,
                textStyle: {
                    rich: {
                        a: {
                            color: 'black',
                            fontSize: 12,
                            rotate: 90
                        },
                    }
                },
                formatter: function (name) {
                    return '{a|' + name + "}";
                },
            }
        },
        //保存图表实例
        chartRotated: null,
        chartMain: null,
        chartDataMainOption: {},
        cur: {},
        //PC使用canvas 2d会导致渲染层级错误，但移动端正常
        isPC: wx.getSystemInfoSync().platform == "devtools",
        //预测 主图
        ecMain: {
            lazyLoad: true
        },
        //预测 放大旋转图
        ecRotated: {
            lazyLoad: true
        },

        year: 2023
    },
    methods: {

        onColumnChange(e) {
            console.log('picker pick:', e);
        },

        onPickerChange(e) {
            const {
                key
            } = e.currentTarget.dataset;
            const {
                value
            } = e.detail;

            console.log('picker change:', e.detail);
            this.setData({
                [`${key}Visible`]: false,
                [`${key}Value`]: value,
                [`${key}Text`]: value.join(' '),
                year: value
            });
            this.initChartMain();
        },

        onPickerCancel(e) {
            const {
                key
            } = e.currentTarget.dataset;
            console.log(e, '取消');
            console.log('picker1 cancel:');
            this.setData({
                [`${key}Visible`]: false,
            });
        },

        onYearPicker() {
            this.setData({
                cityVisible: true
            });
        },

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
            this.initChartMain();

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
                this.setData({
                    chartStyle: ""
                });
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

                this.chartMain.showLoading({
                    text: 'loading'
                });

                wx.request({
                    url: app.globalData.baseUrl + '/ice/prediction?year=' + this.data.year,
                    success: (res) => {
                        this.data.chartDataMainOption = res.data;
                        //重新初始化图表即可，初始化函数里已经有获取当前month的方法了
                        this.chartMain.hideLoading();
                        //将图表【样式配置】和【数据配置】合并成【最终配置】
                        let option = mergeDeep(this.data.chartDataMainOption, this.data.commomOption);
                        //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                        option.title.text = this.data.year + '年海冰预测结果';
                        // this.setData({chartStyle:"transform: rotate(90deg)"});
                        this.chartMain.setOption(option);
                    }
                })

                wx.request({
                    url: app.globalData.baseUrl + '/ice/description?year=' + this.data.year,
                    success: (res) => {
                        this.setData({"description":res.data});
                    }
                })

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


                //将图表【样式配置】和【数据配置】合并成【最终配置】
                let option = mergeDeep(this.data.chartDataMainOption, this.data.commomOption);
                //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                option.title.text = this.data.year + '年海冰预测结果';
                option.grid.left = 40;
                option.grid.right = 60;
                this.setData({
                    chartStyle: "transform: rotate(90deg) translateX(-50vw) translateY(-50vw);transform-origin:left;"
                });
                this.chartRotated.setOption(option);
                return this.chartRotated;
            })
        },
        test() {
            console.log(parseInt(this.data.month.split('-')[1]))
        },

        //转发、分享到朋友圈、收藏时的回调函数
        onShareAppMessage: function (options) {
            return {
                title: '同济大学人工智能＋大气海洋研究团队海冰预测',
                imageUrl: 'https://www.tjensoprediction.com/imgs/seaice.jpg',
            }
        },
        onShareTimeline: function () {
            return {
                title: '同济大学人工智能＋大气海洋研究团队海冰预测',
                imageUrl: 'https://www.tjensoprediction.com/imgs/seaice.jpg',
            }
        },
        onAddToFavorites: function (options) {
            return {
                title: '同济大学人工智能＋大气海洋研究团队海冰预测',
                imageUrl: 'https://www.tjensoprediction.com/imgs/seaice.jpg',
            }
        },
    }
})