---
title: cluster集群
date: 2021-05-08
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20210508
---

## cluster
单个 Node.js 实例运行在单个线程中。为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务。下面我们来看下cluster的应用。

### code-example
有这么一个场景，后台程序如果报错了的话，就会直接退出了，代码如下：
```js
const http = require('http');
const server = http.createServer((request, response) => {
  Math.random() > 0.5 ? aa() : '2'  // 访问3000端口时，一半概率会报错，程序就直接推出了
  response.end('Hello ') 
})
  
if (!module.parent) { 
  server.listen(3000); 
  console.log('app started at port 3000...'); 
} else {
    module.exports = server 
}
```

那么这个时候我们应该怎么做呢，有没有办法让程序又启动起来呢？当然有了，这时候我们可以使用node中的cluster模块，它可以创建共享服务器端的子进程，这时候我们会使用进程来做：
```js
const cluster = require('cluster');
const os = require('os'); //操作系统os
const numCPU = os.cpus().length; //cpu核数 我这里是8个

// console.log(numCPU);
const process = require('process');
const workers = {};

if(cluster.isMaster) {
  // 主进程分支 管家
  for(var i = 0; i < numCPU; i++) {
    var worker = cluster.fork()
    console.log('工作进程启动：', worker.process.pid);

    workers[worker.process.pid] = worker
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('工作进程关闭：', worker.process.pid);
    delete workers[worker.process.pid]
    worker = cluster.fork() //fork一份
    workers[worker.process.pid] = worker
  })
}else {
  // 子进程 工作进程
  var app = require('./app')
  app.listen(3000)
}

// 当主进程被终止时，关闭所有工作进程 
process.on('SIGTERM', function () { 
  for (var pid in workers) {
     process.kill(pid); 
  }
  process.exit(0); 
});
```
::: tip
首先会把worker一个一个雇佣过来，并用一个小本本记录worker，然后监听worker哪个出故障了，就fork一份，找了新的worker替补上。这样就实现了故障恢复，多核利用的功能。
:::

### 其他方法
其实除了使用cluster去做故障恢复外，其实还有其他方法，像child_process，不过这个不能监听同一个端口，cluster可以。还有更方便的就是使用PM2。
::: tip
- 内建负载均衡（使用Node cluster 集群模块、子进程）
- 线程守护，keep alive
- 0秒停机重载，维护升级的时候不需要停机
- 现在 Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持
- 停止不稳定的进程（避免无限循环）
- 提供 HTTP API
:::
