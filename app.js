// app.js

//是否使用mock数据
let debug = true;

if(debug){
    var Mock = require("./utils/mock.mp.js"); 
    // var Mock = require("./utils/WxMock.js"); 
    Mock.setup( { timeout: 1500 } )
    
    
    Mock.mock('https://tjseai307.com/enso/findByYearAndMonth?year=2022&month=9',{
        xAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        yAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        series: [{
                name: 'ENSO-Cross',
                data: [1.85, 0.74, -0.60, -0.46, -0.30, -0.19, -0.14, 0.19, 0.59, 0.88, 1.11, 1.27, 1.34, 1.45, 1.55, 1.57, 1.43],
                type: 'line',
            },
            {
                name: 'ENSO-ASC',
                data: [1.98, 0.67, -0.74, -0.93, -0.35, 0.33, 0.42, 0.48, 0.19, -0.25, -0.49, -0.71, -0.35, 0.05, 0.33, 1.41, 1.28],
                type: 'line',
            }, {
                name: 'ENSO-MC',
                data: [2.17, 0.96, -0.95, -0.96, -0.61, -0.23, -0.20, -0.10, -0.23, -0.28, -0.28, -0.28, -0.06, 0.20, 0.37, 0.93, 0.80],
                type: 'line',
            }, {
                name: 'EnsembleForecast',
                data: [1.92, 0.70, -0.67, -0.69, -0.33, 0.07, 0.14, 0.34, 0.39, 0.32, 0.31, 0.28, 0.49, 0.75, 0.94, 1.49, 1.36],
                type: 'line',
            }
        ]
    })
}


App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    
  }
})
