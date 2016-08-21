//模块的分类
// 文件模块 同./方式引入的都是文件模块
// 第三方模块  需要安装的
// 核心模块http url fs  node中自带的


//核心工具模块util 工具类

var util = require('util');

//util.inherits()
//1.继承方法inherits

//js中的继承
function Parent() {
    this.name = 'parent';
    this.age = 8;
}
Parent.prototype.eat = function () {
    console.log('eat');
}
function Child() {
    this.name = 'child'
}
Child.prototype.drink = function () {
    console.log('drink');
};
//原型链
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype =  new Parent(); //继承私用的 call
// Child.prototype.__proto__ = Parent.prototype;
// Child.prototype = Parent.prototype;
util.inherits(Child,Parent); //原理就是Object.create方法
var c = new Child();
c.eat();
//解析  是用来解析对象的 console.dir
var obj  = {
    name:'zfpx',
    language:{
        name:'chinese'
    }
}
//增加属性
Object.defineProperty(obj,'age',{
    value:'8', //当前定义属性的值
    enumerable:false,//是否可枚举
    writable:true,//是否可写
    configurable:false,//是否可配置
});
// delete obj.age
//showHidden 显示隐藏属性
//depth 解析的深度
// colors 输出的时候带颜色
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true}));

//判断类型
console.log(util.isArray([]));
console.log(util.isError(new RegExp()));
console.log(util.isRegExp(new Error()));


//第三方模块
//我们引入第三模块是不要路径的./直接引用模块的名字
var mime = require('mime');//会自动搜索package.json里的main属性 mine.js
//自己写的模块 要注意
//当我们安装一个模块会就近安装 找最近目录一直往上找，知道找到node_modules文件夹，如果找不到在自己的目录下创建
console.log(module.paths);//模块的查找路径

var jwpack = require('jwpack');
console.log(jwpack);
//先查找第三方模块中的index.js  index.json 之后在查找对应main的字段


//第三方查找规则
//1.先查找模块的名字,找不到往上找，找到跟目录
//2.查找index.js index.json
//3.如果没有index 会找package.json里的main字段
//我们的文件模块不用指定后缀名默认会自动添加.js后缀，如果找不到在添加.json后缀

//文件 ./  第三方 需要安装 内置 直接使用



