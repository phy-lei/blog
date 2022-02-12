---
title: promise的骚操作
date: 2022-02-12
tags:
  - 前端的那些事儿
categories:
  - 前端的那些事儿
permalink: /20220212
---

## promise

promise，期约，给我们带来了异步编程的好处，关于源码的实现，网上有很多例子，但是今天我们不是去实现他的源码，我们是做一些 promise 的骚操作。

### 场景

一个弹窗，在关闭弹窗的时候，执行开窗时的回调。大概长这样:

```js
mapDialogInstance.open({
  responseData: obj,
  cb: () => {
    dothing;
  }
});
```

::: tip
然后在关闭弹窗事件中执行这个回调，这个方法可以是可以，但是这属于拓展方法，之前的 dialog 是使用 render 去渲染的，并且 close 的方法还是在 vue 文件中，这样子的话，就又要 props 下发这个 cb，显然这不太优雅，因为别人执行的回调，不是在关闭事件，而在其他事件呢？这之后岂不是又加多一个 props 的 cb？这就有点憨憨的感觉了。
:::

所以基于此，能不能使用.then 代表的就是关窗的方法呢？他长这个样子：

```js
mapDialogInstance
  .open({
    responseData: obj
  })
  .then(() => {
    dothing;
  });
```

::: tip
这看上去就很舒服了，then 方法后面定义成了是 closeCallBack，像其他的 cb 就用 props 下发好了，将回调的命名语义化，如果像这个的话就叫 closeCallBack，这样就没歧义，这么一说，上面其实也是可行...
:::

### 实现

现在我们是怎么实现这个 then 方法就是 close 的回调呢，按照传统观念，我们知道，promise 怎么暂停执行，在合适的时机，我们才继续调用？这就是一个问题。不过仔细看过 promise 的源码的话，我们不难发现，他的实现策略，<span style="color:red">不就是一个发布订阅模式吗？</span>then 就是我们订阅这个事件，而 resolve 就是发布事件，这就是他的原理，那我们只要在合适的时机，去执行 resolve，那么我们是不是就能达到我们的效果了？想到这，就去试试！

```js
mapDialogInstance.open = (...args) => {
  return new Promise(resolve => {
    resolve();
  });
};
```

::: tip
如果在这里 resolve，那这个.then 会在 open 后就立即执行了，这就不能在 close 那里使用这个 resolve 了，我们应该是在 close 那里 resolve，那我们应该怎么做呢？对，我们将其全局保存起来。
:::

```js
mapDialogInstance.open = (...args) => {
  return new Promise(resolve => {
    // 全局保存
    state.promiseResolve = resolve;
  });
};
```

```js
// 关闭弹窗事件
const close = () => {
  // 将全局promise.resolve出去
  state.promiseResolve();
};
```

::: tip
ok，至此，功能已经实现了，关机！
:::
