//24 mvc项目的演示开
//app.js
var express = require("express");
var app = express();
var controller = require("./comtrollers/controller.js");

app.set("view engine", "ejs");

//路由表，中间件
app.get("/", controller.showIndex);
app.get("/:number", controller.showResult);

//配置静态资源文件
//这样public中的文件就可以读取了
app.use(express.static("public"));
app.listen(3004);
console.log("Server run on 3004");