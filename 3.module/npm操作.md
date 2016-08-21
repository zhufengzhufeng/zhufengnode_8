## npm node package manager
-  用来管理所有包的
我们想把所有依赖都用一个文件来描述出来,初始化一个描述文件
- 创建package.json
```
npm init
```

## 依赖列表
- 所有的依赖要放入到依赖列表中
安装时加入到列表里

- 全局安装
所有带-g的都表示全局安装，可以在`命令行`下直接使用
```
npm install gulp -g
```
> 在任何地方安装都可以 因为安装到全局下
## 查看目录安装
```
npm root -g
```

node npm 都可以在命令行下使用，我把它配置到path中了
hexo是否在path中？
C:\Users\10354_000\AppData\Roaming\npm 这里是npm的安装路径我们说npm可以进行全局访问，在npm中创建了很多连接，做了个快捷方式
C:\Users\10354_000\AppData\Roaming\npm\gulp -> C:\Users\10354_000\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js
- 本地安装
本地安装就是项目中要真正使用的
- 一个叫开发依赖 例如webpack  --save-dev
- 一个叫依赖  jquery --save

## 依赖的好处可以详细描述你的项目




hexo init blog 初始化的项目是没有node_modules
cd blog&&npm install 是安装所需要的依赖
## 包的卸载
- 全局卸载
```
npm uninstall gulp -g
```
- 本地卸载
```
npm uninstall jquery --save
npm uninstall webpack --save-dev
```




## 发布包
- 创建用户
```
npm adduser
```
- 我们想发布我们包 和 jquery一样，让别人使用
```
npm publish
```
- 可以让别人进行下载


## 切换源
```
npm install nrm -g
```
## 查看所有源
```
nrm ls
```
## 使用源
```
nrm use taobao
```