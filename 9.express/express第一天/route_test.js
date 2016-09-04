var address = '/user/:id/:name/add/:address';
var url = '/user/1/2/add/3';
var params = [];
//将路径替换成正则表达式 组成一个params数组 [id,name,address]
address = address.replace(/:([^\/]+)/g,function () {
    params.push(arguments[1]);
    return '([^\/])';
});
console.log(params);
console.log(address);
//匹配路径 匹配出要捕获的内容 /user/1/2/add/3 [,1,2,3]
var arr = url.match(new RegExp("^"+address+"$"));
console.log(arr);
var obj = {};
params.forEach(function (item,index) {
    obj[item] = arr[index+1];
});
console.log(obj);


