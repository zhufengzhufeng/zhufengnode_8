//node可以做请求别人的页面，将我们想要的数据，返回给我们自己用，我们请求node node发起请求，请求好数据拼装成页面，返回给我们的客户端

var http = require('http');
var fs= require('fs');
http.createServer(function (request,response) {

    //node发起请求
    //当我请求node时将拼好的所有h3 返回给我们
    http.get('http://baijia.baidu.com/',function (req,res) {
        //会将所有的请求的数据放在req里，读取req中的内容
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            //result为请求的结果 我们要匹配所有h3
            //.是不包括/n的
            var matchers = result.match(/<h3[\s\S]*?<\/h3>/g);
            //matcher是我们获取到的所有[h3,h3]
            //读取fetch.html
            var tmpl = fs.readFileSync('./fetch.html','utf8');
            //将数据替换到body中
            tmpl = tmpl.replace(/<body[\s\S]*?<\/body>/g,function () {
                return `<body>${matchers.join('')}</body>`
            });
            response.end(tmpl);// 响应回给我们自己的服务器端
        });
    })



}).listen(8080);



