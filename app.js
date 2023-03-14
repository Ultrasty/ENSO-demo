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
            type: 'category'
        },
        yAxis: {
            type: 'value'
        },
        dataset: {
            source: [
                ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
                ['2022年2月起报', -0.823661116, -0.997081641, -0.872597725, -0.983279767, -0.556404426, -0.821955669, -0.920772443, -1.231792183, -0.729954579, -0.936544915, -0.691170481, -0.304903927],
                ['2022年3月起报', , -0.850134677, -0.917386553, -0.663000686, -0.536413048, -0.894206038, -1.052877711, -0.698896905, -0.769686608, -0.699584475, -0.887611391, -0.549944028],
                ['2022年4月起报', , , -1.040043898, -0.656195928, -0.667533278, -1.158226184, -0.90407712, -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
                ['2022年5月起报', , , , -0.867547442, -0.767293189, -1.155461761, -0.985493795, -0.931792011, -0.601212352, -0.71990796, -0.997306685, -0.228545647],
                ['2022年6月起报', , , , , -0.665545088, -1.076716401, -1.176355819, -0.984848736, -0.726192888, -0.648305165, -1.290717006, -0.340058091],
                ['2022年7月起报', , , , , , -1.064231837, -1.128260227, -0.711953526, -0.498299358, -0.507392376, -1.07958098, -0.327465391],
                ['2022年8月起报', , , , , , , -1.076927188, -0.695359631, -0.672749188, -0.838106129, -0.590366996, -0.32089776],
                ['2022年9月起报', , , , , , , , -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
                ['2022年10月起报', , , , , , , , , -0.869055652, -0.630067907, -0.735757872, -0.370268908],
                ['2022年11月起报', , , , , , , , , , -0.648014222, -0.788139076, -0.287766331],
                ['2022年12月起报', , , , , , , , , , , -0.657669256, -0.274217811],
                ['2023年1月起报', , , , , , , , , , , , -0.5325],
                ['气候中心Nino3.4指数记录',-1.17,-1.03,-1.14,-0.73,-0.61,-1.03,-1.03,-0.76,-0.75,-0.89,-0.69,-0.32]
            ]
        },
        series: [ {
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },{
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            }, 
        },
        {
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle:{
                normal:{
                    color : 'black',
                    lineStyle:{
                        width:4,
                        type:'solid',  //'dotted'虚线 'solid'实线
                        color : 'black'
                    }
                }
            }, 
        },
        ]
    })


    Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=2', {
        xAxis: {
            type: 'category',
        },
        legend: {},

        yAxis: {
            type: 'value'
        },
        dataset:{
            source:[
                ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
                ['2022年2月起报误差',0.346338884,0.032918359,0.267402275,0.253279767,0.053595574,0.208044331,0.109227557,0.471792183,0.020045421,0.046544915,0.001170481,0.015096073],
                ['2022年2月起报',-0.823661116,-0.997081641,-0.872597725,-0.983279767,-0.556404426,-0.821955669,-0.920772443,-1.231792183,-0.729954579,-0.936544915,-0.691170481,-0.304903927],
                ['气候中心Nino3.4指数记录',-1.17,-1.03,-1.14,-0.73,-0.61,-1.03,-1.03,-0.76,-0.75,-0.89,-0.69,-0.32]
            ]
        },
        series: [
            {
                type:'bar',
                seriesLayoutBy: 'row',
            },
            {
                type:'line',
                seriesLayoutBy: 'row',
            },
            {
                type:'line',
                seriesLayoutBy: 'row',
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
            axisLabel: {
                rotate: 50
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [-0.434853224, -0.001281489, 0.075417473, 0.142720704, 0.908919254],
            type: 'line'
        }]
    })

    Mock.mock('https://tjseai307.com/enso/findByYearAndMonth?year=2023&month=2', {
        xAxis: {
            data: ["Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24", "Mar-24", "Apr-24", "May-24", "Jun-24", "Jul-24"]
        },
        series: [{
                name: 'ENSO-Cross',
                data: [-0.44, -0.29, -0.15, 0.23, 0.46, 0.70, 0.94, 1.12, 1.14, 1.52, 1.69, 1.81, 1.70, 1.42, 0.94, 0.67, 0.37, 0.27],
                type: 'line',
            },
            {
                name: 'ENSO-ASC',
                data: [-0.25, 0.34, 0.41, 0.45, 0.19, -0.22, -0.44, -0.67, -0.32, 0.14, 0.41, 1.5, 1.33, 0.97, 0.53, 0.41, 0.18, -0.76],
                type: 'line',
            },
            {
                name: 'ENSO-GTC',
                data: [-0.60, -0.33, -0.06, 0.13, 0.18, 0.12, 0.09, 0.12, 0.16, 0.33, 0.14, 0.29, 0.14, -0.04, -0.17, 0.01, -0.05, -0.12],
                type: 'line'
            },
            {
                name: 'ENSO-MC',
                data: [-0.84, -1.11, -1.45, -1.34, -1.10, -0.69, -0.28, -0.13, -0.11, -0.12, -0.01, 0.06, -0.17, -0.71, -1.25, -1.20, -0.94, -0.57],
                type: 'line',
            }, {
                name: 'EnsembleForecast',
                data: [-0.53, -0.35, -0.31, -0.13, -0.07, -0.02, 0.08, 0.11, 0.22, 0.47, 0.56, 0.92, 0.75, 0.41, 0.01, -0.03, -0.11, -0.29],
                type: 'line'
            }
        ]
    })


    // Mock.mock(/https:\/\/tjseai307\.com\/enso\/findByYearAndMonth\?year=2023&month=[1-12]*/, {
    //     xAxis: {
    //         data: ["Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24"]
    //     },
    //     series: [{
    //             name: 'ENSO-Cross',
    //             'data|17': [function () {
    //                 return Mock.Random.float(-0.5, 0.5)
    //             }],
    //             type: 'line',
    //         },
    //         {
    //             name: 'ENSO-ASC',
    //             'data|17': [function () {
    //                 return Mock.Random.float(0.5, 1)
    //             }],
    //             type: 'line',
    //         }, {
    //             name: 'ENSO-MC',
    //             'data|17': [function () {
    //                 return Mock.Random.float(1, 1.5)
    //             }],
    //             type: 'line',
    //         }, {
    //             name: 'EnsembleForecast',
    //             'data|17': [function () {
    //                 return Mock.Random.float(-1.5, -1)
    //             }],
    //             type: 'line',
    //         }
    //     ]
    // })
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

    }
})