//异步的方法
var fs = require('fs');
var obj = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    //有两个参数 错误和数据，在node中只要有err就判断一下
    if(!err){
        obj.name = data;
        log()
    }
});
fs.readFile('./age.txt','utf8',function (err,data) {
    //有两个参数 错误和数据，在node中只要有err就判断一下
    if(!err){
        obj.age = data;
        log();
    }
});
function log() {
    //读取时 比较谁读的慢，最慢的读完后输出结果
    if(Object.keys(obj).length==2){
        console.log(obj);
    }
}
//解决异步可以使用计时器 或者方法触发 promise
//把你们的总结的内容放在github上，提交到作业的github上