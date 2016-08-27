var buffer = new Buffer([1,2,3]);
//截取出的还是原来的buffer
var buffer2 = buffer.slice(2);
buffer2[0] = 100;
console.log(buffer);