// 创建目录 同步异步

var fs = require('fs');
//创建目录时，有个规则 必须要先创建父亲 在创建儿子
//写一个同步的创建方式
/*function mkdirp(p) {
 p = p.split('/');
 //我们要每次 先取出 a  a/b   a/b/c  a/b/c/d
 for(var i = 0;i < p.length;i++){
 var dirPath = p.slice(0,i+1).join('/');
 //异步是无法保证 创建父亲后再创建儿子
 fs.mkdirSync(dirPath);
 }
 }*/
//文件已经存在了，存在后就不能再创建了，写一个异步的方法
//异步 ，通过回调函数

/*function mkdirp(p) {
 //拆成一个数组
 var arr =  p.split('/');
 //我们需要拿出第一个先创建
 var index = 0;
 make(arr[index]); //首先先创建一次
 function make(p) {
 if(index>= arr.length+1){
 return
 }
 fs.mkdir(p,function (err) {//当a创建好后执行创建a/b
 console.log(err); //如果文件存在仍然会产生错误
 make(arr.slice(0,++index+1).join('/'))
 })
 }
 }*/
//如果加上判断是否存在 先判断a是否存在 在判断a/b  a/b/c


function mkdirp(p) {
    p = p.split('/');
    for (var i = 0; i < p.length; i++) {
        var dirPath = p.slice(0, i + 1).join('/');
        //在创建之前我们需要判断文件是否存在，如果存在则不创建
        var flag = fs.existsSync(dirPath);//同步创建
        //如果目录存在则继续创建
        if(!flag){
            fs.mkdirSync(dirPath);
        }
    }
}
//当我们创建或删除一个文件或文件夹时  要先判断他存不存在
//mkdirp('a/b/c/d');



var arr = fs.readdirSync('a');
//读取目录里 的子目录里的文件和文件夹
//如果当前文件是文件夹我们删除文件夹，如果是文件就删除文件
//判断状态 fs.statSync  fs.stat判断状态
arr.forEach((item)=>{
    //会返回当前的状态
    var stat = fs.statSync('./a/'+item);
    if(stat.isDirectory()){
        //判断是不是文件夹
        fs.rmdirSync('./a/'+item)
    }else{
        //是不是文件
        fs.unlinkSync('./a/'+item)
    }
});
//递归删除，你要先判断文件夹里是否有文件，如果里面还有文件夹
console.log(arr);