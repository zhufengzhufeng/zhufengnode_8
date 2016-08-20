## markdown的配置
file - settings - plugin - browser - 搜索markdown
## 告诉git你是谁
如果不配置不能提交代码,三个点代表代码块
```
git config --global user.name "用户名" //最好使用github的用户名
```
## 查看配置
```
git config --global user.name
git config --list
```
##  创建文件夹
自定义快捷键 living template
```
mkdir test
cd test
```

## 初始化git仓库
ls -al显示全部内容 会产生一个.git的隐藏文件，用来管理我们的文件
```
git init
```
## 暂存区
为了保护工作区和历史区，过渡作用

## 查看git的状态 
```
git status

```
## 新建文件
```
touch index.txt
```
## 像文件内写入内容
```
echo hello > index.txt
```
## 查看文件内容
cat index.txt
> 红色表示未加入暂存区内

## 添加文件到缓存区中
```
git add file
git add . / -A
```
## 提交到版本去
```
git commit -m"此次提交的注释内容"
```
> 提交到版本库中通过git log 进行查看
```
git log --oneline
```
## 比较
比较工作区和缓存区
```
git diff
```
比较缓存区和历史区
```
git dif --cached
```
比较工作区和历史区
```
git diff master
```
## 撤销
从缓存区中撤销add内容
```
gir reset HEAD 文件的名字 .
```

## 撤回文件
如果工作区有更改 ，我想用暂存区域或者历史区的内容去覆盖掉我们的工作区域
先查找暂存区 ，查找不到 查找历史区
用暂存区 替换掉工作区里的内容
```
git checkout 文件名字
```
## 合并提交
如果我们使用git commit 会产生一个新的版本，但是我们此次的提交，还想算作上次的提交 
```
git commit --amend //可以选择是否用以前的提交注释
```
> 如果进入编辑模式按esc键 输入:wq

## 删除缓存区，但是要保证工作区里内容必须不存在
```
git rm
```
## 只删除缓存区
```
git rm --cached filename
```
## 同时删除暂存区和工作区
```
git rm -force 文件的名字
```

## 从版本库拉回代码 回滚 回到过去
git log 查看版本号
```
git reset --hard 版本号
```
## 在回到未来
通过git reflog 查看未来的版本，使用reset回到未来
```
git reflog
```

## 创建仓库后需要关联远程仓库
```
git remote add origin '仓库的地址'
```

## 推送到远程仓库
```
git push origin master
```
> -u的意思是upstream 如果下次再提交可以直接使用git push


## 从工作区 直接提交到历史区（必须走一下过渡区）
```
git commit -a -m"add 7788"
```
## 有冲突我们需要先把最新的拉下来
先使用git fetch拉下来 我们可以先比较一下不同在合并
```
git fetch
git merge
```
> 解决冲突 去掉>>>>  ==== <<<< 保存剩余的再次提交即可
git pull  = get fetch + git merge





