var express = require('express');
var app = express();
app.listen(8080);

app.use(function (req,res,next) {
    res.redirect = function (url) {
        console.log('我要添砖了');
        res.statusCode = 302; //设置状态码
        res.setHeader('Location',url);//设置头，跳转
        res.end('');//把当前请求关掉
    };
    next();
});

app.get('/',function (req,res) {
    //302 重定向 跳转到百度页面上
    res.redirect('http://www.baidu.com')
});