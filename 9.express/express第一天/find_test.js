var arr = [{name:'zfpx'},{name:'8'},{name:'8'},{name:30}];

var item = arr.find(function (item) {
    if(item.name==8){
        return 21; //返回当前找到的那一项
    }
});
console.log(item);



