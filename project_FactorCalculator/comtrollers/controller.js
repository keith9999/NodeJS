//24 mvc项目的演示开
//contorlers/contorler.js
var math = require("../models/math.js");
var file = require("../models/file");
exports.showIndex = function (req, res) {
    res.render("index", {
    })
}
exports.showResult = function (req, res) {
    //得到数字， 比如http://localhost:3000/123
    //得到了123
    var number = req.params.number;
    //记录时间
     var T1 = new Date();
    //先命令文件读取，这是一个异步函数
    file.read(number, function (resultsArr) {
        //代表这个文件不存在
        if (resultsArr == -1) {
            //命令模型小兵来计算
            //这个是同步函数
            var resultsArr = math.calc(number);
            //然后写入文件
            file.save(number, resultsArr);
        }
        //记录时间T2
        var T2 = new Date();
        //呈递视图
        res.render("result", {
            "number": number,
            "resultsArr": resultsArr,
            "during" : T2 - T1
        });
    })
}