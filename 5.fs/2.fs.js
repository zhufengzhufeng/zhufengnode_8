//异步的方法

var fs = require('fs');
var obj = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    //有两个参数 错误和数据，在node中只要有err就判断一下
    if(!err)
        obj.name = data;
});
fs.readFile('./age.txt','utf8',function (err,data) {
    //有两个参数 错误和数据，在node中只要有err就判断一下
    if(!err)
        obj.age = data;
});
//读取时 比较谁读的慢，最慢的读完后输出结果
console.log(obj);