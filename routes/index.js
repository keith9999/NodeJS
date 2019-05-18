//route/index.js
var express = require("express");
var router = express.Router();//can create module routers

router.get('/', function(req,res){
    res.send('index');
})

router.get('/product', function(req,res){
    res.send('product');
})
module.exports = router;