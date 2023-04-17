// app.js

//是否使用mock数据
let debug = false;

if (debug) {
    var Mock = require("./utils/mock.mp.js");
    // var Mock = require("./utils/WxMock.js"); 
    Mock.setup({
        timeout: '0-1000'
    })

    // Mock.mock('https://www.tjensoprediction.com:8888/seaice/prediction?year=2023', {
    //     legend: {
    //         data:['prediction', 'mean', 'upper', 'lower', 'obs2022', 'obs2023']
    //     },
    //     dataset: {
    //         source: [
    //             ['month', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             ["prediction", "13.616701126098633", "14.498695373535156", "14.706720352172852", "13.947604179382324", "12.45638656616211", "10.704935073852539", "8.137545585632324", "5.661144256591797", "4.875626087188721", "7.019153118133545", "9.681649208068848", "11.843036651611328"],
    //             ["mean", "13.417181968688965", "14.331096649169922", "14.539737701416016", "13.789073944091797", "12.342271327972412", "10.566046714782715", "7.872669219970703", "5.395510196685791", "4.566888689994812", "6.4302802085876465", "9.29351282119751", "11.744112491607666"],
    //             ["upper", "13.616701126098633", "14.498695373535156", "14.706720352172852", "14.027923583984375", "12.67048454284668", "11.125555992126465", "8.629323959350586", "6.200892925262451", "5.310474872589111", "7.136165618896484", "9.95911979675293", "12.141965866088867"],
    //             ["lower", "13.217662811279297", "14.163497924804688", "14.37275505065918", "13.550224304199219", "12.014058113098145", "10.006537437438965", "7.11601448059082", "4.590127468109131", "3.8233025074005127", "5.724394798278809", "8.62790584564209", "11.346259117126465"],
    //             ["obs2022", "13.877", "14.614", "14.585999999999999", "14.042", "12.879000000000001", "10.855", "8.248", "5.995", "4.869", "6.6129999999999995", "9.712", "11.917"],
    //             ["obs2023", "13.345999999999998", "14.145999999999999",],
    //         ]
    //     },
    //     xAxis: {
    //         type: 'category'
    //     },
    //     yAxis: {
    //         gridIndex: 0,
    //         scale: true
    //     },
    //     series: [{
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row'
    //         }
    //     ]
    // })

    // Mock.mock('https://www.tjensoprediction.com:8888/seaice/prediction?year=2022', {
    //     legend: {
    //         data:['prediction', 'mean', 'upper', 'lower', 'obs2022', 'obs2023']
    //     },
    //     dataset: {
    //         source: [
    //             ['month', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    //             ["prediction", "23.616701126098633", "34.498695373535156", "14.706720352172852", "23.947604179382324", "12.45638656616211", "10.704935073852539", "8.137545585632324", "5.661144256591797", "4.875626087188721", "7.019153118133545", "9.681649208068848", "11.843036651611328"],
    //             ["mean", "13.417181968688965", "14.331096649169922", "14.539737701416016", "13.789073944091797", "12.342271327972412", "10.566046714782715", "7.872669219970703", "5.395510196685791", "4.566888689994812", "6.4302802085876465", "9.29351282119751", "11.744112491607666"],
    //             ["upper", "13.616701126098633", "14.498695373535156", "14.706720352172852", "14.027923583984375", "12.67048454284668", "11.125555992126465", "8.629323959350586", "6.200892925262451", "5.310474872589111", "7.136165618896484", "9.95911979675293", "12.141965866088867"],
    //             ["lower", "13.217662811279297", "14.163497924804688", "14.37275505065918", "13.550224304199219", "12.014058113098145", "10.006537437438965", "7.11601448059082", "4.590127468109131", "3.8233025074005127", "5.724394798278809", "8.62790584564209", "11.346259117126465"],
    //             ["obs2022", "13.877", "14.614", "14.585999999999999", "14.042", "12.879000000000001", "10.855", "8.248", "5.995", "4.869", "6.6129999999999995", "9.712", "11.917"],
    //             ["obs2023", "13.345999999999998", "14.145999999999999",],
    //         ]
    //     },
    //     xAxis: {
    //         type: 'category'
    //     },
    //     yAxis: {
    //         gridIndex: 0,
    //         scale: true
    //     },
    //     series: [{
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         },
    //         {
    //             type: 'line',
    //             smooth: true,
    //             seriesLayoutBy: 'row'
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=1', {
    //     xAxis: {
    //         type: 'category'
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年2月起报', '-0.823661116', '-0.997081641', '-0.872597725', -0.983279767, -0.556404426, -0.821955669, -0.920772443, -1.231792183, -0.729954579, -0.936544915, -0.691170481, -0.304903927],
    //             ['2022年3月起报', , -0.850134677, -0.917386553, -0.663000686, -0.536413048, -0.894206038, -1.052877711, -0.698896905, -0.769686608, -0.699584475, -0.887611391, -0.549944028],
    //             ['2022年4月起报', , , -1.040043898, -0.656195928, -0.667533278, -1.158226184, -0.90407712, -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
    //             ['2022年5月起报', , , , -0.867547442, -0.767293189, -1.155461761, -0.985493795, -0.931792011, -0.601212352, -0.71990796, -0.997306685, -0.228545647],
    //             ['2022年6月起报', , , , , -0.665545088, -1.076716401, -1.176355819, -0.984848736, -0.726192888, -0.648305165, -1.290717006, -0.340058091],
    //             ['2022年7月起报', , , , , , -1.064231837, -1.128260227, -0.711953526, -0.498299358, -0.507392376, -1.07958098, -0.327465391],
    //             ['2022年8月起报', , , , , , , -1.076927188, -0.695359631, -0.672749188, -0.838106129, -0.590366996, -0.32089776],
    //             ['2022年9月起报', , , , , , , , -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
    //             ['2022年10月起报', , , , , , , , , -0.869055652, -0.630067907, -0.735757872, -0.370268908],
    //             ['2022年11月起报', , , , , , , , , , -0.648014222, -0.788139076, -0.287766331],
    //             ['2022年12月起报', , , , , , , , , , , -0.657669256, -0.274217811],
    //             ['2023年1月起报', , , , , , , , , , , , -0.5325],
    //             ['气候中心Nino3.4指数记录', -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         }, {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     lineStyle: {
    //                         width: 2,
    //                         type: 'dotted' //'dotted'虚线 'solid'实线
    //                     }
    //                 }
    //             },
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //             itemStyle: {
    //                 normal: {
    //                     color: 'black',
    //                     lineStyle: {
    //                         width: 4,
    //                         type: 'solid', //'dotted'虚线 'solid'实线
    //                         color: 'black'
    //                     }
    //                 }
    //             },
    //         },
    //     ]
    // })


    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=2', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年2月起报误差', 0.346338884, 0.032918359, 0.267402275, 0.253279767, 0.053595574, 0.208044331, 0.109227557, 0.471792183, 0.020045421, 0.046544915, 0.001170481, 0.015096073],
    //             ['2022年2月起报', -0.823661116, -0.997081641, -0.872597725, -0.983279767, -0.556404426, -0.821955669, -0.920772443, -1.231792183, -0.729954579, -0.936544915, -0.691170481, -0.304903927],
    //             ['气候中心Nino3.4指数记录', -1.17, -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=3', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年3月起报误差', 0.179865323, 0.222613447, 0.066999314, 0.073586952, 0.135793962, 0.022877711, 0.061103095, 0.019686608, 0.190415525, 0.197611391, 0.229944028],
    //             ['2022年3月起报',-0.850134677, -0.917386553, -0.663000686, -0.536413048, -0.894206038, -1.052877711, -0.698896905, -0.769686608, -0.699584475, -0.887611391, -0.549944028],
    //             ['气候中心Nino3.4指数记录', -1.03, -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=4', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年4月起报误差', , , 0.099956102, 0.073804072, 0.057533278, 0.128226184, 0.12592288, 0.161247975, 0.278251389, 0.091671289, 0.198111761, 0.188784027],
    //             ['2022年4月起报', , , -1.040043898, -0.656195928, -0.667533278, -1.158226184, -0.90407712, -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
    //             ['气候中心Nino3.4指数记录', , , -1.14, -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=5', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年5月起报误差', , , , 0.137547442, 0.157293189, 0.125461761, 0.044506205, 0.171792011, 0.148787648, 0.17009204, 0.307306685, 0.091454353],
    //             ['2022年5月起报', , , , -0.867547442, -0.767293189, -1.155461761, -0.985493795, -0.931792011, -0.601212352, -0.71990796, -0.997306685, -0.228545647],
    //             ['气候中心Nino3.4指数记录', , , , -0.73, -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=6', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年6月起报误差', , , , , 0.055545088, 0.046716401, 0.146355819, 0.224848736, 0.023807112, 0.241694835, 0.600717006, 0.020058091],
    //             ['2022年6月起报', , , , , -0.665545088, -1.076716401, -1.176355819, -0.984848736, -0.726192888, -0.648305165, -1.290717006, -0.340058091],
    //             ['气候中心Nino3.4指数记录', , , , , -0.61, -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=7', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年7月起报误差', , , , , , 0.034231837, 0.098260227, 0.048046474, 0.251700642, 0.382607624, 0.38958098, 0.007465391],
    //             ['2022年7月起报', , , , , , -1.064231837, -1.128260227, -0.711953526, -0.498299358, -0.507392376, -1.07958098, -0.327465391],
    //             ['气候中心Nino3.4指数记录', , , , , , -1.03, -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=8', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年8月起报误差', , , , , , , 0.046927188, 0.064640369, 0.077250812, 0.051893871, 0.099633004, 0.00089776],
    //             ['2022年8月起报', , , , , , , -1.076927188, -0.695359631, -0.672749188, -0.838106129, -0.590366996, -0.32089776],
    //             ['气候中心Nino3.4指数记录', , , , , , , -1.03, -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=9', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年9月起报误差', , , , , , , , 0.161247975, 0.278251389, 0.091671289, 0.198111761, 0.188784027],
    //             ['2022年9月起报', , , , , , , , -0.921247975, -1.028251389, -0.981671289, -0.888111761, -0.508784027],
    //             ['气候中心Nino3.4指数记录', , , , , , , , -0.76, -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=10', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年10月起报误差', , , , , , , , , 0.119055652, 0.259932093, 0.045757872, 0.050268908],
    //             ['2022年10月起报', , , , , , , , , -0.869055652, -0.630067907, -0.735757872, -0.370268908],
    //             ['气候中心Nino3.4指数记录', , , , , , , , , -0.75, -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=11', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年11月起报误差', , , , , , , , , , 0.241985778, 0.098139076, 0.032233669],
    //             ['2022年11月起报', , , , , , , , , , -0.648014222, -0.788139076, -0.287766331],
    //             ['气候中心Nino3.4指数记录', , , , , , , , , , -0.89, -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=12', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2022年12月起报误差', , , , , , , , , , , 0.032330744, 0.045782189],
    //             ['2022年12月起报', , , , , , , , , , , -0.657669256, -0.274217811],
    //             ['气候中心Nino3.4指数记录', , , , , , , , , , , -0.69, -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=2&year=2022&month=1', {
    //     xAxis: {
    //         type: 'category',
    //     },
    //     legend: {},

    //     yAxis: {
    //         type: 'value'
    //     },
    //     dataset: {
    //         source: [
    //             ['month', "Mar-22", "Apr-22", "May-22", "Jun-22", "Jul-22", "Aug-22", "Sep-22", "Oct-22", "Nov-22", "Dec-22", "Jan-23", "Feb-23"],
    //             ['2023年1月起报误差', , , , , , , , , , , , 0.2125],
    //             ['2023年1月起报', , , , , , , , , , , , -0.5325],
    //             ['气候中心Nino3.4指数记录', , , , , , , , , , , , -0.32]
    //         ]
    //     },
    //     series: [{
    //             type: 'bar',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         },
    //         {
    //             type: 'line',
    //             seriesLayoutBy: 'row',
    //         }
    //     ]
    // })



    // Mock.mock('https://tjseai307.com/chartdata?chart=3', {
    //     dataset: [{
    //             source: [
    //                 [0.346338884, 0.032918359, 0.267402275, 0.253279767, 0.053595574, 0.208044331, 0.109227557, 0.471792183, 0.020045421, 0.046544915, 0.001170481, 0.015096073]
    //             ]
    //         }, {
    //             source: [
    //                 [0.179865323, 0.222613447, 0.066999314, 0.073586952, 0.135793962, 0.022877711, 0.061103095, 0.019686608, 0.190415525, 0.197611391, 0.229944028]
    //             ]
    //         }, {
    //             source: [
    //                 [0.099956102, 0.073804072, 0.057533278, 0.128226184, 0.12592288, 0.161247975, 0.278251389, 0.091671289, 0.198111761, 0.188784027]
    //             ]
    //         }, {
    //             source: [
    //                 [0.137547442, 0.157293189, 0.125461761, 0.044506205, 0.171792011, 0.148787648, 0.17009204, 0.307306685, 0.091454353]
    //             ]
    //         }, {
    //             source: [
    //                 [0.055545088, 0.046716401, 0.146355819, 0.224848736, 0.023807112, 0.241694835, 0.600717006, 0.020058091]
    //             ]
    //         }, {
    //             source: [
    //                 [0.034231837, 0.098260227, 0.048046474, 0.251700642, 0.382607624, 0.38958098, 0.007465391]
    //             ]
    //         }, {
    //             source: [
    //                 [0.046927188, 0.064640369, 0.077250812, 0.051893871, 0.099633004, 0.00089776]
    //             ]
    //         }, {
    //             source: [
    //                 [0.161247975, 0.278251389, 0.091671289, 0.198111761, 0.188784027]
    //             ]
    //         }, {
    //             source: [
    //                 [0.119055652, 0.259932093, 0.045757872, 0.050268908]
    //             ]
    //         }, {
    //             source: [
    //                 [0.241985778, 0.098139076, 0.032233669]
    //             ]
    //         }, {
    //             source: [
    //                 [0.032330744, 0.045782189]
    //             ]
    //         }, {
    //             source: [
    //                 [0.2125]
    //             ]
    //         },
    //         {
    //             fromDatasetIndex: 0,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 1,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 2,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 3,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 4,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 5,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 6,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 7,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 8,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 9,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 10,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         },
    //         {
    //             fromDatasetIndex: 11,
    //             transform: {
    //                 type: 'boxplot'
    //             }
    //         }
    //     ],
    //     xAxis: {
    //         type: 'category',
    //         axisLabel: {

    //         }
    //     },
    //     yAxis: {
    //         type: 'value',
    //     },

    //     series: [{
    //             name: '2022年2月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 12
    //         },
    //         {
    //             name: '2022年3月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 13
    //         },
    //         {
    //             name: '2022年4月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 14
    //         },
    //         {
    //             name: '2022年5月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 15
    //         },
    //         {
    //             name: '2022年6月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 16
    //         },
    //         {
    //             name: '2022年7月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 17
    //         },
    //         {
    //             name: '2022年8月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 18
    //         },
    //         {
    //             name: '2022年9月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 19
    //         },
    //         {
    //             name: '2022年10月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 20
    //         },
    //         {
    //             name: '2022年11月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 21
    //         },
    //         {
    //             name: '2022年12月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 22
    //         },
    //         {
    //             name: '2023年1月起报预报误差',
    //             type: 'boxplot',
    //             datasetIndex: 23
    //         }
    //     ]
    // })

    // Mock.mock('https://tjseai307.com/chartdata?chart=4', {
    //     xAxis: {
    //         type: 'category',
    //         data: ['2022年2月起报结果', '2022年3月起报结果', '2022年4月起报结果', '2022年5月起报结果', '2022年6月起报结果', '2022年7月起报结果', '2022年8月起报结果', '2022年9月起报结果', '2022年10月起报结果', '2022年11月起报结果', '2022年12月起报结果','2023年1月起报结果'],
    //         axisLabel: {
    //             rotate: 50
    //         }
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         data: [0.619805025,
    //             0.783585098,
    //             0.816103165,
    //             0.790959434,
    //             0.657817441,
    //             0.660935123,
    //             0.976632799,
    //             0.949775002,
    //             0.731504508,
    //             0.809233495,
    //             1,
    //             ],
    //         type: 'line'
    //     }]
    // })

    // Mock.mock('https://tjseai307.com/enso/findByYearAndMonth?year=2023&month=2', {
    //     xAxis: {
    //         data: ["Feb-23", "Mar-23", "Apr-23", "May-23", "Jun-23", "Jul-23", "Aug-23", "Sep-23", "Oct-23", "Nov-23", "Dec-23", "Jan-24", "Feb-24", "Mar-24", "Apr-24", "May-24", "Jun-24", "Jul-24"]
    //     },
    //     series: [{
    //             name: 'ENSO-Cross',
    //             data: [-0.44, -0.29, -0.15, 0.23, 0.46, 0.70, 0.94, 1.12, 1.14, 1.52, 1.69, 1.81, 1.70, 1.42, 0.94, 0.67, 0.37, 0.27],
    //             type: 'line',
    //         },
    //         {
    //             name: 'ENSO-ASC',
    //             data: [-0.25, 0.34, 0.41, 0.45, 0.19, -0.22, -0.44, -0.67, -0.32, 0.14, 0.41, 1.5, 1.33, 0.97, 0.53, 0.41, 0.18, -0.76],
    //             type: 'line',
    //         },
    //         {
    //             name: 'ENSO-GTC',
    //             data: [-0.60, -0.33, -0.06, 0.13, 0.18, 0.12, 0.09, 0.12, 0.16, 0.33, 0.14, 0.29, 0.14, -0.04, -0.17, 0.01, -0.05, -0.12],
    //             type: 'line'
    //         },
    //         {
    //             name: 'ENSO-MC',
    //             data: [-0.84, -1.11, -1.45, -1.34, -1.10, -0.69, -0.28, -0.13, -0.11, -0.12, -0.01, 0.06, -0.17, -0.71, -1.25, -1.20, -0.94, -0.57],
    //             type: 'line',
    //         }, {
    //             name: 'EnsembleForecast',
    //             data: [-0.53, -0.35, -0.31, -0.13, -0.07, -0.02, 0.08, 0.11, 0.22, 0.47, 0.56, 0.92, 0.75, 0.41, 0.01, -0.03, -0.11, -0.29],
    //             type: 'line'
    //         }
    //     ]
    // })


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
        baseUrl: 'https://www.tjensoprediction.com:8888'
    }
})