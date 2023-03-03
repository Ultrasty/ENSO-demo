import {
    initChart,
    initChartRotated
} from '../../utils/mychart.js'

Component({

    options: {
        styleIsolation: 'apply-shared',
    },

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
        },
        ecRotated: {
            onInit: initChartRotated
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
        },
        onVisibleChange(e) {
            this.setData({
                visible: e.detail.visible,
            });
        },
        onClose() {
            this.setData({
                visible: false,
            });
        },
    },
});