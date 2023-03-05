Component({
    data: {
        //Collapse 折叠面板 展开的栏的列表
        activeValues: [],
    },
    methods: {
        //用户分析页的Collapse 折叠面板 展开项列表
        handleChange(e) {
            this.setData({
                activeValues: e.detail.value,
            });
        },
    }
})