//route/admin/product.js
var express = require("express");
var router = express.Router();//can create module routers
var DB = require('../../modules/db');//use DB, so inset DB
var multiparty = require('multiparty');//can get form data and upload image
var fs = require("fs");

router.get('/', function(req,res){
    DB.find('product', {}, function (err, data) {        
        res.render('admin/product/index', {            
            list: data
        });
    });
    
})
//add product
router.get('/add', function(req,res){
    res.render('admin/product/add');
})
//doadd product
router.post('/doAdd', function(req,res){
    //get data from form and image
    var form = new multiparty.Form();
    form.uploadDir='upload';//upload address
    form.parse(req,function(err, fields, files){
        //get data and upload image successful info
        //fields: get the data from form
        //files: image upload sucessful address info
        //console.log(fields);
        //console.log(files);
        var title = fields.title[0];
        var price = fields.price[0];
        var fee = fields.fee[0];
        var description = fields.description[0];
        var pic = files.pic[0].path;
       // console.log(pic);
       DB.insert('product', {title:title, price:price, fee:fee, description:description, pic:pic}, function(err, data){
           if(!err){
               res.redirect('/admin/product');//upload successful, then redirect to /product
           }
       })
    })
})
//edit product
router.get('/edit', function(req,res){
    //get id
    var id = req.query.id;
    console.log(id);
    //get data from DB by id
    //match mongoDb default id -> new DB.ObjectID(id)
    DB.find('product', {"_id":new DB.ObjectID(id)}, function(err, data){
        //console.log(data);
        res.render("admin/product/edit", {
            list:data[0]           
        })
    })
})
//update product
router.post('/doEdit', function(req,res){
    var form = new multiparty.Form();
    form.uploadDir='upload';//upload address
    form.parse(req,function(err, fields, files){
        //console.log(fields);
        //console.log(files);
        var _id = fields._id[0];
        var title = fields.title[0];
        var price = fields.price[0];
        var fee = fields.fee[0];
        var description = fields.description[0];
        var originalFilename = files.pic[0].originalFilename;
        var pic = files.pic[0].path;
        if(originalFilename){//image had changed
            var setData = {
                title,
                price,
                fee,
                description,
                pic
            }
        }else{//image did not changed
            var setData = {
                title,
                price,
                fee,
                description                
            }
            //delete template virtual image
            fs.unlink(pic)
        }
        
        DB.update('product', {"_id": new DB.ObjectID(_id)}, setData, function(err, data){
            if(!err){
                res.redirect('/admin/product');
            }
        })

    })
})
//delete product
router.get('/delete', function(req,res){
    //get id
    var id = req.query.id;
    DB.deleteOne('product',{"_id": new DB.ObjectID(id)}, function(err, data){
        if(!err){
            res.redirect('/admin/product');
        }
    })
})
module.exports = router;