//pipe 是我们流中自带的方法， 管道
var fs = require('fs');

// rs.pipe(ws); //pipe限定了内存使用量

function copy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}
copy('./1.txt','./2.txt');