//app.js
var express = require("express");
var app = express();
//insert module
var admin = require("./routes/admin")
var index = require("./routes/index");

//set middleware
//save() user info
var session = require("express-session");
app.use(session({
    secret: 'keyboard cat',//here can write whatever, this is a string, use to server gengery session signature
    //name:'session_id',//save local cookie's name, default is connect.sid, here can not setting, it is option
    resave: false,//qiangzhi save local cookie name, default is true, suggest set to false
    saveUninitialized: true,//qiangzhi save session which did not init, default is true, suggest set to true
    cookie: { maxAge: 1000 * 60 * 30 },//each action after 30min, then expiry
    rolling: true//each req will qiangzhi set cookie, this will reset cookie expiry time, default is false
    //secure https then can visit cooike
}));

//use ejs template
//it will find from views folder
app.set("view engine", "ejs");

app.use(express.static("./public/"));
app.use('/upload', express.static("./upload/"));
app.use('/', index);
app.use('/admin', admin);


app.listen(3003, '127.0.0.1');
console.log("Server run on 3003");