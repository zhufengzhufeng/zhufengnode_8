var str = 'username=hello&password=zfpx';

var queryString = require('querystring');
//JSON.parse
//三个参数第一个要解析的内容
//param2 字段之间的分割
//param3 key value之间的分隔符
console.log(queryString.parse('username&hello??password&zfpx','??','&'));
//将对象转化为查询串
console.log(queryString.stringify({ username: 'hello', password: 'zfpx' },'??','&'));
