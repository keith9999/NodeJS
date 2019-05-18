//route/admin/login.js
var express = require("express");
var router = express.Router();//can create module routers
var md5 = require('md5-node');//password need to add security
var DB = require('../../modules/db');
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())
router.get('/', function(req,res){
    res.render('admin/login');
})
//login in
router.post('/doLogin', function(req,res){
    //console.log(req.body);//display get data { username: '11', password: '11' }
    //use md5 to add security of the password
    var username = req.body.username;
    var password = md5(req.body.password);

    DB.find('user', {//use call back function to return username and password
        username: username,
        password: password
    }, function (err, data) {
        if (data.length > 0) {
            console.log("Login sucessfully!");
            //save user infor into session
            req.session.userinfo = data[0];
            //console.log(session.userinfo);
            res.redirect("/admin/product");//login in success, then go to "/product"
        }
        else {
            console.log("Fail on login!");
            //fail on login, then alert, and continue go to "/login"
            res.send("<script>alert('Fail on login');location.href='/admin/login'</script>");
        }
    });
})
//loginOut
router.get("/loginOut", function (req, res) {
    //delete session
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/admin/login');
        }
    })
});
module.exports = router;