//我们创建一个文件就表示声明了一个模块

function A() {
    this.smile = 'smile';
}
A.prototype.eat = function () {
    console.log('吃');
};
A.prototype.home = ['xxx','xxx','xxx'];

console.log('hello zfpx');
module.exports = A;
