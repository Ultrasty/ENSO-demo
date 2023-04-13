// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img1 :"https://www.tjensoprediction.com/imgs/nesdis-el-nino.jpg",
        img2 :"https://www.tjensoprediction.com/imgs/seaice.jpg",
    },

    gotoPage(e){
        let PageList = ["/pages/enso/index","/pages/seaice/seaice"];
        wx.navigateTo({
          url: PageList[e.target.dataset.index],
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    //转发、分享到朋友圈、收藏时的回调函数
    onShareAppMessage: function (options) {
        return {
            title: '同济大学人工智能＋大气海洋研究团队气候预测与分析'
        }
    },
})