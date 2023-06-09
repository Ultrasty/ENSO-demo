// app.js

//是否使用mock数据
let debug = true;

if (debug) {
    var Mock = require("./utils/mock.mp.js");
    // var Mock = require("./utils/WxMock.js"); 
    Mock.setup({
        timeout: '0-3000'
    })

    Mock.mock('https://www.tjensoprediction.com:8888/ice/availableyear', {
        citys: [{
                label: '2023',
                value: '2023'
            },
            {
                label: '2024',
                value: '2024'
            }
        ]
    })
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