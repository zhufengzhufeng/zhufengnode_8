var http = require('http');
var fs = require('fs');
var url = require('url')
http.createServer(function (req,res) {
    //获取浏览器端的请求路径
    //获取浏览的器端请求头
    //获取请求方法 get post delete put  RestFul 就通过http四个动词来请求不同的资源

    console.log(req.url);
    console.log(req.headers);
    console.log(req.method); //GET

    if(req.url =='/1.html'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./1.html').pipe(res);
    }else{
        res.end('结束')
    }


    //res.end('hello');
    //write after end 在结束后不能再写入内容
}).listen(3000);