---
title: 记一次compose异步函数函子
date: 2021-11-24
tags:
  - 前端的那些事儿
categories:
  - 前端的那些事儿
permalink: /20211124
---

## 感想

上一次写博客还是在上一次，似乎时隔了很久，工作上，埋头苦干，生活上，自闭少年，感情上，难以言喻。闲暇时间也没再去学习，堕落了很多，现在的状态还是没有过多的改变，每天都很忙，但自身的提升，却没有提升多少，昨天写了段代码，一个之前一直没解决的问题，突然之间就解决了，感觉很奇妙，所以很想记录下来。

### compose

在网上有很多实现 compose 的源码，而我之前第一版本的 compose 也仅仅就是对于同步函数的组合，他的外貌长这样：

```js
/**
 * fn1(fn2(fn3(path)))
 * @date 2021-09-08
 * @param {any} path 初始参数
 * @param {any} ...fn 步骤函数列表
 * @returns {any}
 */
const compose = (path, ...fn) => () => fn.reduce((acc, cur) => cur(acc), path);
```

::: tip
这对于 fn 的数组都是同步的话，这没有任何问题，但是一般场景下，我们很可能 f1，f2 是异步函数，我会优先使用 async await 改写异步代码，使其串行。举个 fn 之中里面的某个 f1。
:::

```js
async function getUserInfoByOpenId(request, openId) {
  const res = await request.post({
    url: "/sys/wxLogin",
    data: {
      openId
    }
  });
  if (res.data.code === 0) {
    return res.data.data;
  }
  return null;
}
```

::: tip
这个 async return 的数据，会作为下一个 f2 的参数，但是试想一下，此时 f2 的参数他是一个什么数据？是的，他此时还是一个 promise，那么能不能把这个 promise 解出来呢，之前的我，一直解不出来，无论试验了多少个奇葩写法，还是一个 promise。
:::

### compose.ver2.0

我后来改写了下 compose，将 reduce 的参数改为 async，企图让他能够将上一个的函数返回值 promise 解构出来。

```js
const compose = (path, ...fn) => () =>
  fn.reduce(async (acc, cur) => await cur(acc), Promise.resolve(path));
```

::: tip
然而，打印 acc，还是 promise，问题还是没有解决，我已经渐渐放弃了，还有很多个其他版本，我就不放出来了/(ㄒ o ㄒ)/~~
:::

### compose.ver3.0

上一版的 compose 仔细思考代码后，发现 await cur，其实方向错了，我需要解构的是 acc，而不是 cur，自此一个大胆的想法产生了。

```js
/**
 * 串行实现异步的compose 我试验了好久 没想到参数里可以用await
 * @date 2021-11-23
 * @param {any} request 数据请求器 每个函数都用到的
 * @param {any} firstParams 初始参数
 * @param {any} ...fn 步骤函数
 * @returns {any}
 */
const compose = ({ request, firstParams }, ...fn) => () =>
  fn.reduce(
    async (acc, cur) => await cur(request, await acc),
    Promise.resolve(firstParams)
  );
```

::: tip
重点来了，参数可以使用 await，参数可以使用 await，参数可以使用 await！！！
:::
这样我的 compose 最终版完成了，这个版本的 compose 支持异步函数数组，并且串行执行，也可以很方便的做一些管道的异步的流程工作。也刚好实现了项目上的一个责任链模式的调用工作流程。

### compose.ver4.0

在使用函数式编程时，我们一般都需要遵守纯函数原则，不让函数产生过多的副作用，但是 fn 数组中的函子，不可能仅仅取数据，而不对外部进行一些修改操作，此时，如果对外部进行操作，那么，显然违背了我们的函数式编程，那么，我们应该如何是好呢？能否通过传参，去处理逻辑，答案肯定是可以的，我们可以穿插 callback 回调函数，当需要修改外部变量的时候，我们就在 compose 层，传入对应函数的 callback。那么首先，我们先改写下 compose，使其支持更多的公共参数，上面的 ver3.0 还只是支持一个公共参数。

```js
export const compose = ({ firstParams, ...args }, ...fn) => () =>
  fn.reduce(
    async (acc, cur) => await cur(await acc, { ...args }),
    Promise.resolve(firstParams)
  );
```

::: tip
通过 es6 的解构对象剩余 key，给 compose 的第一个参数，传入更多公共参数 args，这样只要哪个函子用到，只需要解构下对应的 callback 函数名即可，很方便!
:::

下面看看一个用法吧:

```js
// 第二个参数就是存的公共参数，包含请求器，及回调函数
async function getOpenId(code, { request, getOpenIdCallBack }) {
  const res = await request.get({ url: "/sys/getOpenId" });
  if (res.data.code === 0) {
    getOpenIdCallBack(res.data.data);
    return res.data.data;
  }
  return null;
}

// 通过在这一层去处理外部变量，尽量使内部的函子保持纯函数的特性，不会带来更多其他的副作用
const process = await compose(
  {
    firstParams,
    request,
    // getOpenId函子的cb
    getOpenIdCallBack: payload => {
      this.name = payload.name;
      // todo other
    }
  },
  getOpenId,
  getUserInfoByOpenId
);
```

大概用法就是这样了，其实还有优化的地方，这个 compose 让调用者调用的体验整体来讲并不是很友好，如果是给其他小伙伴用，他们可能会很疑惑，这其中的规则，所以，可以用 ts 定义好，这样在调用的时候，就用良好的代码提示，或者是写一个编译函数 compile，设计一个体验感最好的调用方式，在解析成这个 compose 支持的格式也可以的。
