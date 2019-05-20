//03 mvc介绍 点餐小系统mvc项目开发
//models/file.js
var fs = require("fs");
var baseurl = "./data";
//保存
exports.save = function(shoujihao, data, callback) {
    //写入文件，
    //fs.writeFile()表示覆盖文件
    //fs.appendFile()表示追加文件
    fs.writeFile(baseurl + "/" + shoujihao + ".txt", data, callback)    
    //old version use append
    //fs.appendFile(fileurl, data, callback)
}
/*
//这个函数的功能就是从文件夹中获得所有文件名
exports.getAllFileName = function(callback){
    //readdir是fs 的API， 可以读取一个文件夹中的所有文件的文件名到一个数组中去
fs.readdir(baseurl, function(err,filenameArray){
    if(err){
        throw new Error("读取文件清单错误！");
        //console.log(err);
        return;
    }
    //因为这里是异步函数，所以不能直接return， 我们通过callback function来执行
    callback(filenameArray);
})
}
*/
exports.getAllFileName = function(callback){
    //readdir是fs 的API， 可以读取一个文件夹中的所有文件的文件名到一个数组中去
fs.readdir(baseurl, function(err,filenameArray){
    if(err){
        throw new Error("读取文件清单错误！");
        //console.log(err);
        return;
    }
    //准备一个数组， 这个数组里面存放不加上“.txt”后缀的文件名
    var result = [];
    //.txt占了4位，
    //所以截取字符串不包括最后4位
    for(var i = 0; i < filenameArray.length; i++){
        result.push(filenameArray[i].substring(0, filenameArray[i].length - 4));
    }
    //因为这里是异步函数，所以不能直接return， 我们通过callback function来执行
    callback(result);
})
}
//读取文件内容, 内容通过callback回传出来
exports.read = function(shoujihao, callback){
    fs.readFile(baseurl + "/" + shoujihao + ".txt", function(err, data){
    if(err){
        //文件不存在
        callback(-1);
        console.log("File not exist")
        return;
    }
    callback(data.toString());
    });
    }
/*
//单元测试
//读取文件内容, 内容通过callback回传出来
var read = exports.read = function(shoujihao, callback){
fs.readFile(baseurl + "/" + shoujihao + ".txt", function(err, data){
if(err){
    //文件不存在
    callback(-1);
    console.log("File not exist")
    return;
}
callback(data.toString());
});
}
read("45", function(cai){
    console.log(cai);
})
*/
/*
//获取文件名，但是不包括.txt
var getAllFileName = exports.getAllFileName = function(callback){
    //readdir是fs 的API， 可以读取一个文件夹中的所有文件的文件名到一个数组中去
fs.readdir(baseurl, function(err,filenameArray){
    if(err){
        throw new Error("读取文件清单错误！");
        //console.log(err);
        return;
    }
    //准备一个数组， 这个数组里面存放不加上“.txt”后缀的文件名
    var result = [];
    //.txt占了4位，
    //所以截取字符串不包括最后4位
    for(var i = 0; i < filenameArray.length; i++){
        result.push(filenameArray[i].substring(0, filenameArray[i].length - 4));
    }
    //因为这里是异步函数，所以不能直接return， 我们通过callback function来执行
    callback(filenameArray);
})
}
getAllFileName(function(arr){
    console.log(arr);
})
*/
/*
//测试，用callback返回array
getAllFileName(function(array){
    console.log(array);
});
*/
/*
//进行单元测试
//
//用于测试这个函数是否正确，然后在决定是否继续前进 
var getAllFileName = exports.getAllFileName = function(){
    fs.readdir(baseurl, function(err,filenameArray){
        console.log(filenameArray);
    })
    }
getAllFileName();
*/
