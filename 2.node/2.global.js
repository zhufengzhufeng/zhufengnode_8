console.log(this); //{} 在webstorm中运行的是文件中的代码
//在node中最大就是global
// console.log(this == exports);

var a = 100;
console.log(global.a); //不能通过global访问var 声明的变量

(function () {
   console.log(this);
})();

global.console.log(100);
//文件的绝对路径 他是不可更改的
console.log(__filename);
//当前文件夹的名字
console.log(__dirname);
console.log(setTimeout);
//在js中哪些变量可以直接访问 挂载在window上的都可以直接访问，
//在函数中 形参也可以直接拿来用
//文件外面被套了一个函数，我们看不到

//文件被套了一个函数 是文件形参传入进来的
//setImmediate 立即

//console输出的是不一定谁先谁后的
/*
 console.log('log');
 console.warn('warn');
 console.error('error');
 console.info('info');
 console.dir('dir');
 console.time('start');
 setTimeout(function () {
 console.timeEnd('start');
 },2000)
 */
/*setTimeout(function () {
   console.log('setTimeout');
},20)
setImmediate(function () {
   console.log('setImmediate');
})*/
//两个方法都是异步的 第二个本上 setImmediate是个setTimeout一些机会的
//两个名字相同 会计算所用的时间

console.log(process.pid);
/*setInterval(function () {
   
},10000);*/




//process 是global上的属性 cwd
//current  working directory
console.log(__dirname); //不可更改的
console.log('cwd',process.cwd()); //可更改的
//也可以进行手动修改
process.chdir('..');
console.log(__dirname); //不可更改的
console.log('cwd',process.cwd()); //可更改的

process.memoryUsage(); //内存的使用 可以监控内存的变化
var arr = [];

/*for(;true;){
   arr.push({});
   console.log(process.memoryUsage());
}*/
//rss 常住内存 heapTotal堆内存的总和  heapUsed内存的使用

//nextTick下一个队列 ,在当前表的底部
process.nextTick(function () {
   console.log('next');
   setImmediate(function () {
      console.log('setImmediate2');
   });
});
setImmediate(function () {
   console.log('setImmediate1');
});
setTimeout(function () {
   console.log('setTimeout');
},0);