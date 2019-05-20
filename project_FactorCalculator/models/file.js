//24 mvc项目的演示开
//modles/file.js
//file.js
var fs = require("fs");

//保存方法
exports.save = function(number, resultsArr){
    fs.writeFile("./data/" + number + ".txt", JSON.stringify(resultsArr));
}

//读取方法
exports.read = function(number, callback){
    fs.readFile("./data." + number + ".txt", function(err, data){
        if(err){
            callback(-1);
            return;
        }
        callback(JSON.parse(data));
    })
}
