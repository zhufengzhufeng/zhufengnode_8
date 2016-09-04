var express = require('./express');
var app = express();
//中间件
// 1.中间件就是起过渡作用 检查权限 检查是否合法  最后在进入我们的真正的路由
// 2.中间件有next方法，可以决定是否继续执行 如果调用next方法表示继续执行
// 3.中间件也可以匹配路径 只要路径开头匹配即可,默认是/等同于不写
// 4.中间件中的req和res 和路由中的是一个
// 5.一个页面中可以有多个中间件
// 6.中间件一般写在路由前面
//当匹配成功后执行函数

//用途：扩展req和res上的属性，还可以扩展公用的方法
/*[{
    method:'middleware',path:'/',fn:fn,
},{
    method:'get',path:'/user',fn:fn
},{
    method:'get',path:'/baby',fn:fn
}
]*/
app.use(function (req,res,next) {
    req.timer = new Date().getTime();
    var end = res.end;
    res.end = function () {
        //es6中可以将参数列表直接变成数组
        console.log(new Date().getTime()-req.timer);
        //Array.of就是将其转换为数组
        end.apply(res,Array.of(...arguments));
    };
    next()
});
app.get('/user',function (req,res) {
    res.end('真正访问到user的时间');
});
app.get('/baby',function (req,res) {
    res.end('真正访问到user的时间','utf8');
});
app.listen(3000);


