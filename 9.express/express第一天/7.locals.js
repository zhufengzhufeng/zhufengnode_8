var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',path.join(__dirname,'views'));
app.listen(3009);
app.use(function (req,res,next) {
    res.locals.title = 'zfpx'; //公用的属性放置在locals中
    next();
});
app.get('/',function (req,res) {
    res.render('index',{world:8,arr:['a','b','c']})
});
app.get('/user',function (req,res) {
    res.render('user')
});



