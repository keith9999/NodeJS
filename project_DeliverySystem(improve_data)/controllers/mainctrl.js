//03 mvc介绍 点餐小系统mvc项目开发
//controllers/mainctrl.js
var formidable = require("formidable");
var file = require("../models/file.js")
//显示首页
exports.showIndex = function(req,res){
res.render("index.ejs");
}
//向外暴露中间件
//只要有req， res就是中间件
//这个就是Ajax接口
exports.baocun = function(req,res){
    var form = new formidable.IncomingForm(); 
 //识别表单，用的就是formidable插件
    form.parse(req, function(err, fields){
        var shoujihao = fields.shoujihao;
        var cai = fields.cai;
        file.save(shoujihao, cai, function(err){
            if(err){
                res.send("-1");
            }else{
                res.send("1");
            }
        });
    });    
}
//暴露中间件
exports.showAlldingdan = function(req, res){
    //命令file模型去读取文件夹中的所有手机号， 呈递给视图
    file.getAllFileName(function(array){
        console.log(array);
        //array就是所有文件夹的文件名，就是手机号
        res.render("alldingdan.ejs",{
            "quanbushoujihao" : array
        });
    })    
}
//
exports.showOnedingdan = function(req,res){
    //识别URL
    var shoujihao = req.params.shoujihao;
    //呈递视图之前，控制器要去集结所有的数据
    //又要去命令file做些事情
file.read(shoujihao, function(cai){
    if(cai == -1){        
           cai = "Sorry, wrong number!";
    }
    //呈递视图
    res.render("onedingdan",{
        
        "shoujihao" : shoujihao,
        "cai" : cai
    });
});   
}
