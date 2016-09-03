var url = require('url');
function express() {
    var app = function (req,res) {
        var method = req.method.toLowerCase();
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        var index = 0; //先调用routes中第一个对象
        //获取路径
        req.path = pathname;
        //获取查询参数
        req.query = urlObj.query;
        //获取主机名
        req.hostname = req.headers['host'].split(':')[0];
        next();
        function next(err) { //可能用户调用时 传递err对象
            if(index>=app.routes.length){
                return res.end(`Cannot${method}${pathname}`);
            }
            var route = app.routes[index++];
            if(err){
                //如果有错误，执行错误中间件，method middleware 4个参数
                if(route.method=='middleware'&&route.fn.length==4){
                    return route.fn(err,req,res,next);
                }else{
                    //不是错误中间件，将错误继续下去
                    next(err);
                }
            }else{
                if(route.method == 'middleware'){
                    //中间件
                    if(route.path=='/'||route.path==pathname||pathname.startsWith(route.path+'/')){
                        route.fn(req,res,next);
                    }else{
                        next();
                    }
                }else{
                    //路由
                    if((route.method==method||route.method=='all')&&(route.path==pathname||route.path == '*')){
                        route.fn(req,res);
                    }else{
                        next();
                    }
                }
            }

        }
    };
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
    app.routes = [];
    var methods = ['get','post','delete','put','options','all'];
    methods.forEach(function (method) {
        app[method] = function (path,fn) {
            var config = {method:method,path:path,fn:fn};
            app.routes.push(config);
        };
    });
    app.use = function (path,fn) {
        if(typeof fn != 'function'){
            fn = path; //没有传递让fn等于函数给path设置默认为/
            path = '/';
        }
        var config = {method:'middleware',path:path,fn:fn};
        app.routes.push(config);
    };
    return app;
}
module.exports = express;


