var http = require('http');
var app = http.createServer(function (req,res) {
    //一条是写入cookie
    if(req.url == '/write'){
        //通过响应 向响应头内写入cookie,写入的cookie以数组的方式写入
        //res.setHeader('Set-Cookie',"name=zfpx"); //只能写入一条cookie
        //设置同名的cookie会以最后的值为准，后面会覆盖掉前面的
        //1.domain是限制域名 只有当使用www.zfpx1.cn时才能写入cookie
        //res.setHeader('Set-Cookie',['name=zfpx2; domain=.zfpx1.cn','age=8']);//写入多个cookie
        //2.path 设置什么路径下使用
        //res.setHeader('Set-Cookie',['name=zfpx2; path=/add','age=8']);
        //3.maxAge 设置最大的过期时间相对于当前的(秒)
        //res.setHeader('Set-Cookie','name=zfpx2; max-age=10');
        //4.expires 设置绝对时间
        //res.setHeader('Set-Cookie','name=zfpx3; expires='+new Date(Date.now()+3000).toGMTString());
        //5.httpOnly在浏览器中不可读取cookie
        res.setHeader('Set-Cookie','name=zfpx3; httpOnly=true');
        res.end('写入成功')
    }else if(req.url == '/read'){
        //读出cookie ,读取到的cookie是以; 形式进行分割
        var querystring = require('querystring');
        var cookieObj = querystring.parse(req.headers['cookie'],'; ');
        res.end(JSON.stringify(cookieObj));//使用querystring解析我们的cookie
    }
    //第二个是读cookie
});
app.listen(3000);

