//   将数据转换为查询字符串 username=123&password=345

//获取按钮
var btn = document.querySelector('.btn');
var myform = document.getElementById('myform');
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
    })
    return arr.join('&');
}



btn.addEventListener('click',function () {
    var result = serialize(myform);
    console.log(result);
},false);

