var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
//如果我们要使用ejs模板 ,就要设置模板类型
app.set('view engine','html');
//设置模板的路径
app.engine('html',require('ejs').__express);
app.set('views',path.join(__dirname,'views'));
app.listen(3008);

app.use(function (req,res,next) {
    res.render = function (tmpl,obj,fn) {
        //tmpl可能带有ejs后缀 还可能不带有
        tmpl = tmpl+(tmpl.endsWith('.ejs')?'':'.ejs');
        //要读取到当前的模板 用obj替换模板，看是否需要手动返回
        //获得模板 绝对路径
        var absolute = app.get('views');
        var filePath = path.join(absolute,tmpl);
        if(fs.existsSync(filePath)){
           var  data = fs.readFileSync(filePath,'utf8');
            data = data.replace(/<%=([\s\S]+?)%>/g,function () {
                return obj[arguments[1]];
            });
            if(typeof fn!='function'){
                res.end(data);
            }else{
                fn(null,data)
            }
        }else{
            res.end('渲染不了');
        }
    }
    next()
})


/*
    var str = `var a  = 10;console.log(1)`;
    var fn = new Function(str);
    fn();
*/
app.get('/',function (req,res) {
    //渲染一个模板,后面的对象就是页面需要的数据
    //第三个参数是回调函数
    res.render('index',{title:'zfpx',world:8,arr:['a','b','c']}
   /* ,function (err,data) {
        //手动的返回一个页面
        //data表示获取编译好的模板
        res.send(data+'逗你玩');
    }*/
    )
});



