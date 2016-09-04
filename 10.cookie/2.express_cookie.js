var express = require('express');
//使用cookieParser
var querystring = require('querystring')
var app = express();
/*var cookieParser = require('cookie-parser');
app.use(cookieParser());*/
function cookieParser() {
    return function (req,res,next) {
        req.cookies = querystring.parse(req.headers['cookie'],'; ');
        var arr = [];
        res.cookie = function (key,value,options) {
            var str = `${key}=${value}`;
            if(options){
                if(options.maxAge){
                    str+=`; max-age=${options.maxAge/1000}`;
                }
                //......
            }
            arr.push(str);
            res.setHeader('Set-Cookie',arr);
            //['name=zfpx; max-age=3000']
            //['name=zfpx; max-age=3000','age=8']
        };
        next();
    }
}
app.use(cookieParser());


//当我们使用cookieParser模块后req对象上有一个属性叫req.cookies
//res有一个属性叫做res.cookie('key',value);
app.listen(8080);
app.get('/write',function (req,res) {
    res.cookie('name','zfpx',{maxAge:3*1000}); //maxAge为毫秒
    res.cookie('age','8');
    res.send('写入成功');
});
app.get('/read',function (req,res) {
    res.send(req.cookies);
});