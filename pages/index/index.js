
Component({
    
    options: {
        styleIsolation: 'apply-shared',
    },

    //不同组件使用的data都混到一起了
    data: {
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
        month:'2022-10',
        second: '10:00:00',
        minute: '23:59',
        //Collapse 折叠面板 展开的栏的列表
        activeValues: [],
        //默认页 predict / analyse
        value: 'predict',
        list: [{
                value: 'predict',
                label: '预测'
            },
            {
                value: 'analyse',
                label: '分析'
            }
        ],
        //预测 主图
        ecMain: {
            onInit: initChartMain
        },
        //预测 放大旋转图
        ecRotated: {
            lazyLoad: true
        }
    },

    methods: {
        // 底部标签栏
        onChange(e) {
            this.setData({
                value: e.detail.value,
            });
        },
        //用户分析页的Collapse 折叠面板 展开项列表
        handleChange(e) {
            this.setData({
                activeValues: e.detail.value,
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
            setTimeout(()=>{
                this.ecComponent = this.selectComponent('#chartRotated');
                this.ecComponent.init(initChartRotated);
            },300)
            
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
        }
    },
});

import * as echarts from '../../ec-canvas/echarts';

//保存图表实例
let chartMain = null;
let chartRotated = null;

function initChartMain(canvas, width, height, dpr) {
    
    chartMain = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
    });
    canvas.setChart(chartMain);

    var option = {
        grid:{
            //控制margin
            y:35
        },
        dataZoom: [
            // 本来是用来水平移动图表的，但是有概率会闪退，遂放弃
        ],
        title: {
            text: 'Niño 3.4 Forecast Results',
            left: 'center',
            textStyle: {
                fontSize:12
            }
        },
        xAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
            }
        },
        legend: {
            data: ['ENSO-Cross', 'ENSO-ASC', 'ENSO-MC','EnsembleForecast'],
            bottom:0
        },
        series: [{
                name:'ENSO-Cross',
                data: [-0.85, -0.74, -0.60, -0.46, -0.30, -0.19, -0.14, 0.19, 0.59, 0.88, 1.11, 1.27, 1.34, 1.45, 1.55, 1.57, 1.43],
                type: 'line',
            },
            {
                name:'ENSO-ASC',
                data: [-0.98, -0.67, -0.74, -0.93, -0.35, 0.33, 0.42, 0.48, 0.19, -0.25, -0.49, -0.71, -0.35, 0.05, 0.33, 1.41, 1.28],
                type: 'line',
            }, {
                name:'ENSO-MC',
                data: [-1.17, -0.96, -0.95, -0.96, -0.61, -0.23, -0.20, -0.10, -0.23, -0.28, -0.28, -0.28, -0.06, 0.20, 0.37, 0.93, 0.80],
                type: 'line',
            }, {
                name:'EnsembleForecast',
                data: [-0.92, -0.70, -0.67, -0.69, -0.33, 0.07, 0.14, 0.34, 0.39, 0.32, 0.31, 0.28, 0.49, 0.75, 0.94, 1.49, 1.36],
                type: 'line',
            }
        ]
    };
    chartMain.setOption(option);
    return chartMain;
}


function initChartRotated(canvas, width, height, dpr) {
    chartRotated = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
    });
    canvas.setChart(chartRotated);

    var option = {
        grid:{
            // y:35
        },
        title: {
            text: 'Niño 3.4 Forecast Results',
            left: 'center',
            textStyle: {
                fontSize:12
            }
        },
        yAxis: {
            axisLabel :{
                rotate : -90
            },
            inverse :'true',
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        xAxis: {
            // min:-3,
            // max:3,
            axisLabel :{  //坐标轴刻度标签的相关设置。
                rotate : 90 //刻度标签旋转的角度，
            },
            position :'top',
            splitLine: {
                lineStyle: {
                  type: 'dashed'
                }
            }
        },
        //echarts图例的文字没法旋转，只能这样了
        legend: {
            data: ['ENSO-Cross', 'ENSO-ASC', 'ENSO-MC','EnsembleForecast'],
            bottom:0
        },
        series: [{
                name:'ENSO-Cross',
                data: [-0.85, -0.74, -0.60, -0.46, -0.30, -0.19, -0.14, 0.19, 0.59, 0.88, 1.11, 1.27, 1.34, 1.45, 1.55, 1.57, 1.43],
                type: 'line',
            },
            {
                name:'ENSO-ASC',
                data: [-0.98, -0.67, -0.74, -0.93, -0.35, 0.33, 0.42, 0.48, 0.19, -0.25, -0.49, -0.71, -0.35, 0.05, 0.33, 1.41, 1.28],
                type: 'line',
            }, {
                name:'ENSO-MC',
                data: [-1.17, -0.96, -0.95, -0.96, -0.61, -0.23, -0.20, -0.10, -0.23, -0.28, -0.28, -0.28, -0.06, 0.20, 0.37, 0.93, 0.80],
                type: 'line',
            }, {
                name:'EnsembleForecast',
                data: [-0.92, -0.70, -0.67, -0.69, -0.33, 0.07, 0.14, 0.34, 0.39, 0.32, 0.31, 0.28, 0.49, 0.75, 0.94, 1.49, 1.36],
                type: 'line',
            }
        ]
    };
    chartRotated.setOption(option);
    return chartRotated;
}