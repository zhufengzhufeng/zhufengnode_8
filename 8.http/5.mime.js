var http = require('http');
var fs = require('fs');
var path = require('path');
//引用我们的第三方包 mime
http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./1.html').pipe(res);
    }else{
        var exists = fs.existsSync('.'+pathname);
        if(exists){
            //查看一下当前的pathname路径是什么类型的
            res.setHeader('Content-type',require('mime').lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
           var SATUS_CODE = require('_http_server').STATUS_CODES;
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
