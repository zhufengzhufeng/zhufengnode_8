

var fs = require('fs');

//读到内存中，readfile是将内容读到内存中，如果文件过大是无法读入的
fs.readFile('./age.txt','utf8',function (err,data) {
    console.log(data);
});

//默认编码格式为null  也就是读取出来的是buffer
//flag表示当前打开文件后 做什么操作
fs.writeFileSync('./age1.txt','hello',{flag:'a'});


//追加内容
// fs.appendFile();
fs.appendFileSync();// 相当于writeFileSync + flag:'a'
//1 2 4 随机组成权限 777

