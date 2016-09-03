var express = require('./express');
var app = express();

app.listen(8080);

app.get('/user/:id/:name/add/:address',function (req,res) {
    //会把请求来的数据/user/1/2/add/3  {id:1,name:2,address:3},放入到req.params参数上
    res.end(JSON.stringify(req.params));
    /*
    * 先判断路径是否带有: 带：为带查询参数的路径
    * 取出id name address作为一个数组保存下来 [id,name,address];
    * 将现在的查询路径转换成正则用来匹配求其到来的时的路径[1,2,3]
    * 将其挂在在req.params里
    *
    * */
});

