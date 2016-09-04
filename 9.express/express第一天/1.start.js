//使用express 第三方模块，导入express
var express = require('./express');//express是一个函数
var app = express(); //app还是一个函数

// app 就是我们的监听函数
// require('http').createServer(app).listen(3000);
// app.get方法 当访问/的时候 执行回调函数

app.get('/',function (req,res) {
    res.end('hello zfpx');
});
//浏览器发送get请求时 并且路径为/student,在执行函数
app.get('/student',function (req,res) {
    res.end('hello student');
});
//只要发送get请求并且上面的都没匹配到，就会被*接收
app.get('*',function (req,res) {
    res.end('这个好看');
});
//上面只要没有匹配到就会执行 all + *
app.all('*',function (req,res) {
    res.end('all没有匹配到的');
})
//发送不同类型的请求 curl -X POST http://localhost:3000
app.listen(3000); //监听3000端口


