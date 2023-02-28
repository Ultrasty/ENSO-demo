Component({

    options: {
        styleIsolation: 'apply-shared',
    },

    data: {
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
    },
});