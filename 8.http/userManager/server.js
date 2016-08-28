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
    }else if(pathname =='/user'){
        //接受用户的请求信息
        switch (req.method){
            case 'GET':
                break;
            case 'PUT':
                break;
            case 'POST':
                var result = '';
                req.on('data',function (data) {
                    result+=data;
                });
                req.on('end',function () {
                    //取头部时要全部小写
                    if(req.headers['content-type']=='application/json'){
                        user.push(JSON.parse(result));
                    }else{
                        user.push(querystring.parse(result));
                    }
                    res.end(JSON.stringify(user));
                });
                break;
            case 'DELETE':
                var id = urlObj.query.id;
                user = user.filter(function (item,index) {
                    return id !=index;
                });
                //删除后将数组重新渲染一遍
                res.end(JSON.stringify(user));
                break;
        }

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



//此处应跳转页面
//302；
/*
res.statusCode = 302;
//设置跳转的路径
res.setHeader('Location','/home.html');
res.end('hello')*/
