var express = require('express');
var querystring = require('querystring');
//使用bodyparser
//var bodyParser = require('body-parser');
var app = express();
// 发过来的数据有两种格式  [{}]  a=1&b=2(使用querystring)
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));*/
//当我们使用bodyparser中间件的时候会给req.body 参数，来存放我们的请求体
function bodyParser() {
    return function (req,res,next) {
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            //json urlencoded [] {}
            if(result.startsWith('{')||result.startsWith('[')){
                req.body = JSON.parse(result);
            }else{
                req.body = querystring.parse(result);
            }
            next();
        })
        //1.监听on data事件 从end事件中知道传递的是什么类型的        //2.是json 还是urlencoded  对其做对应的处理
        //3.放置到req.body上
        //4.next();
        //如果没有请求体 会直接调用end方法
    }
}
app.use(bodyParser());
app.listen(3001);

app.get('/',function (req,res) {
    res.sendFile('./form.html',{root:__dirname});
});

app.post('/login',function (req,res) {
    //得到请求体中的内容
    res.send(req.body);
})



