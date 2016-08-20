//像一个文件中写入内容我们要先把文件读出来，在写入到憋到文件中
function read(cb) {
    setTimeout(function () {
        cb();
    },3000);
}
function write() {
    console.log('写入成功');
}
read(write);