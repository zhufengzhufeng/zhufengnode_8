var express = require('express');
var app = express();
var url = require('url')
app.listen(4000);
//要在真正返回前做防盗链
function check(whiteList) {
    return function (req,res,next) {
        //whiteList 白名单中网址都可以访问此图片
        //要获取refer 看refer是否存在
        var refer = req.headers['referer'];
        if(!refer){ //直接打开这张图片，可以他访问
            next();
        }else{
            // 1.当前refer 和图片的host一致时可以访问
            refer = url.parse(refer).hostname;
            var host = req.hostname;
            if(refer==host){
                next();
                // 2.白名单中的和refer进行比较，如果白名单中有可以访问
            }else if(whiteList.indexOf(refer)>-1){
                next();
            }else{
                //都不符合 不让你访问
                res.sendFile(__dirname+'/img/2.jpg');
            }
        }
    }
}
//对img目录下的所有图片进行防盗链，可以指定允许使用图片的网址
app.use('/img',check(['127.0.0.1']));
app.use(express.static(__dirname));

//访问/的时候将1.html进行返回
app.get('/',function (req,res) {
    //express帮我们封装了一个方法 这个方法就是返回文件用的
    res.sendFile('./1.html',{root:__dirname});
    //只要使用相对路径就必须配置root目录
    //res.sendFile(__dirname+'/1.html');
    //1.写绝对路径
    //2.写相对路径
});





