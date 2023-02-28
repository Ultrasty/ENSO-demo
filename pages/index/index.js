Component({

    options: {
        styleIsolation: 'apply-shared',
    },
    
    data: {
      value: 'predict',
      list: [
        { value: 'predict', label: '预测' },
        { value: 'analyse', label: '分析' }
      ],
    },
  
    methods: {
      onChange(e) {
        this.setData({
          value: e.detail.value,
        });
      },
    },
  });
  