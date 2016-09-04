## express用法
- 使用express
```
var express = require('express');
var app = express();
```
- 监听方法
```
app.listen();
```
- 路由(请求的方法和路径) path可以为星 方法可以为all
```  
app.get('/',function(req,res){});
```
## 中间件ware
- next决定是否继续向下传递
- req res是一个
- next中传递错误,会被错误中间件接受 参数为四个参数的中间件
- 抽取公共方法和属性
- 路径默认为/   开头路径匹配即可
```
app.use(function(req,res,next){});
```
## 路径参数
```
app.get('/user/:id/:name/home/:address',function(req,res){
    //req.params; {id:1,name:2,address:3}
})
```
## req上的属性
- req.path;
- req.hostname;
- req.query;
## 模板ejs
```
<%=%>
<%-%>
<%%>

app.set('view engine','ejs');
app.set('views',__dirname)


app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname)
res.locals.title='123';
res.render('1.ejs',{},function(err,data){})

```
## 静态文件服务
```
app.use(express.static(__dirname)); 
``` 
## 送文件
- 绝对路径或者相对路径+root
```
res.sendFile('./1.html',{root:__dirname});
res.sendFile(path.resolve('./1.html'));
```
## 解析请求体
```
npm install body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));
```