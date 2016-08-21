//"11" = > 10
//param1 当前要转换的内容
//param2 当前是什么进制
console.log(parseInt('11',2));
//3转换成2进制
console.log((17).toString(16));
//base64 转换成可见编码
//相当于2进制最大为6个1 前面两位为0转换成10进制后为最大63 0-63
//base64,在0-63之间随机取可见编码
//ABCDEFGHIJKLMNOPQRSTUVWXYZ
//abcdefghijklmnopqrstuvwxyz
//0123456789
//+/
var sum = 0;
for(var i = 0; i<=5;i++){
    sum +=Math.pow(2,i)
}
console.log(sum);

var buffer = new Buffer('珠'); //默认buffer为16进制
console.log(buffer); //e7 8f a0 此时是16进制
//将珠字转换成base64

//将16进制转换成2进制  0x代表16进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//11100111   10001111   10100000 都大于64
//转换成小于64的
//规则:将所有的2进制进行拼接，每隔6位分割 前面加00
//00111001 00111000 00111110 00100000
//3个8位转成4个六位
//转换成10进制进行取值
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+='abcdefghijklmnopqrstuvwxyz';
str+='0123456789';
str+='+/';
var base64 = str[57]+str[56]+str[62]+str[32];
console.log(base64);//54+g
//base64不是加密的;
