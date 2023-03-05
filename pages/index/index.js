

Component({
    options: {
        styleIsolation: 'apply-shared',
    },

    //不同组件使用的不能混到一起，必须拆页
    data: {
        
        
        
        
        
        
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
        
    },

    methods: {
        // 底部标签栏
        onChange(e) {
            this.setData({
                value: e.detail.value,
            });
        },
        
        
        
    },
});

