// app.js

//是否使用mock数据
let debug = true;

if (debug) {
    var Mock = require("./utils/mock.mp.js");
    // var Mock = require("./utils/WxMock.js"); 
    Mock.setup({
        timeout: '0-3000'
    })

    Mock.mock("https://www.tjensoprediction.com:8888/enso/predict/description",{
        "2023-02": "于2023年冬季发展为厄尔尼诺事件， Niño 3.4指数峰值为1.06，随后逐渐减弱，于24年4月份过渡为中性状态。",
        "2023-03": "于2023年冬季发展为厄尔尼诺事件， Niño 3.4指数峰值为0.91，随后逐渐减弱，于24年4月份过渡为中性状态。"
    }),
    Mock.mock("https://www.tjensoprediction.com:8888/enso/analyse/description",{
        "chart1": "此处为预测结果汇总折线图。除22年10月-23年1月外，其他月份的预测结果与官方记录差异不大。预测误差较大可能与近年来连续冷（拉尼娜）事件快结束时状态不稳定有关。",
        "chart2": "此处的12副图分别为从2022年2月~2023年1月起报的预测结果、官方记录结果及二者绝对差值图（柱状）",
        "chart3": "此处为不同起报月份的绝对差值分布箱型图。大多数情况下绝对差值较小，除8月起报以外，8月起报结果在今年1月份预测误差较大。",
        "chart4": "此处为不同起报月份的相关性技巧折线图。各相关性系数技巧均超过0.6，平均达到0.75以上。"
    }),
    Mock.mock("https://www.tjensoprediction.com:8888/ice/description?year=2023","2023年9月SIE极小值预测为4.4133，相较于2022年观测偏低，2023年海冰范围预计将比2022年整体偏少。")
}


App({
    onLaunch() {
        // 展示本地存储能力
        // const logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)

        // 登录
        // wx.login({
        //     success: res => {
        //         // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //     }
        // })
    },
    globalData: {
        baseUrl: 'https://www.tjensoprediction.com:8888'
    }
})