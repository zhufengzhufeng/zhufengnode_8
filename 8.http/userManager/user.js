//   将数据转换为查询字符串 username=123&password=345
// {username:123,password:345}
//获取按钮
var btn = document.querySelector('.btn');
/*var myform = document.getElementById('myform');
//序列化表单，指定在哪个表单下序列化
function serialize(myform) {
    //通过我们的表单获取input中的内容和表单的name属性，拼成username=123&password=345
    var lists = Array.prototype.slice.call(myform.elements);
    var arr = [];
    lists.forEach(function (item) {
        if(item.type=='text'){ //取出每一个类型为text的标签
            var temp = `${item.name}=${item.value}`;
            arr.push(temp);
        }
    });
    return arr.join('&');
}*/


//   将数据转换为查询字符串 username=123&password=345
// {username:123,password:345}
//获取按钮
var btn = document.querySelector('.btn');
var myform = document.getElementById('myform');
//序列化表单，指定在哪个表单下序列化
function serialize(myform) {
    var lists = Array.prototype.slice.call(myform.elements);
    var obj = {};
    lists.forEach(function (item) {
        if(item.type=='text'){
            obj[item.name] = item.value;
        }
    });
    return obj;
}
btn.addEventListener('click',function () {
    var result = serialize(myform);
    var xhr = new XMLHttpRequest();
    xhr.open('post','/user',true);
    xhr.setRequestHeader('Content-Type','application/json');
    //xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.responseType='json'; //设置我们响应回来的类型为json类型
    xhr.onload = function () {
        //如果类型为json则不能使用responseText
        var str ='';
        xhr.response.forEach(function (item,index) {
            str+=` <li class="list-group-item">${item.username} ${item.password}<button class="btn btn-danger" onclick="remove(${index})">删除</button></li>`
        });
        document.querySelector('.list-group').innerHTML = str;
    };
    xhr.send(JSON.stringify(result));//send里传递的是字符串 {}   [object Object]
},false);
function remove(index) {
    var xhr = new XMLHttpRequest();
    xhr.open('delete','/user?id='+index,true);
    xhr.responseType='json';
    xhr.onload = function () {
        var str ='';
        xhr.response.forEach(function (item,index) {
            str+=` <li class="list-group-item">${item.username} ${item.password}<button class="btn btn-danger" onclick="remove(${index})">删除</button></li>`
        });
        document.querySelector('.list-group').innerHTML = str;
    };
    xhr.send();
}

btn.addEventListener('click',function () {
    var result = serialize(myform);
    console.log(result);
},false);

//作业 就是完善一个对用户的增删改查