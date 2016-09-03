var url = require('url');
console.log(10000);
function express() {
    var app = function (req,res) {
        //当请求到来的时候，我们要取出method和path
        //将方法名转换成小写的
        var method = req.method.toLowerCase();
        var urlObj = url.parse(req.url,true);
        //取到请求的路径
        var pathname = urlObj.pathname;

        // 1.先在数组中取出一个 进行判断，判断是否为中间件
        var index = 0;//代表数组的第一项
        next();
        function next() {
            if(index>=app.routes.length){
                return res.end(`Cannot${method}${pathname}`);
            }
            var route = app.routes[index++];
            if(route.method == 'middleware'){
                //以xxx开头  startsWith
                //1.当前中间件的路径就是/ 表示匹配全部
                //2.当前的中间件和访问的路径全等的条件
                //3.当前访问的路径等于中间件加杠的开头
                 /**    /add
                 /add/ /add/user
                 /add/ /add/user
                  **/
                if(route.path=='/'||route.path==pathname||pathname.startsWith(route.path+'/')){
                    route.fn(req,res,next);//匹配到后执行对应的函数
                }else{
                    next();//没有匹配到继续向下执行
                }
                //中间件，看路径是否可以匹配到 /    /add/user /add
            }else{
                //路由
                if((route.method==method||route.method=='all')&&(route.path==pathname||route.path == '*')){
                    route.fn(req,res);
                }else{
                    next();
                }
            }
        }





        /*var route = app.routes.find(function (item) {
            //如果为true返回当前这一项item
            return (item.method==method||item.method=='all')&&(item.path==pathname||item.path == '*');
        });
        if(route){
            route.fn(req,res);
        }else{
            res.end(`Cannot${method}${pathname}`);
        }*/
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
    //设置中间件  路由和中间件在同一队列中
    app.use = function (path,fn) {
        //说明没有传递路径
        if(typeof fn != 'function'){
            fn = path; //没有传递让fn等于函数给path设置默认为/
            path = '/';
        }
        var config = {method:'middleware',path:path,fn:fn};
        app.routes.push(config);
    };
    return app;
}
//导出一个函数名字叫express
module.exports = express;



