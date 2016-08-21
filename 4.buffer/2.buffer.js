//数组创建 长度创建 字符串创建

//1.长度创建
var buffer = new global.Buffer(3);
console.log(buffer);
//通过长度创建buffer是随机的
//手动清空
buffer.fill(0);
console.log(buffer);
//2.字符串创建
var buffer = new Buffer('珠峰','utf8');
//node中不支持gb
console.log(buffer);

//3.数组创建
var buffer = new Buffer([-2]); //6*16+4
console.log(buffer);//如果不识别则为0
//如果给的值大于255,会对256取模
//如果为负值 加上256


//4.往buffer中写入内容
var buffer = new Buffer(12);
//string 要写入的字符串
//offset 写入的偏移量
//length 写入的长度
//encoding 写入内容的编码格式
//珠峰    培训
buffer.write('珠',0);
buffer.write('培训',3);
console.log(buffer.toString('utf8',0,9)); //转换成字符串
//write方法会默认把内容从头写到尾
//toString 转化时可以根据截取的位置进行输出

/*var arr = [1,2,3];
var newArr = arr.slice(2);
newArr[0] = 8;
console.log(arr);*/
var newArr = [100];
var arr = [newArr,2,3];
var n = arr.slice();
newArr.push(200);
console.log(n);//数组存放的是地址

//slice方法
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(2);
newBuffer[0] = 100;
console.log(newBuffer);
//区别在于slice后操作的还是原buffer 100转换成16进制为64
console.log(buffer.length);
//buffer的长度是字节数


//5. slice的问题
var buffer = new Buffer('珠峰');
console.log(buffer.slice(0,4).toString());
console.log(buffer.slice(4).toString());

//编译 string_decoder
var String_Decoder = require('string_decoder').StringDecoder;
//先new一个实例 把字符串存进去，不能识别的保留，当在输出的时候进行拼接
var sd = new String_Decoder;
console.log(sd.write(buffer.slice(0,5)));
console.log(sd.write(buffer.slice(5)));

//6.copy方法
//可以将小buffer拷贝到大buffer上

var buffer = new Buffer(6);
var buffer1 = new Buffer('珠');
var buffer2 = new Buffer('峰');
//targetBuffer目标buffer
//targetStart 目标的开始
// sourceStart 拷贝内容的开始
// sourceEnd拷贝内容的结束
buffer1.copy(buffer,0);
buffer2.copy(buffer,3);
console.log('本次',buffer.toString());


//7.concat拼接方法将两个buffer拼接成1个buffer
var buffer1 = new Buffer('珠');
var buffer2 = new Buffer('峰');
var newBuffer = Buffer.concat([buffer1,buffer2],3);
console.log(newBuffer.toString());

//我们要实现一个buffer方法
Buffer.myconcat = function (list,totalLength) {
    
};
Buffer.myconcat([buffer1,buffer2],100);



