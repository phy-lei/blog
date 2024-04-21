---
title: taro-solid我做了什么事
date: 2024-04-19
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20240419
---

## 前情提要
在上一期版本迭代过程中，主要解决了收集项目@tarojs/components使用到的组件，忘记了的家人们，[传送门](https://juejin.cn/post/7350835151871705127)回顾下吧。

## 近况
有一天，我看到有篇[taro官方文章](https://juejin.cn/post/7330792655125463067)，主要介绍了4.x版本要发布的内容，发现他们居然准备要发布vite的特性了，在之前我就挺期待能够在taro使用vite运行，所以就打算去实现taro-solid插件的vite支持，第一件事，肯定是去看看官方仓库是怎么把各个编译器插件集成进去的，好家伙，一看不要紧，我看到了他们已经在迁移solid编译器的相关实现了，看看时间好像也就2周前，仔细看了他们solid中的实现，发现他们也跟我一开始一样，也是参考一代目的代码，自行实现了h函数。
这不就是我踩过的坑吗？[一期记录](https://juejin.cn/post/7342148728135319564)，于是我就给他们提了个issue，说明了下自实行h函数在其中会存在的bug，并自告奋勇来解决这个bug，以上就是最近在做的事情。在解决这个bug的时候，也遇到了很多问题，期间也多亏了taro技术委员会@ZakaryCode大佬孜孜不倦为我答疑，以至于能够顺利完成这个pr🫡。下面是主要遇到的问题的记录。

## 小程序端的解决
简简单单把h函数删除咯，清清爽爽，关机～。由于我们之前的插件，书写形式是采用小程序原生的标签：
```tsx
<view class="h-xl flex flex-col">
  <view class="w-full h-90 flex flex-nowrap items-center border border-gray-4 border-solid rounded-lg my-5 px-2 box-border">
    <text class="mr-2 pr-2 border-r-style-solid border border-gray-2">
      +86
    </text>
    <input
      placeholder="请输入手机号"
      type="number"
    />
  </view>
  <button>
    登录
  </button>
</view>
```
而这也只能在小程序端使用，就不太符合taro跨端的理念，所以说我们还是得走引入@tarojs/components包的组件进行使用，但是究竟如何让他能够顺利编译，我想到了2个方案。

### 套娃
在小程序端，我们引用@tarojs/components包的组件其实都是string类型的标签，在solid编译的时候，由于babel已经解析这里是使用component编译，导致报错，那么**只要将这份导出多套一层，使其成为组件**，不就好了？
```ts
export const View = (props) => <view {...props}>{props.children}</view>

export const Text = (props) => <text {...props}>{props.children}</text>
```
从结论上来说，这是能成功编译的，不过他存在一个问题，在solid经babel转换后的源码，他会多加get children，这无论在编译体积，还是运行时性能，都会存在一定的损耗，特别是组件层级嵌套过深的时候，这个带来的影响就比较明显，而且咱们还是运行在小程序端。所以这个方案也是最低选择项。
<img :src="$withBase('/assets/20240419/01.png')" alt="">

### babel
又迎来我们常驻嘉宾babel，最近老跟他打交道了属于是，在之前我们的解决策略是，在babel进行小程序组件收集，让他能够顺利编译使用原生的小程序标签。
那么我们是否可以思路反转一下，我还是使用jsx组件的引入写法，但是在babel的transformElement的时候，识别当前的节点是否是@tarojs/components里的，然后转换为小程序的原生标签，让其走createElement的分支，那么编译后的结果，从理论上来说，是跟写原生小程序标签是一致的，性能上也是最优解。但是有个问题，就是如果用户写的组件跟@tarojs/components里的一样，那岂不是编译错乱了？
babel转换组件处理后编译结果：
<img :src="$withBase('/assets/20240419/02.png')" alt="">

#### 解决组件重名


### 解决组件别名
