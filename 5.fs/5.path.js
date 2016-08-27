//path也是一个核心模块
var path = require('path');

//将两个或者多个路径连接到一起
//我们的根目录加上views 文件夹
var pathJoin = path.join(__dirname,'views','..');
// console.log(pathJoin);//拼出完整的绝对路径

//basename基础的文件的名字
//abc.eg  给一个后缀名
var base = path.basename('ab.js','.js');
//extname 扩展名,它可以取出一个文件的扩展名
var ext = path.extname('a.js');
console.log(path.join(base,ext));

var sep = path.sep;// 可以判断当前操作系统
console.log(sep);  // /user/bin  //E:\
var de = path.delimiter;
console.log(de);
console.log(de);//环境变量分隔符  ：

//1.正常的路径 将不正常的路径转换成正常的
var normal = path.normalize('.//////a/../v/d/e/');
console.log(normal);
//功能：将多个/ 转换成一个/
//      将/  转换成\
//      识别 . 和..
//      识别最后一个/
//2. resolve解析，可以解析一个绝对路径（require.resolve）
var resolve = path.resolve('///../a////vv//./c/');
console.log(resolve);
//功能    直接回到根目录 c:\
//        多个/解析成一个/
//        识别..   .
//        不保留最后一个/
//3. path.dirname 当前目录的上一级
console.log(path.dirname('a/v/c'));





