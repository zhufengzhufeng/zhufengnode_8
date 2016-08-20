## 第一次提交作业
fork老师的代码
## 组长将fork好的代码当到本地
```
git clone '地址' 重命名文件夹
```
> 不要改变已有的文件，防止冲突，只看不要改
## 组长建好后
```
git add
git commit
git push 推送到组长自己仓库中
```
## 组长给组员添加权限
settings - collabrators  add collabrators 组员就会拥有组长权限，可以操作同一个仓库

## 组员提交作业后，在次将作业提交给老师
- 可能你现在仍然有要提交的东西，可能没有东西
先拉取本地仓库的最新代码
在拉去老师的最新代码。添加老师为远程仓库
```
git remote add teacher "老师的地址"
git pull teacher master
git push origin master
```