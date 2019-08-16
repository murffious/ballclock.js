var clock = require("./clock")

// 30
// 45
// 0

// let clocksReport = await Promise.resolve(clock(users));


var clocksReport = new clock()
clocksReport.initialize();