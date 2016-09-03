function express() {
    var app = function (req,res) {
    };
    //当express函数执行后返回app函数
    //创建一个listen方法，用来监听端口号
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
    return app;
}

//导出一个函数名字叫express
module.exports = express;