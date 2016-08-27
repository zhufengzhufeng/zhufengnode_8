//创建http 可以使用node中自带的核心模块http;
var fs = require('fs');
var http = require('http');
//当坚挺了端口号后，会送你一个req,res代表请求和响应
http.createServer(function (req,res) {
    //当浏览器端 请求服务器端 服务器端没有做出任何响应状态为pending
    //我们要对每条请求给定一个特定的类型content-type，为了告诉浏览器如何解析
    //res.setHeader('Content-type','text/html;charset=utf8');
    //不同的状态码 对应的响应短语
    /*var STATUS_CODE = require('_http_server').STATUS_CODES;
    console.log(STATUS_CODE);*/
    //res.statusCode = 200;
    // res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    //res.write('珠峰');
    //res.end('zfpx'); //当我们请求完成后必须要挂掉电话

    res.setHeader('Content-Type','text/html;charset=utf8');
    /*fs.readFile('./1.html',function (err,data) {
        res.end(data);
    })*/
    fs.createReadStream('./1.html').pipe(res);
    //pipe方法相当于write  write   end
}).listen(8080); //指定端口号，默认localhost
//服务端的特点  特定ip 特定端口



//注意 浏览器端会默认的发起请求favicon.ico