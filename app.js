// app.js

var Mock = require("./utils/mock.mp.js"); 

Mock.mock('https://xxxtest.com/users',{
    "code":200,
    "data|1-20":[
        {
            "name":function() {
              return Mock.Random.cname()
            },
            "lastLogin":function() {
              return Mock.Random.datetime()
            }
        }
    ]
})
Mock.mock('https://xxxtest.com/user/delete',{
     "code":200,
     "message":"s删除成功"
})

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
