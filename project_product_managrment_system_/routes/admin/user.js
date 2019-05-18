//route/admin/user.js
var express = require("express");
var router = express.Router();//can create module routers
var DB = require('../../modules/db');//use DB, so inset DB

router.get('/', function(req,res){
      //res.send('product');    
      DB.find('user', {}, function (err, data) {        
        res.render('admin/user/index', {            
            list: data
        });
    });
})

router.get('/add', function(req,res){
    res.send('add user');
})
module.exports = router;