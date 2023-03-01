Component({

    options: {
        styleIsolation: 'apply-shared',
    },

    data: {
        start:'2022-01',
        end:'2022-12',
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