// app.js

//是否使用mock数据
let debug = true;

if (debug) {
    var Mock = require("./utils/mock.mp.js");
    // var Mock = require("./utils/WxMock.js"); 
    Mock.setup({
        timeout: '0-1000'
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=1', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年1月起报结果",
                data: [-1.174209315, -0.993191958, -0.19134674, -0.188610001, 0.105001105, -0.181135163, -0.649433319, -1.039655168, -1.023838987, -0.643442209, -0.706740268, -1.201603068, -1.320892477],
                type: 'line'
            },
            {
                name: "2022年2月起报结果",
                data: [, -0.665512248, -0.997081641, -0.372597725, -0.013279767, -0.056404426, -0.421955669, -0.920772443, -1.231792183, -0.929954579, -1.036544915, -1.311704813, -1.104903927],
                type: 'line'
            },
            {
                name: "2022年3月起报结果",
                data: [, , -0.850134677, -0.217386553, 0.063000686, 0.036413048, -0.394206038, -1.052877711, -1.298896905, -0.769686608, -0.699584475, -0.887611391, -0.939944028],
                type: 'line'
            },
            {
                "name": "2022年4月起报结果",
                data: [, , , -0.740043898, 0.056195928, 0.267533278, -0.158226184, -0.90407712, -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
                type: 'line'
            },
            {
                "name": "2022年10月起报结果",
                data: [, , , , , , , , , -0.668195698, -0.737339589, -0.92648147, -0.35271381],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [-0.7, -0.81, -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=1', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录", "2022年1月起报预报误差", "2022年2月起报预报误差", "2022年3月起报预报误差", "2022年4月起报预报误差", "2022年10月起报预报误差"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年1月起报结果",
                data: [-1.174209315, -0.993191958, -0.19134674, -0.188610001, 0.105001105, -0.181135163, -0.649433319, -1.039655168, -1.023838987, -0.643442209, -0.706740268, -1.201603068, -1.320892477],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [-0.7, -0.81, -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            },
            {
                "name": "2022年1月起报预报误差",
                data: [0.474209315, 0.183191958, 0.97865326, 0.841389999, 1.245001105, 0.548864837, 0.039433319, 0.009655168, 0.006161013, 0.116557791, 0.043259732, 0.311603068, 0.630892477],
                type: 'bar'
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=2', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录", "2022年1月起报预报误差", "2022年2月起报预报误差", "2022年3月起报预报误差", "2022年4月起报预报误差", "2022年10月起报预报误差"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年2月起报结果",
                data: [, -0.665512248, -0.997081641, -0.372597725, -0.013279767, -0.056404426, -0.421955669, -0.920772443, -1.231792183, -0.929954579, -1.036544915, -1.311704813, -1.104903927],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [, -0.81, -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            },
            {
                "name": "2022年2月起报预报误差",
                data: [, 0.144487752, 0.172918359, 0.657402275, 1.126720233, 0.673595574, 0.188044331, 0.109227557, 0.201792183, 0.169954579, 0.286544915, 0.421704813, 0.414903927],
                type: 'bar'
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=3', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录", "2022年1月起报预报误差", "2022年2月起报预报误差", "2022年3月起报预报误差", "2022年4月起报预报误差", "2022年10月起报预报误差"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年3月起报结果",
                data: [, , -0.850134677, -0.217386553, 0.063000686, 0.036413048, -0.394206038, -1.052877711, -1.298896905, -0.769686608, -0.699584475, -0.887611391, -0.939944028],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [, , -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            },
            {
                "name": "2022年3月起报预报误差",
                data: [, , 0.319865323, 0.812613447, 1.203000686, 0.766413048, 0.215793962, 0.022877711, 0.268896905, 0.009686608, 0.050415525, 0.002388609, 0.249944028],
                type: 'bar'
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=4', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录", "2022年1月起报预报误差", "2022年2月起报预报误差", "2022年3月起报预报误差", "2022年4月起报预报误差", "2022年10月起报预报误差"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年4月起报结果",
                data: [, , , -0.740043898, 0.056195928, 0.267533278, -0.158226184, -0.90407712, -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [, , , -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            },
            {
                "name": "2022年4月起报预报误差",
                data: [, , , 0.289956102, 1.196195928, 0.997533278, 0.451773816, 0.12592288, 0.108752025, 0.268251389, 0.231671289, 0.001888239, 0.181215973],
                type: 'bar'
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=10', {
        xAxis: {
            type: 'category',
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"]
        },
        legend: {
            data: ["2022年1月起报结果", "2022年2月起报结果", "2022年3月起报结果", "2022年4月起报结果", "2022年10月起报结果", "气候中心Niño3.4指数记录", "2022年1月起报预报误差", "2022年2月起报预报误差", "2022年3月起报预报误差", "2022年4月起报预报误差", "2022年10月起报预报误差"]
        },

        yAxis: {
            type: 'value'
        },
        series: [{
                name: "2022年10月起报结果",
                data: [, , , , , , , , , -0.668195698, -0.737339589, -0.92648147, -0.35271381, 0.908919254],
                type: 'line'
            },
            {
                "name": "气候中心Niño3.4指数记录",
                data: [, , , , , , , , , -0.76, -0.75, -0.89, -0.69],
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 2,
                            type: 'dotted' //'dotted'虚线 'solid'实线
                        }
                    }
                },
            },
            {
                "name": "2022年10月起报预报误差",
                data: [, , , , , , , , , 0.091804302, 0.012660411, 0.03648147, 0.33728619],
                type: 'bar'
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=3', {
        dataset: [{
                source: [
                    [0.474209315, 0.183191958, 0.97865326, 0.841389999, 1.245001105, 0.548864837, 0.039433319, 0.009655168, 0.006161013, 0.116557791, 0.043259732, 0.311603068, 0.630892477]
                ]
            },
            {
                source: [
                    [0.144487752, 0.172918359, 0.657402275, 1.126720233, 0.673595574, 0.188044331, 0.109227557, 0.201792183, 0.169954579, 0.286544915, 0.421704813, 0.414903927]
                ]
            },
            {
                source: [
                    [0.319865323, 0.812613447, 1.203000686, 0.766413048, 0.215793962, 0.022877711, 0.268896905, 0.009686608, 0.050415525, 0.002388609, 0.249944028]
                ]
            },
            {
                source: [
                    [0.289956102, 1.196195928, 0.997533278, 0.451773816, 0.12592288, 0.108752025, 0.268251389, 0.231671289, 0.001888239, 0.181215973]
                ]
            },
            {
                source: [
                    [0.091804302, 0.012660411, 0.03648147, 0.33728619]
                ]
            },
            {
                fromDatasetIndex: 0,
                transform: {
                    type: 'boxplot'
                }
            },
            {
                fromDatasetIndex: 1,
                transform: {
                    type: 'boxplot'
                }
            },
            {
                fromDatasetIndex: 2,
                transform: {
                    type: 'boxplot'
                }
            },
            {
                fromDatasetIndex: 3,
                transform: {
                    type: 'boxplot'
                }
            },
            {
                fromDatasetIndex: 4,
                transform: {
                    type: 'boxplot'
                }
            }
        ],
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value',
        },

        series: [{
                name: '2022年1月起报预报误差',
                type: 'boxplot',
                datasetIndex: 5
            },
            {
                name: '2022年2月起报预报误差',
                type: 'boxplot',
                datasetIndex: 6
            },
            {
                name: '2022年3月起报预报误差',
                type: 'boxplot',
                datasetIndex: 7
            },
            {
                name: '2022年4月起报预报误差',
                type: 'boxplot',
                datasetIndex: 8
            },
            {
                name: '2022年10月起报预报误差',
                type: 'boxplot',
                datasetIndex: 9
            }
        ]
    })

    Mock.mock('https://tjseai307.com/chartdata?chart=4', {
        xAxis: {
            type: 'category',
            data: ['2022年1月起报结果', '2022年2月起报结果', '2022年3月起报结果', '2022年4月起报结果', '2022年10月起报结果'],
            axisLabel:{
                rotate: 50
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [-0.434853224
                ,-0.001281489
                ,0.075417473
                ,0.142720704
                ,0.908919254
                ],
              type: 'line'
            }
          ]
    })

    Mock.mock('https://tjseai307.com/enso/findByYearAndMonth?year=2022&month=10', {
        xAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        yAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        series: [{
                name: 'ENSO-Cross',
                data: [-0.85, -0.74, -0.60, -0.46, -0.30, -0.19, -0.14, 0.19, 0.59, 0.88, 1.11, 1.27, 1.34, 1.45, 1.55, 1.57, 1.43],
                type: 'line',
            },
            {
                name: 'ENSO-ASC',
                data: [-0.98, -0.67, -0.74, -0.93, -0.35, 0.33, 0.42, 0.48, 0.19, -0.25, -0.49, -0.71, -0.35, 0.05, 0.33, 1.41, 1.28],
                type: 'line',
            }, {
                name: 'ENSO-MC',
                data: [-1.17, -0.96, -0.95, -0.96, -0.61, -0.23, -0.20, -0.10, -0.23, -0.28, -0.28, -0.28, -0.06, 0.20, 0.37, 0.93, 0.80],
                type: 'line',
            }, {
                name: 'EnsembleForecast',
                data: [-0.92, -0.70, -0.67, -0.69, -0.33, 0.07, 0.14, 0.34, 0.39, 0.32, 0.31, 0.28, 0.49, 0.75, 0.94, 1.49, 1.36],
                type: 'line',
            }
        ]
    })


    Mock.mock(/https:\/\/tjseai307\.com\/enso\/findByYearAndMonth\?year=2022&month=[1-12]*/, {
        xAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        yAxis: {
            data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
        },
        series: [{
                name: 'ENSO-Cross',
                'data|17': [function () {
                    return Mock.Random.float(-0.5, 0.5)
                }],
                type: 'line',
            },
            {
                name: 'ENSO-ASC',
                'data|17': [function () {
                    return Mock.Random.float(0.5, 1)
                }],
                type: 'line',
            }, {
                name: 'ENSO-MC',
                'data|17': [function () {
                    return Mock.Random.float(1, 1.5)
                }],
                type: 'line',
            }, {
                name: 'EnsembleForecast',
                'data|17': [function () {
                    return Mock.Random.float(-1.5, -1)
                }],
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