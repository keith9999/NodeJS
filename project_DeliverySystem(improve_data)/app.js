//03 mvc介绍 点餐小系统mvc项目开发
//app.js
var express = require("express");
var app = express();
var mainctrl = require("./controllers/mainctrl.js");
//定义模板引擎
app.set("view engine","ejs");
//当有人用post请求访问/baocun的时候做的事情
app.get("/"					 ,mainctrl.showIndex);	//显示首页
app.post("/baocun"			 ,mainctrl.baocun);	//Ajax接口，用于写入txt文件
app.get("/dingdan"			 ,mainctrl.showAlldingdan);	//显示全部订单
app.get("/dingdan/:shoujihao",mainctrl.showOnedingdan);	//显示某一个订单
//将public文件夹静态化出来，此时里面的文件将自动拥有路由
app.use(express.static("./public/"));
app.listen(3002);
console.log("Server runing on 3002")