var http = require('http');
var fs = require('fs');
var path = require('path');
//使用一个第三方模块formidable，用来接收数据的
var formidable = require('formidable');


http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname =='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./upload.html').pipe(res);
    }else if(pathname=='/upload'){
        var form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files) {
            console.log(files);
            //从电脑缓存中 读取到我们的服务器上
            fs.createReadStream(files.files.path).pipe(fs.createWriteStream('./u/'+files.files.name));
        });
        form.on('end',function () {
            res.end(JSON.stringify({'success':'上传成功'}));
        })
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