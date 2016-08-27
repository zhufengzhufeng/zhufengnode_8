// 创建目录 同步异步

var fs = require('fs');
//创建目录时，有个规则 必须要先创建父亲 在创建儿子
//写一个同步的创建方式
function mkdirp(p) {
    p = p.split('/');
    //我们要每次 先取出 a  a/b   a/b/c  a/b/c/d
    for(var i = 0;i < p.length;i++){
        var dirPath = p.slice(0,i+1).join('/');
        //异步是无法保证 创建父亲后再创建儿子
        fs.mkdirSync(dirPath);
    }
}
//文件已经存在了，存在后就不能再创建了，写一个异步的方法
//异步 ，通过回调函数
mkdirp('a/b/c/d');