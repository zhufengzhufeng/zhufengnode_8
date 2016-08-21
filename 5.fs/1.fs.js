//fs模块 file system文件系统
//node提供的读写文件的模块
var fs = require('fs');
//读写文件的方法都是异步和同步同时出现的
var obj = {

}
var name = fs.readFileSync('./name.txt','utf8');
//设置读取的编码,否则默认为 buffer 类型
obj.name = name;
var age = fs.readFileSync('./age.txt','utf8');
obj.age = age;
//带有sync都是同步方法，同步通过返回值获取读到的内容
console.log(obj);





