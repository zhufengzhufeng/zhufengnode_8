var express = require('express');
var app = express();
//中间件
// 1.中间件就是起过渡作用 检查权限 检查是否合法  最后在进入我们的真正的路由
// 2.中间件有next方法，可以决定是否继续执行 如果调用next方法表示继续执行
// 3.中间件也可以匹配路径 只要路径开头匹配即可,默认是/等同于不写
// 4.中间件中的req和res 和路由中的是一个
// 5.一个页面中可以有多个中间件
//当匹配成功后执行函数
app.use(function (req,res,next) {
    req.mny = 500;
    next()
})
app.use(function (req,res,next) {
    req.mny-=20;
   console.log('领导扣了',req.mny);
    next();
});
app.use(function (req,res,next) {
    req.mny-=500;
    console.log('主管扣了',req.mny);
    next();
});
app.get('/user',function (req,res) {
    res.end(req.mny+'');
});
app.listen(3000);


