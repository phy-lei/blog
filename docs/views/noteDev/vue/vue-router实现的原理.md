---
title: vue-router实现的原理
date: 2021-01-29
tags:
 - vue
categories:
 -  vue
permalink: /20210129
---

## vue-router
当使用vue的时候，免不了我们的hxd（vue-router），作为单页面应用的典型，vue-router可是做了很大贡献，对比以前传统的多页面应用，每一个链接都是超链接，对应的html，一般都是后端返回该路径下的html，而单页面应用，是前端匹配路径，返回对应的html，说白了，vue-router仅仅是组件的映射表，当我仔细思考这么一段话时，发出感叹，是啊，仅仅只是一个映射而已。

### 2种模式
vue-router有2种模式，一种是默认的hash模式，另外一种是history模式，这2种模式最大的区别就是，路径是否有#号。</br>
hash模式：它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</br>
history模式：利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

```js 
  // router.js中设置mode
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
```

vue-router就是利用这个特性，他的push方法其实就是pushState方法。贴一下他的push。
```js 
 const history = window.history
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      const stateCopy = extend({}, history.state)
      stateCopy.key = getStateKey()
      history.replaceState(stateCopy, '', url)
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url)
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url)
  }
```
从index.html首页进入后，页面会加载index的内容，之后在这个页面点击的跳转链接，都不会触发后端的get，而是在前端完成，利用pushState方法，然后映射组件，这样做可以做到视图出口，改变的是哪个内容区，比如，侧边栏我是active样式点击，然后再点击跳转的时候，active还在，而不是刷新了整个页面，只是局部刷新，单页面除了再首屏加载速度慢一些外，对于其他的功能点实现再方便不过。

通常用了history模式后，直接在浏览器粘贴url，会报404，而从首页进去，再点击到该页面却不会报404，就是因为这个，因为后端没有设置重定向，此时访问的/a/b，不是从index.html模板开始出发查找，而是直接到了后端的/a/b的get请求，后端没匹配这个路径的话，自然就404，通常都是因为部署的时候，前端项目跟后端项目放在一起的缘故，如果分开放，只要前端定义了重定向，都不会有这个404。处理起来也简单，只需要后端配合一下就好了。
```js 
  // nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
```

```js 
  // 原生 Node.js
  const http = require('http')
  const fs = require('fs')
  const httpPort = 80

  http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.')
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })

      res.end(content)
    })
  }).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
  })
```



