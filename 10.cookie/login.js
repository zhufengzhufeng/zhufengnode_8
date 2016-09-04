var express = require('express');
//解析请求体的模块
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
//设置模板类型
app.set('view engine','html');
//模板类型html 用ejs的方式来渲染
app.engine('html',require('ejs').__express);
//设置模板的目录
app.set('views',__dirname);
//使用后 req.body将对象挂载在body上 a=b&c=d
app.use(bodyParser.urlencoded({extended:true}));
// res.cookie() req.cookies
app.use(cookieParser());
app.listen(3005);
//在访问/的时候响应回index页面
//当我们提交时 后台设置cookie并且跳转页面user
//在用户页面中得到cookie

//返回首页
app.get('/',function (req,res) {
    res.sendFile('./index.html',{root:__dirname});
});
//发送内容
app.post('/login',function (req,res) {
    //得到请求体中的内容，并且设置到cookie中
    var username = req.body.username;
    res.cookie('user',username,{httpOnly:true});
    //redirect 302重定向
    res.redirect('/user');
});
//获取用户页 要进行用户验证是否有cookie没cookie让她登陆
function checkLogin(req,res,next) {
    //判断是否有cookie
    if(req.cookies.user){
        next();
    }else{
        res.redirect('/');
    }
}
app.get('/user',checkLogin,function (req,res) {
    //渲染用户列表 先得到cookie用我们的cookie的值渲染
    res.render('user.html',{user:req.cookies.user});
});
//退出页面
app.get('/logout',function (req,res) {
    //清除cookie cookie-parser提供的
    res.clearCookie('user');
    res.redirect('/');
});
