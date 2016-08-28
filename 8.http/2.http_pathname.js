var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = {
    '.css':'text/css',
    '.js':'application/javascript',
    '.html':'text/html'
}
http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    //当浏览器引入其他文件时 会自动向服务器端发起请求
    if(pathname =='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./1.html').pipe(res);
    }else{
        //  /lib/index.css
        //我们先判断一下文件是否存在，存在读取此文件，不存在返回404
        var exists = fs.existsSync('.'+pathname);
        if(exists){
            res.setHeader('Content-type',mime[path.extname(pathname)]+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
           var SATUS_CODE = require('_http_server').STATUS_CODES;
            console.log(SATUS_CODE);
            var status = '404';
            res.statusCode = status;
            res.end(SATUS_CODE[status]);
        }

    }
}).listen(3000);




/*
else if(pathname =='/lib/index.css'){
    res.setHeader('Content-type','text/css;charset=utf8');
    fs.createReadStream('./lib/index.css').pipe(res);
}else if(pathname =='/lib/index.js'){
    res.setHeader('Content-type','application/x-javascript;charset=utf8');
    fs.createReadStream('./lib/index.js').pipe(res);
}else{
    res.end('结束')
}*/
