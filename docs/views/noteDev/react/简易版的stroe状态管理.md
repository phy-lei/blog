---
title: 实现一个简易版的react-redux
date: 2021-01-12
tags:
 - react
categories:
 - react
permalink: /20210112
---

## 状态管理

现在我们很多项目中都会用到状态管理库，reacct有redux，vue有vuex，其实只要知道它的核心，我们也可以自己做一个超简易版的状态管理store，其实最主要的核心就是，利用了闭包去管理state，然后如果要修改state的话，就dispacth我们的action，在store里reducer修改state，重新赋值state。下面我们来试一下吧，这里不考虑视图层，视图层的渲染compiler类也算是一个比较复杂的东西。

刚开始的配置是：

```js
  <button id="btn">查看当前state</button>
  <button id="add">add</button>

    var btn = document.getElementById('btn')
    var addBtn = document.getElementById('add')
    function store() {
      let state = {
        count: 1
      }
      function dispatch(type) {
        reducer(type)
      }

      function getState() {
        return state;
      }

      function reducer(type) {
        switch (type){
          case 'add':
            return state = {
              ...state,
              count: state.count + 1
            }
        }
      }

      return {
        dispatch,
        getState,
      };
    }

    const myStore = store()
    
    btn.addEventListener('click',function(){
			console.log(myStore.getState());
    },false)
    
    addBtn.addEventListener('click',function(){
			myStore.dispatch('add')
		},false)
```

是不是很简单呢？btn按钮可以获取store的state，而add按钮是state的count+1，state的count变化了后，我们再去获取state的count的时候，他已经是改变后的值了，这利用了闭包去保存state的变量，还有就是state必须是一个对象，引用类型的数据特性，可以当多个组件引用同一个state下的count时，当count变了，其他组件依赖该state的count也会跟着变。