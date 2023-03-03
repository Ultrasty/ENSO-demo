import {
    mergeDeep
} from '../../utils/util';
var app = getApp();

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
        month: '2022-10',
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
            setTimeout(() => {
                this.ecComponent = this.selectComponent('#chartRotated');
                this.ecComponent.init(initChartRotated);
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
        test() {
            const merged = mergeDeep({ a: { a: 1 } },{ a: { a: 23 } });
            console.log(merged);
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
        grid: {
            //控制margin
            y: 35
        },
        dataZoom: [
            // 本来是用来水平移动图表的，但是有概率会闪退，遂放弃
        ],
        title: {
            text: 'Niño 3.4 Forecast Results',
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
            bottom: 0
        },
    };

    option = mergeDeep(option,app.globalData.chartDataMain);
    delete(option.yAxis.data);

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
        grid: {
            // y:35
        },
        title: {
            text: 'Niño 3.4 Forecast Results',
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

    option = mergeDeep(option,app.globalData.chartDataMain);
    delete(option.xAxis.data);
    

    chartRotated.setOption(option);
    return chartRotated;
}