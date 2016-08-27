var fs = require('fs');
//创建可读流,当我们创建了一个可读流不会读取数据，返回的是当前的可读流
var rs = fs.createReadStream('./1.txt',{highWaterMark:1});
rs.setEncoding('utf8');//设置编码格式
//encoding 默认编码为null，读取到的是buffer
//flags 默认为打开流失读取操作 'r'
//start end 从哪里开始读到哪里  node中唯一一个包前又包后的
//highWaterMark 最高水位线 默认65536 = 1024*64
//如果想要读取到内容，需要将水龙头打开,监听我们的data事件
//如果监听了事件，就会从非流动模式，转换到流动模式
//如果编码是utf8至少一次要读三个
/*var result = [];
rs.on('data',function (data) { //data为当前获得的数据
    // result+=data; //转换失败
    result.push(data)
})
//将所有水拼接成一盆水，监听end事件
rs.on('end',function () {
    console.log(Buffer.concat(result).toString());
})*/
var result = '';
rs.on('data',function (data) { //data为当前获得的数据
     result+=data; //转换失败
    /*console.log(data);
    rs.pause();//暂停水流
    setTimeout(function () {
        rs.resume();//恢复水流
    },2000)*/
});
//将所有水拼接成一盆水，监听end事件
rs.on('end',function () {
     console.log(result);
});
rs.on('error',function (err) {
    console.log(err);
});
//流里的方法是异步的
//监听错误
//readstream 和readfile区别，默认一次读取64k


