var EventEmitter = require('events');
var util = require('util');
//EventEmitter node中封装的事件库
//让函数 继承EventEmitter

function Girl() {
    
}
util.inherits(Girl,EventEmitter);
var girl = new Girl();
function comeon() {
    console.log('来了个boy');
}
girl.setMaxListeners(1);//这是最大时要在前面设置在进行绑定，默认最大值为10，只是警告
//移除所有监听
girl.on('我很漂亮',comeon);
girl.once('我很漂亮',comeon); //once执行后会删除掉自己
console.log(girl.listenerCount('我很漂亮'));
//输出所有绑定的函数
console.log(girl.listeners('我很漂亮'));
//girl.removeAllListeners('我很漂亮');
// girl.removeListener('我很漂亮',comeon);
//移除最近的绑定
girl.emit('我很漂亮');
girl.emit('我很漂亮');
console.log(girl.listeners('我很漂亮'));
console.log(girl.listenerCount('我很漂亮'));
/*var fs = require('fs');
var school = {};
var e = new EventEmitter();
e.on('result',result);
fs.readFile('./name.txt','utf8',function (err,data) {
    school.name  = data;
    e.emit('result');
});
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age  = data;
    e.emit('result')
});
function result() {
    if(Object.keys(school).length==2)
    console.log(school);
}*/
