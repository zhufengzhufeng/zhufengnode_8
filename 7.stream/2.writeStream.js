var fs = require('fs');
//highWaterMark 16384  = 16*1024 默认写的最大值是16k
//encoding：'utf8';
//start 从哪里开始写
var ws =  fs.createWriteStream('./2.txt',{highWaterMark:2});
//request response 是流
//var flag = ws.write('hello'); //write end里面的参数只能为string或buffer
//console.log(flag);//返回值flag代表就是内存还能不能写进去
//ws.end('zfpx');// end方法会将内存里的东西全部写入到文件内，之后将end中的内容输出到文件中
var index = 0;
function eat() {
    var flag = true;
    while(flag&&index<10){
        flag = ws.write(''+index++);
        console.log(flag);
    }
}
eat();
//有个方法叫做drain方法  抽干
ws.on('drain',function () {
    console.log('吃完了');
    eat();
});





