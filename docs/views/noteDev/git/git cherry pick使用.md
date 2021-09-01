---
title: git cherry pick 使用
date: 2021-09-01
tags:
  - git
categories:
  - git
permalink: /20210901
---

## 场景

一个项目上通常都会存在着多个分支，然而 A 分支作为自己的一个开发分支，B 分支上有些 commit 是 A 分支需要的，但又不能合并 B 分支，只需要某些 commit 怎么办呢？
这时就可以使用 git cherry pick 了。

### 使用

因为我习惯使用可视化 git 工具，就已 TortoiseGit 为例子，进入到需要合并的分支 A，然后打开 log 面板:
<img :src="$withBase('/assets/20210901/01.jpg')" alt="">

然后选择好对应的那条 commit，右键打开选项，选择 cherry pick this commit，当然也可以多选多条 comiit 的，框起来就可以，最后按下 continue，就可以了。有冲突解决冲突，当 done 后，就已经合并到该分支的本地了，git push 收工
<img :src="$withBase('/assets/20210901/02.jpg')" alt="">
