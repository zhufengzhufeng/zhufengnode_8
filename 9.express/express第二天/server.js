var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
//静态服务中间件,指定静态文件的位置
//实现一个静态服务

///css/index.css 会加上引用的路径成为一个绝对路径
/*function static(p) {
    return function (req,res,next) {
        //将访问的路径和我们的绝对路径拼在一起组成完整的路径
        //如果服务器中有这个文件我们读出来写会响应中
        var filename = path.join(p,req.path);
        console.log(p);
        console.log(req.path);
        // 当我们访问/的时候 默认文件也存在
        var exists = fs.existsSync(filename);
        //如果是/的话次目录仍然存在
        if(exists&&req.path!='/'){
            fs.createReadStream(filename).pipe(res);
        }else{
            next();
        }
    }
}*/
//app.use(static(__dirname+'/lib'))
app.use(express.static(__dirname+'/lib'));

//设置模板引擎
app.set('view engine','html');
app.engine('html',require('ejs').__express);
//设置模板的位置，在当前目录下查找ejs模板
app.set('views',__dirname);
app.listen(3000);
app.get('/',function (req,res) {
   //渲染模板
    res.render('1',{title:'<h1>hello zfpx</h1>',arr:[1,2,3],flag:false});
});
