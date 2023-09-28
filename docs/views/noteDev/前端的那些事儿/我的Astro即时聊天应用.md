---
title: 我的Astro即时聊天应用
date: 2023-09-28
tags:
  - 前端的那些事儿
categories:
  - 前端的那些事儿
permalink: /20230928
---

## phy-chat 即时聊天应用

一开始由于个人原因，用不了微信等聊天工具，想着是否有网页版的即时聊天应用呢，随着网上搜索了一大片，很多都是聊天室之类的，1v1 的那种很少，于是就想着自己做一个吧。于是在 github 上也搜到了相关的<a href="https://github.com/joschan21/nextjs-realtime-chat" target="_Blank">代码库</a>，他是使用 next 写的，而后端服务采用的都是 serverless，数据库采用 upstash 的 redis，消息推送使用 pusher，鉴权登陆采用的 next/auth，使用的是 github 登陆。不过这个是比较简单的版本，缺少截图后，可以发送图片，删除聊天信息等功能，于是我在其进行了一些拓展。

## Astro

在一次机缘巧合下，国内突然有个说脏话的 gpt 突然火了一阵，而我也想着我自己的 chat 能加入 gpt 来聊天，于是，我也去看了下这个<a href="https://github.com/vastxie/Happy-ChatGPT" target="_Blank">仓库</a>的源码，发现他使用的框架是我所没见过的，而且运行速度也很快，对比我的那个 next 的 chat 来说，速度快了不止 1 倍，好家伙，这真是引起了我极大的兴趣，查看了下 Astro 的官网，其官网的介绍是这样的：
<img :src="$withBase('/assets/20230928/01.png')" alt="">
至此开始我的 chat 从 next 架构迁移到 Astro 架构上

### 迁移过程

起初遇到最大的难题是，next 版本的 chat 的 auth 模块，他是依赖于 next/auth，而 Astro 并没有被集成到 auth 里面去，这就有点强绑定了，在 next/auth 的仓库下却有一个 pr，是 Astro 的集成相关提交，但是一直没被合进去，时间点还是 22 年的 11 月，看来只能放弃使用 Astro 的 auth 集成了，不过项目中的上层 ui 使用的是 solidjs，solid-start 也是服务端渲染框架，只是还在 beta，但是他却拥有 auth 的集成，以后提交 pr 的时候，别人也会看重你是否是足够厉害才会允许你合进来，毕竟一个是 solid 的官方进行 auth 的开发，Astro 的 auth 只是个人的开发。
最大的问题解决后，后面其他模块包都没遇到强绑定的问题，迁移起来也很简单。

### Astro 使用的个人感受

在迁移的过程中，也会对于一部分代码进行 Astro 的翻译，主要翻译的是每个页面的布局，还有一些在需要服务端进行的数据处理。对于 Astro 的分层架构语法，这开发体验真的很友好。

- 服务端运行

```html
---
import MyComponent from "./MyComponent.astro";
const name = "Astro";
---
```

- 类 JSX 表达式

```jsx
<MyComponent templateLiteralNameAttribute={`MyNameIs${name}`} />
```

- css 样式写在 style 标签里
- 客户端运行的 js 写在 script 标签里

> 这种分层的模板语法，可读性高，上手简单。全局的 Astro 对象 api 设计也是很友好，像请求上下文之类的...

#### Astro 群岛模式

“Astro 群岛“指的是静态 HTML 中的交互性的 UI 组件。一个页面上可以有多个岛屿，并且每个岛屿都被独立呈现。你可以将它们想象成在一片由静态（不可交互）的 HTML 页面中的动态岛屿。来源官方文档的解释。
<img :src="$withBase('/assets/20230928/02.png')" alt="">
群岛模式也是我喜欢 Astro 的一个重要因素，将页面中静态的部分放在 astro 文件中，动态的我们开启群岛模式，client:load。这种模式与传统的 ssr 相比，更加灵活，使得原本提倡静态为主的，也能使得你的页面更多的交互性。

#### Astro 3.0 View Transitions

Astro 3.0 版本后 viewTransitions 已经不再是实验特性，而我页自己添加了该特性在我的 chat 里，添加了该特性后，可以定义哪个部分在页面切换是不需要变化的，类似于 vue 中的 keepAlive 缓存，这就在页面过渡的时候更偏向于 spa，而且跳转页面的加载速度也能更快。
<img :src="$withBase('/assets/20230928/03.gif')" alt="">

### solidjs 的使用

对于 solidjs，我个人觉得他的性能真的很厉害，无虚拟 dom，相信用过 react 的再去上手 solidjs，我觉得问题都不大，而且也没有什么 useEffect 的依赖项，这是最好的，useEffect 真的是另我头疼，你不知道他何时会出现问题。最重要的一点是不会 reRender，solidjs 他能追踪到 dom 级别的更新，细粒度很细，起初我还写了一个这样的 demo 去看他能否也能追踪到 dom 的更新，是在 for 循环体里做的操作。

```jsx
import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(1);
  const [arr, setArr] = createSignal([1,2,3,4,5,6,7])

  const increment = async () => {
    setArr((prev) => prev.slice(0,2))
  };

  return (
    <>
    <button type="button" onClick={increment}>
      {count()}
    </button>
    <div>{count()}</div>
    <For each={arr()}>
      {(item) => <div>
        <div>{item}</div>
        <div>{Math.random()}</div>
      </div>}
    </For>
    </>
  );
}

render(() => <Counter />, document.getElementById("app")!);
```

<img :src="$withBase('/assets/20230928/04.gif')" alt="">

> 从运行结果来看，我删除了后面的项，保留前 2 项，他也不会重新运行 random，由此可证明，他的追踪是 dom 级别的，真的是太厉害了 👍

## 总结

最后感谢 HappyChat 带来我的前端视野的开拓，让我能认识到 Astro 及 solidjs，现在新的框架出了很多，虽然用什么都是用，也不是非得去卷什么，在如今的 react 时代，不得不去感叹，大家都在避免 react 的缺点，创造更适合现在的框架。最后如果大家想去体验 chat 的话，可以去<a href="https://phy-chat-atom.netlify.app/" target="_Blank">这里</a>体验一下，需要 github 登陆，如果添加了我为好友，还能开启 gpt 的脏话体验，当然，这个 key 用完了就没了，还请不要滥用。代码仓库在这里 👉<a href="https://github.com/phy-lei/atom-chat" target="_Blank">github</a>
