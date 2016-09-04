//加密可以通过node自带的模块进行加密crypto
var crypto = require('crypto');
//md5是一种摘要算法
//1.不同的值 输出的md5都不相等，相同的值肯定相同
//2. md5是不可逆的
//3. 不同的值输出的值的长度是一样的
console.log(crypto.getHashes());
//使用md5算法 将123  输出一个值
console.log(crypto.createHash('md5').update('123456').digest('hex'));
//202cb962ac59075b964b07152d234b70
//c4ca4238a0b923820dcc509a6f75849b

//加盐算法
//cookie使用的就是 sha256  加转base64的方法
console.log(crypto.createHmac('sha256','jw').update('admin').digest('base64'));
//s:123.qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js
//      qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js=

/*
GET /user
Cookie: user=s:admin.1L7qjehzMokmPCUBv5UUDAwTol4kPDLqB3eA7L8M6LE*/
