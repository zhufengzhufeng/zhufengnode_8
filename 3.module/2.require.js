require('./person.js');
delete  require.cache[require.resolve('./person.js')];
require('./person.js');
//多次导入一个模块会对模块进行环伺，防止浪费性能
//require.cache 根据模块的绝对路径进行缓存
// {'一个绝对路径':'模块'}
//console.log(require);
//要让模块多次加载可以加载后删除掉缓存的模块
//解析一个绝对路径  C:\Users\10354_000\Desktop\node8\3.module\person.js
//console.log(require.resolve('./person.js'));