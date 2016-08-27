// a:[fn1,fn2,fn3]  on方法就是维护了一个对象，对象里装的就是
/*
{
    eventName:[fn1,fn2,fn3],
    eventName1:[fn1,fn2,fn3]
}
触发eventName函数的时候  在对象中取出eventName,让对应的方法池里的内容依次执行
off 在对象中取出eventName,让对应的方法池里移出掉对应的方法*/

function Event() {
    this._events = {}//创建一个事件池
}
Event.prototype.on = function (eventName,callback) {
    //首先我们需要判断当前事件队列里有没有eventName
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        //如果当前的任务队列池里没有 要开辟一个数组
        this._events[eventName] = [callback]
    }
};
Event.prototype.emit = function (eventName) {
    //借用数组的slice方法截取除了eventName后面的所有参数
    var args = Array.prototype.slice.call(arguments,1);
    //箭头函数是没有this指向的所以内部的this就是当前实例
    this._events[eventName].forEach(fn=> {
        fn.apply(this,args);
    })
};
Event.prototype.removeListener = function (eventName,callback) {
    //通过属性名取出对应的数组将其和callback相同的移除掉
    //过滤掉我们要移除的函数
    //filter是数组的方法 map  filter forEach find
    this._events[eventName] = this._events[eventName].filter(function (fn) {
       return fn!=callback;// 返回false表示留下返回true表示移除掉
    });
};

var e = new Event();
function handsome(who) {
    console.log(who+'很英俊');
}
e.once('很帅',handsome);
// e.removeListener('很帅',handsome)
e.emit('很帅','他');
e.emit('很帅','他');
//once方法 多次触发只触发一次，就是绑定后执行一次 ，在将自己移除掉