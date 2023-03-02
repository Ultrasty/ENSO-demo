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
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x'
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