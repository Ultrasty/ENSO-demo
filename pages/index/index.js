import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // 像素
    });
    canvas.setChart(chart);

    var option = {
        grid:{
            y:35
        },
        dataZoom: [
            // 本来是用来水平移动图表的，但是有概率会闪退，遂放弃
            // {
            //     start: 0,
            //     end: 50,
            //     filterMode: 'none'
            // },
            // {
            //     type: 'inside',
            //     start: 0,
            //     end: 50
            // }
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
            // min:-3,
            // max:3,
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
    chart.setOption(option);
    return chart;
}

Component({

    options: {
        styleIsolation: 'apply-shared',
    },

    data: {
        isPC: wx.getSystemInfoSync().platform == "devtools",
        start: '2022-01',
        end: '2022-12',
        mode: '',
        second: '10:00:00',
        minute: '23:59',
        activeValues: [],
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
        ec: {
            onInit: initChart
        }
    },

    methods: {
        onChange(e) {
            this.setData({
                value: e.detail.value,
            });
        },
        handleChange(e) {
            this.setData({
                activeValues: e.detail.value,
            });
        },
        showPicker(e) {
            const {
                mode
            } = e.currentTarget.dataset;
            this.setData({
                mode,
                [`${mode}Visible`]: true,
            });
        },
        hidePicker() {
            const {
                mode
            } = this.data;
            this.setData({
                [`${mode}Visible`]: false,
            });
        },
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

        onColumnChange(e) {
            console.log('pick', e.detail.value);
        },
    },
});