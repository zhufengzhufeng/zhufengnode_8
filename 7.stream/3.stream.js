// 每次读64k  写16k  等待第一次64k都写进去在写读第二次


var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{highWaterMark:9});
var ws = fs.createWriteStream('./2.txt',{highWaterMark:1});
//1.创建可读流和可写流
//2.将可读流打开水龙头 监听ondata事件
//3.不停的触发ondata,没次接收到数据就写入到文件内，如果写入不进去就不要在读了
//4. 当写入流写完了，在让可读流继续读
//5. 内容读完后关闭文件
//第一次读入三个 等一等等我消耗后 在读
rs.on('data',function (data) {
   var flag =  ws.write(data);
    if(!flag){
        rs.pause();
    }
});
ws.on('drain',function () {
    console.log('干了');
    rs.resume();
});
//当我们操作文件后需要关闭文件
rs.on('end',function () { //读完文件后会自动关闭文件
    ws.end(); //会关闭文件，end会强迫将内存中的内容写入到文件内，在关闭文件
});
//将数据的滞留量限制到一个可接受的水平，以使得不同速度的来源和目标不会淹没可用内存。