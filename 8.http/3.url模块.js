var url = require('url');
//url模块是node中核心模块 用来解析路径的
var str = 'https://username:12345@www.baidu.com:80/s?wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309#top';
//解析成路径对象
console.log(url.parse(str,true));
//true 的意思是让query变成一个对象格式方便我们取到值



/*
https://www.baidu.com/s?wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309*/



/*Url {
    protocol: 'https:', 协议
        slashes: true, 是否带有/
        auth: null,    作者账号:密码
        host: 'www.baidu.com', host是带有端口号的
        port: null,  端口号
        hostname: 'www.baidu.com',  主机名
        hash: null, hash值
        search: '?wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309',   查询字符串但是带有?
        query: 'wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309',    没有问号
        pathname: '/s',  我们的请求路径
        path: '/s?wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309',
        href: 'https://www.baidu.com/s?wd=123&rsv_spt=1&rsv_iqid=0xddbd78d00004b59a&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_t=9562gMeJA1Rs9yNn3BDwAm8SJldqA0ItXCBhtoijG1OU5YmQG%2FTYjVl5j61RKUPaS4uu&prefixsug=12%3C&rsp=0&inputT=1170&rsv_sug4=1309' }*/
