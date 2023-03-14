import {
    mergeDeep
} from '../../utils/util';

import * as echarts from '../../ec-canvas/echarts';

Component({
    options: {
        styleIsolation: 'shared'
    },
    ready() {
        this.ecComponentMain = this.selectComponent('#chartMain');
        this.ecComponentRotated = this.selectComponent('#chartRotated');
        this.initChartMain();
    },
    data: {

        chartStyle:"",
        commomOption : {

            grid: {
                //控制margin
                top:35,
                right:20
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
                data: ['ENSO-Cross', 'ENSO-ASC', 'ENSO-GTC', 'ENSO-MC', 'EnsembleForecast'],
                bottom: 0,
                textStyle: {
                    rich: {
                        a: {
                            color: 'black',
                            fontSize:12,
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
        chartDataMainOption: {
            xAxis: {
                data: ["Feb-23","Mar-23","Apr-23","May-23","Jun-23","Jul-23","Aug-23","Sep-23","Oct-23","Nov-23","Dec-23","Jan-24","Feb-24","Mar-24","Apr-24","May-24","Jun-24","Jul-24"]
            },
            series: [{
                    name: 'ENSO-Cross',
                    data: [-0.44 ,-0.29 ,-0.15 ,0.23 ,0.46 ,0.70 ,0.94 ,1.12 ,1.14 ,1.52 ,1.69 ,1.81 ,1.70 ,1.42 ,0.94 ,0.67 ,0.37 ,0.27],
                    type: 'line',
                },
                {
                    name: 'ENSO-ASC',
                    data: [-0.25 ,0.34,0.41,0.45,0.19,-0.22,-0.44,-0.67,-0.32,0.14,0.41,1.5,1.33,0.97,0.53,0.41,0.18,-0.76],
                    type: 'line',
                }, 
                {
                    name: 'ENSO-GTC',
                    data:[-0.60 ,-0.33 ,-0.06 ,0.13 ,0.18 ,0.12 ,0.09 ,0.12 ,0.16 ,0.33 ,0.14 ,0.29 ,0.14 ,-0.04 ,-0.17 ,0.01 ,-0.05 ,-0.12 ],
                    type:'line'
                },
                {
                    name: 'ENSO-MC',
                    data: [-0.84 ,-1.11 ,-1.45 ,-1.34 ,-1.10 ,-0.69 ,-0.28 ,-0.13 ,-0.11 ,-0.12 ,-0.01 ,0.06 ,-0.17 ,-0.71 ,-1.25 ,-1.20 ,-0.94 ,-0.57 ],
                    type: 'line',
                }, {
                    name: 'EnsembleForecast',
                    data: [-0.53 ,-0.35 ,-0.31 ,-0.13 ,-0.07 ,-0.02 ,0.08 ,0.11 ,0.22 ,0.47 ,0.56 ,0.92 ,0.75 ,0.41 ,0.01 ,-0.03 ,-0.11 ,-0.29 ],
                    type: 'line'
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
                this.setData({chartStyle:""});
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


                //将图表【样式配置】和【数据配置】合并成【最终配置】
                let option = mergeDeep(this.data.chartDataMainOption,this.data.commomOption);
                //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                option.title.text = 'Niño 3.4 Forecast Results ' + this.data.month;

                // this.setData({chartStyle:"transform: rotate(90deg)"});
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


                //将图表【样式配置】和【数据配置】合并成【最终配置】
                let option = mergeDeep(this.data.chartDataMainOption,this.data.commomOption);
                //获取当前month，设置option，getCurrentPages()[0]获得Page()或Component()里的响应式数据
                option.title.text = 'Niño 3.4 Forecast Results ' + this.data.month;
                option.grid.left=40;
                option.grid.right=60;
                option.series[option.series.length-1].itemStyle = { normal: {label : {show: true}}};

                this.setData({chartStyle:"transform: rotate(90deg) translateX(-50vw) translateY(-50vw);transform-origin:left;"});
                this.chartRotated.setOption(option);
                return this.chartRotated;
            })
        },
        test() {
            console.log(parseInt(this.data.month.split('-')[1]))
        }
    }
})