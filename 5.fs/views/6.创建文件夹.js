//异步创建文件夹
//a/b/c/d
//如果现在有a/b/c
//反着创建 a/b/c/d看他的父亲存不存在 ，直接创建d
//a/b/c/  不存在  看ab存不存在 如果a/b存在 创建c  c创建好后创建d
var path = require('path');
var fs = require('fs');
function mkdirs(p,fn) {
    //先判断a/b/c/d是否存在
    fs.exists(p,function (exist) { //判断当前目录是否存在
        if(exist){
            fn();
        }else{
            //看当前目录的上一级是否存在
            mkdirs(path.dirname(p),function () {
                fs.mkdir(p,fn)
            });
        }
    });
}

/*mkdirs('.',function () {
    mkdirs('a',function () {
        mkdirs('a/b',function () {
            成功()
        })
    })
});*/



// a/b 里存放的是
// a 创建a/b的函数
// .  创建a的函数

mkdirs('a/b/c',function () {
    console.log('创建成功');
});








