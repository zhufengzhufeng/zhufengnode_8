var http = require('http');
var fs = require('fs');
var path = require('path');
var user = [];
var querystring = require('querystring');
http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./user.html').pipe(res);
    }else if(pathname =='/reg'){
        //接受用户的请求信息
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            user.push(querystring.parse(result));
            //此处应跳转页面

        });
        //解析对象 querystring
        //form表单获取的数据格式为username=hello&password=zfpx


    }else{
        var exists = fs.existsSync('.'+pathname);
        if(exists){
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