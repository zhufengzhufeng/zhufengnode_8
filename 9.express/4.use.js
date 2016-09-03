var express = require('./express');
var app = express();


app.listen(3006);

app.use(function (req,res,next) {
    console.log(req.hostname);//主机名
    console.log(req.query);//查询字符串
    console.log(req.path);
    next();
    //next中放置的是错误信息，会找对应是四个参数的中间件 执行
});
app.use(function (req,res,next) {
    console.log('sand');
    next();
});
app.get('/add/user',function (req,res) {
    res.end('hello');
});

//错误中间件  他有四个参数,错误中间件 ，写在页面最下方
app.use(function (err,req,res,next) {
    res.end(err);
});