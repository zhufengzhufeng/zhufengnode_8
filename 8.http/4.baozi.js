var http = require('http');
var url = require('url');

http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var productName = urlObj.pathname.slice(1);   // /baozi
    var productCount = urlObj.query.num;//取到数量
    res.setHeader('Content-type','text/html;charset=utf8')
    //模板字符串
    res.end(`有${productName}${productCount}个`); //es6中的模板字符串

}).listen(8080)