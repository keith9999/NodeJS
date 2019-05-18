//route/admin.js
var express = require("express");
var router = express.Router();//can create module routers
//backend router, all backend need to pass here
var login = require('./admin/login');
var product = require('./admin/product');
var user = require('./admin/user');
//check power
router.use(function (req, res, next) {
    console.log(req.url);
    //next();
    if (req.url == '/login' || req.url == '/login/doLogin') {
        next();
    }
    else {
        if (req.session.userinfo && req.session.userinfo.username != '') {
            req.app.locals['userinfo'] = req.session.userinfo;
            //set gobal variable, all page can use it
            next();
        } else {
            res.redirect('/admin/login');
        }
    }
});
//set router
router.use('/', login);
router.use('/login', login);
router.use('/doLogin', login);
router.use('/product', product);
router.use('/user', user);
module.exports = router;