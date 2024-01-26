---
title: 使用solidjs写小程序
date: 2024-01-26
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20240126
---

# 介绍
<img :src="$withBase('/assets/20240126/4.gif')" alt="">

# taro
说起来，我很少用过 taro 去写小程序的项目，之前都在用 uniapp 去写，而uniapp是编译时的，导致一些高级语法会有很多限制，感觉自己写的 vue 代码是一个别的版本，而在 taro3 之后，改变了这一现状，他直接采用了运行时与 dsl 框架进行连接，这就使得我们写的框架语法与小程序进行了剥离，不再那么受限，当然了，比起编译时的处理，运行时的首屏性能肯定是要差一点，但是开发体验会比较友好。
而 taro 自己也内置了 react 跟 vue 的2种编译器，taro 的架构也给予了我们第三方开发者去开发自己所需的编译器插件进行融合，那么是否也可以去写一个 taro 的 solidjs 插件，进行小程序的编译呢？

# 无虚拟 dom 的跨端
在没遇到 solidjs 之前，我一直认为无虚拟 dom 的劣势是做不了跨端，因为无虚拟 dom 的框架依赖的宿主环境是唯一的，想要去做不同的宿主环境处理，可能会比较麻烦。而对于虚拟 dom 来说，就会方便很多，我可以基于虚拟 dom 这份对于真实 dom 的抽象描述，去绘制我所需要的宿主环境的 dom，只需要我把各个不同环境的对应编译器做好就行。
<img :src="$withBase('/assets/20240126/1.png')" alt="">

我想这也有很多人都会这么认为的：
<img :src="$withBase('/assets/20240126/2.png')" alt="">

然而真正做到跨端真的就是跟虚拟 dom 强挂钩吗，个人理解并不完全是，例如我要做以下的一件事情：
**【一个 div 的文字变化】=> 【编译器】=> 【渲染】**
那框架层面是如何感知到这个文字的变化的，以 react 层面来解释的话，setState后，触发了reRender，利用虚拟 dom diff计算出需要变化的内容，再到渲染，而【编译器】的运作是在获得需要更新的信息后，而这计算后得出的信息，可以在 react-reconciler 中获得，所以taro也是在这里去跟小程序进行沟通的，得益于taro/runtime，模拟了一套dom，bom的虚拟TaroNode，用来编译到适配各个端的代码。

# solidjs 的编译
对标于react-reconciler，solid也拥有一个他的【通讯员】，他能告诉我们，我需要变化的内容，而这份变化，比起 react 来说，是没有diff计算的，这也是 solidjs 性能比react好的一个原因。

## 通讯员solid universal
我们去到 solid 的仓库查看 universal 的描述，这个在他们的官方文档并没有描述，略坑：
<img :src="$withBase('/assets/20240126/3.png')" alt="">
在这份文档我们能看到，solid universal就是用来自定义你的编译器，编译到不同平台，而例子也比较简单：
```ts
import { createRenderer } from "solid-js/universal";

const PROPERTIES = new Set(["className", "textContent"]);

export const {
  render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
  use
} = createRenderer({
  createElement(string) {
    return document.createElement(string);
  },
  createTextNode(value) {
    return document.createTextNode(value);
  },
  replaceText(textNode, value) {
    textNode.data = value;
  },
  setProperty(node, name, value) {
    if (name === "style") Object.assign(node.style, value);
    else if (name.startsWith("on")) node[name.toLowerCase()] = value;
    else if (PROPERTIES.has(name)) node[name] = value;
    else node.setAttribute(name, value);
  },
  insertNode(parent, node, anchor) {
    parent.insertBefore(node, anchor);
  },
  isTextNode(node) {
    return node.type === 3;
  },
  removeNode(parent, node) {
    parent.removeChild(node);
  },
  getParentNode(node) {
    return node.parentNode;
  },
  getFirstChild(node) {
    return node.firstChild;
  },
  getNextSibling(node) {
    return node.nextSibling;
  }
});
```
> 只要在【通讯员】提供给我们的钩子中补足所需要的 dom 及其对应的操作就能连接到不同平台中来了。

# 期间遇到的问题
在最开始的架构设计中，我期望将render与plugin都写在一起，这样就不用开2个包了，用户也不用npm 2 个包才能使用，然而，因为babel-preset-solid设置的moduleName导致行不通。
```js
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "solid",
        ts: true,
      },
    ],
    // 设置自定义custom-render编译
    [
      "babel-preset-solid",
      {
        moduleName: "tarojs-solid-custom-render",
        generate: "universal",
      },
    ],
  ],
};
```
> 该moduleName设置只能是一个npm包，要么设置webpack的alias，但是这样设置会把plugin里面饮入的render设置一次，用户侧也设置一次，他们两个的路径还不一致，导致冲突。

不得已只能做2个包了，使用pnpm的monorepo架构，由于项目还有个example，也能方便自己在修改plugin后，进行测试。
遇到最蠢的问题是，plugin侧，忘记把render包pnpm i进来了，导致报错，这个报错的信息并不是报module not found，而是其他奇怪的报错信息，处理这个问题，花了我2天时间。没想到仅仅只是我忘记安装这个包了😫。
然后就是render包的一些写法了，不过这里很多都是参考了之前给taro提pr的那位老哥的<a href="https://github.com/NervJS/taro/issues/12834" target="_Blank">代码</a>。我发现最终实现的版本居然长得很像，一开始的设计并不是这么设计的，但是随着开发的深入，debug次数越来越多，与这位老哥遇到的问题都是莫名的一致，特别是包括h函数的实现，我还去solid的仓库搜了是否有h函数的实现，也在其中找到这位老哥的讨论<a href="https://github.com/solidjs/solid/discussions/1612" target="_Blank">地址</a>。

# 未来计划
未来会持续迭代该项目，也欢迎大家在使用的过程中，遇到有任何问题，都可以在这里👉提<a href="https://github.com/phy-lei/tarojs-plugin-solid/issues" target="_Blank">issues</a>。
开发计划：
- [ ] 优化h函数
- [ ] 优化render的实现
- [ ] 优化setprops的方法
- [ ] 探索原子css的实现

而这期中，更希望taro能够支持vite，因为solid在vite的实现更加便捷，在原子css中也一样，插件化的适配让用户侧更友好，只要在根配置文件配置就好了，也不需要config下配置一次，babel也配置一次。期待配置的样子：
```ts
export default defineConfig({
  integrations: [
    tarojs({
      framework: "solid",
      ts: true,
    }),
    UnoCSS({ injectReset: true }),
    solidJs({
      moduleName: "@/solid-custom-dom",
      generate: 'universal'
    }),
  ],
});
```
