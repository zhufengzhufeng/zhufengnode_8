var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./1.html').pipe(res);
    }else if(pathname=='/clock'){
        res.end(new Date().toLocaleString())
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