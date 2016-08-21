//需要一个模块就要把这个模块require进来,通过相对路径引用模块
var A = require('./person.js');
var a = new A();
a.eat = '吃喝';
a.home[0] = '睡觉';
console.log(a.home);
 //{} //导出的是不是exports对象
//真正require进来的是module.exports对象
//一个global上的变量 一个是形参
//一个文件外面默认外面有一个闭包函数，所以可以模块化
/**
 *(function(require,module,exports,__dirname,__filename){
 * userPeson.js
 * exports  = module.exports = {};
 * module.exports = 100;
 * return module.exports;
 *})()
 * */
//require()是同步的
//有返回值的是同步方法
//如果带有回调函数的是异步
