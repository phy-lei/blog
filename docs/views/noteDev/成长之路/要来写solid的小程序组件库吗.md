---
title: 要来写solid的小程序组件库吗?
date: 2024-06-26
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20240626
---

# 背景
在上一期，已经完成了taro-solid的官方插件，目前的状态已经合并进去了[pr](https://github.com/NervJS/taro/pulls?q=is%3Apr+is%3Aclosed+author%3Aphy-lei)，只要等待taro4.x发布就能够享用，但是像react/vue都有其相对应的taro的小程序组件库，而solid还没有，所以就需要做一个类似京东风格[nutui](https://nutui.jd.com/taro/vue/4x/#/zh-CN/guide/intro)的组件库，仓库在这👉[nutui-solid-next](https://github.com/phy-lei/nutui-solid-next)

# 目录结构
```bash
.
├── eslint.config.js //eslint配置
├── package.json
├── packages
│   ├── config.json //组件/nav配置
│   ├── icons-solid //h5 icon图标
│   ├── icons-solid-taro //taro icon图标
│   ├── nutui-solid //组件库
│   └── nutui-solid-site //组件库文档/官网
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```
目前的L2目录结构有这些，主要需要做的是在nutui-solid目录下建设组件库，而config.json文件主要是一份nutui-solid下components目录下所有的组件，但是目前**每次新增一个组件文件，都需要在config.json中手动添加对应的组件信息**，这种方式不够自动化，后续会考虑使用脚本进行自动化写入。

# nutui-solid-site
文档的官网设计，我没再使用传统spa框架，而是使用了Astro meta框架，为什么呢？因为我发现无论是vue/react，他们都是使用各自的框架去实现这个文件官网，而文档官网很多都是需要md/mdx来输出编译的，其实他们的展示是一样的，但是由于切换了一个框架，实现就大相径庭。还有一个重要问题在于solid的md编译器是依赖于其solid-start的框架实现，如果我选择了这个，也是不能够统一。
而Astro有一个很重要的东西，是他拥有许多ui适配器，vue/react/svelte/solid等等都有。看看目前文档官网的ui设计

<img :src="$withBase('/assets/20240626/01.png')" alt=""></img>

除了中间的docs区域，其他都是固定形态的，这方面可以用Astro的形式建设，而docs区域，让其成为孤岛，加载对应的adapter就好了，这也是Astro的**群岛**架构。
> 在之后如果还需要新增nutui的组件库，可以直接复用这套文档架构，新增个适配器，比较简单进行迁移

> 不过目前架构是ssr模式，其实也可以改为ssg，但是写的东西要多很多，暂定用ssr模式。如有需要再进行改动。

## 组件文档的目录结构
在nutui-solid-site下，我把文档都从组件侧迁移到这里统一管理了，因为这里有用到mdx，而mdx的组件是在改目录下，所以就放这里面管理了。
```bash
.
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── images
│   │   ├── locale
│   │   └── styles
│   ├── components
│   │   ├── CodeBlock.astro
│   │   ├── Demo.astro
│   │   ├── DemoBlock.tsx
│   │   ├── demoblock.scss
│   │   └── nav
│   ├── config
│   │   └── env.ts
│   ├── content
│   │   ├── config.ts
│   │   ├── en //英文h5文档
│   │   ├── taro //taro文档
│   │   ├── zh-cn //中文h5文档
│   │   └── zh-tw //tw h5文档
│   ├── env.d.ts
│   ├── layouts
│   │   ├── Layout.astro
│   │   └── MobileLayout.astro
│   ├── pages
│   │   ├── demo  //组件的demo preview 路由
│   │   ├── h5 //h5的文档路由
│   │   └── taro //taro的文档路由
│   └── utils
│       └── index.ts
└── tsconfig.json
```
在content的目录结构下，md的文档都放这里面，多语言跟taro的，路由就是在pages下面了，pages的路由跟contens有关联，主要采用的是Astro的那一套内容集合。

# nutui-solid
目录结构：
```bash
.
├── global.d.ts
├── package.json
├── plugin
│   └── vite-plugin-solid.ts //cv的vite-plugin-solid，babel需要用我们的babel
├── scripts //一些命令脚本
│   └── generate-themes.cjs
├── src
│   ├── components //组件
│   │   ├── button
│   │   └── nutui.solid.build.ts //组件的暴露入口文件
│   ├── styles
│   │   ├── animation
│   │   ├── mixins
│   │   ├── reset.css
│   │   ├── variables-jdb.scss
│   │   ├── variables-jddkh.scss
│   │   ├── variables-jdt.scss
│   │   └── variables.scss
│   └── utils
│       ├── is.ts
│       └── style.ts
├── tsconfig.json
├── vite.config.build.css.ts
└── vite.config.ts
```
vite-plugin-solid这个文件，由于我们在taro侧需要用到自己的babel，而这个babel也能兼容web端，所以不需要再引入官方的babel-preset-solid了。而nutui.solid.build.ts的入口文件，是打包入口文件，**目前每次新增一个新的组件，都需要手动在这里面export一个新的组件出去**，也是不够自动化，后续会改为脚本自动生成。

# icon
关于icon，官方是使用的iconFont的形式，对于这种形式，我总感觉现在有更好的方案，不知道jym是否有建议呢？可能我会参考一下iconify的实现。

# 总结
以上是该仓库的一些简要介绍，目前的组件有106个，button组件我是作为示例实现出来了。后面的nutui的组件翻译，凭一个人的力量太有限了😭，而且基建的架构还有许多要完善，icon也还未开始，组件侧的很多示例都需要依赖这个icon，目前button其实也有，不过写死了个svg上去，后面还需要修改。如果有喜欢solid的jym，来拓展一下solid的生态吧👏👏👏
