var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.listen(3010);
app.use(function (req,res,next) {
    res.locals.title = 'zfpx';
    next();
})
app.use(function (req,res,next) {
    res.render = function (tmpl,obj,fn) {
        var newObj = {};
        //从将对象拷贝到target中
        //真实渲染对象是 _locals  = newObj
        newObj = Object.assign(newObj,res.locals,obj);
        tmpl = tmpl+(tmpl.endsWith('.ejs')?'':'.ejs');
        var absolute = app.get('views');
        var filePath = path.join(absolute,tmpl);
        if(fs.existsSync(filePath)){
            var  data = fs.readFileSync(filePath,'utf8');
            data = data.replace(/<%=([\s\S]+?)%>/g,function () {
                return newObj[arguments[1]];
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


app.get('/',function (req,res) {
    res.render('index',{world:8})
});
app.get('/user',function (req,res) {
    res.render('user')
});




