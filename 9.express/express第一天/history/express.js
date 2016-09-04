var url = require('url');
function express() {
    var app = function (req,res) {
        //当请求到来的时候，我们要取出method和path
        //将方法名转换成小写的
        var method = req.method.toLowerCase();
        var urlObj = url.parse(req.url,true);
        //取到请求的路径
        var pathname = urlObj.pathname;
        var route = app.routes.find(function (item) {
            //如果为true返回当前这一项item
            return (item.method==method||item.method=='all')&&(item.path==pathname||item.path == '*');
        });
        if(route){
            route.fn(req,res);
        }else{
            res.end(`Cannot${method}${pathname}`);
        }
    };
    //当express函数执行后返回app函数
    //创建一个listen方法，用来监听端口号
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
    //声明get方法 对应的当前的请求路径和回掉函数
    app.routes = [];
    //构造一个所有方法的数组
    var methods = ['get','post','delete','put','options','all'];
    //添加所有method的方法
    methods.forEach(function (method) {
        app[method] = function (path,fn) {
            //每次调用get方法时将path，fn，method 都存起来
            //当访问时候匹配path和method 如果匹配到执行fn
            var config = {method:method,path:path,fn:fn};
            app.routes.push(config);
        };
    });
    return app;
}
//导出一个函数名字叫express
module.exports = express;