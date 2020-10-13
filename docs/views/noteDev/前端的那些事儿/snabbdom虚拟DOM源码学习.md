---
title: snabbdom虚拟DOM源码学习
date: 2020-10-13
tags:
 - 前端的那些事儿
categories:
 -  前端的那些事儿
permalink: /20201013
---

## snabbdom介绍
Snabbdom由一个非常简单，高性能和可扩展的内核组成，仅约200 SLOC。它提供了具有丰富功能的模块化体系结构，可通过自定义模块进行扩展。为了使核心保持简单，所有非必要功能都委托给模块。而且vue的虚拟dom也是参考了他，下面我们就来试试使用下他吧。

### 构建
我使用parcel打包构建我的项目，npm两个包，一个是parcel-bundler，一个是snabbdom。
目录结构(非常简单)：
```ruby 
|── /src/              
|   |── demo.js         
|   └── demo2.js  
|── index.html    
|── package.json       
└── proxy.config.js     
```
1.使用虚拟dom创建一个div标签
```js
import { h } from 'snabbdom/build/package/h.js'
import { init } from 'snabbdom/build/package/init.js'

//1.hello world
//返回值：patch函数，作用对比两个vnode的差异更新到真是DOM
let patch = init([]) 
let vnode = h("div#container.cls", "Hello World")
let app = document.querySelector("#app")
//第一个参数：可以是DOM元素，内部会把DOM元素转换成vnode
//第二个参数：VNode
//返回值：VNode
let oldVnode = patch(app,vnode)

vnode = h('div', 'Hello Snabbdom')

setTimeout(()=>{
  //2秒后会更改dom
  patch(oldVnode, vnode)
},2000)
```

### 源码学习
要高效且快速阅读源码，我们需要对vscode的快捷键有一定的熟悉，遇到一个函数名时，我们可以按住CRTL加鼠标左键可以快速去到该函数定义的地方，然后想要回去刚刚我们阅读源码的位置时，我们可以按住ALT+方向键← 就可以回去了，这样阅读起来有点像读书一样，方便很多。
介绍下h()函数，h函数应该不陌生，在vue中，render: (h)=>h(app), 这里就是用到h函数处理app为vnode:
```js
//sel 选择器 b data定义的一些标签属性，如attr c children
export function h (sel: any, b?: any, c?: any): VNode {
  var data: VNodeData = {}
  var children: any
  var text: any
  var i: number
  if (c !== undefined) {
    if (b !== null) {
      data = b
    }
    if (is.array(c)) {
      children = c
    } else if (is.primitive(c)) { //primitive判断是否是文本
      text = c
    } else if (c && c.sel) {
      children = [c] //这里就是子节点了
    }
  } else if (b !== undefined && b !== null) {
    if (is.array(b)) {
      children = b //如果只传两个值，数组的话就是子节点
    } else if (is.primitive(b)) {
      text = b
    } else if (b && b.sel) {
      children = [b]
    } else { data = b }
  }
  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = vnode(undefined, undefined, undefined, children[i], undefined)
    }
  }
  if (
    sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
    (sel.length === 3 || sel[3] === '.' || sel[3] === '#')
  ) {
    addNS(data, children, sel)
  }
  return vnode(sel, data, children, text, undefined)
};
```

