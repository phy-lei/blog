---
title: pnpm + module-federation
date: 2022-08-04
tags:
  - 成长之路
categories:
  - 成长之路
permalink: /20220804
---

## pnpm

目前如果要做 monorepo，pnpm 是一个很好的选择，lerna 感觉有点难以入手，并且很多源码库(vue, element-plus...)都使用 pnpm 管理自己的发布包体，所以项目上，我也使用了 pnpm 做 monorepo，并且他的 node_modules 目录不是扁平化的，对比之前的 npm 来说，因为某个包体下面还有 node_modules 的话，他会重复安装，而 pnpm 所有的依赖都是从全局 store 硬连接到了 node_modules/.pnpm 下，然后之间通过软链接来相互依赖。并且安装依赖也很快，很方便，下面记录下 pnpm 的使用。

### 基本使用

#### 安装

::: tip
目前 7 版本有报错，自己项目上<br>
npm install -g pnpm@6.33.1
:::

#### 安装全局依赖

::: tip
pnpm install <packgeName> -w
:::

#### 安装局部依赖

::: tip
pnpm install <packgeName> -r --filter <projectName> <br>
也可以安装 dev 版本 加上-D
pnpm install <packgeName> -D -r --filter <projectName>
:::

#### package 之间内部依赖安装

比如 packages 下的@phy/utils 想要安装到 @phy/airport，先在@phy/utils 新建入口文件 index.ts，这份文件是你想导出什么方法的入口文件，然后 pnpm init -y，创建好 package.json。

```ts
// index.ts
export { default } from './useRequest/useRequest';
```

这时就可以执行局部依赖命令：
::: tip
npm install @phy/utils -r --filter @phy/airport
:::
之后在查看@phy/airport 的 node_modules 下，会多出这个 utils 的依赖包，而且 package.json 的 dependencies 会有对应的 workspace。

```json
 "dependencies": {
    "@phy/utils": "workspace:^1.0.0"
  }
```

然后在 airport 项目下使用：

```ts
import $http from '@phy/utils';
```

::: tip
顺利运行!!!
:::

## module-federation

在不久之前使用过 qiankun 做微前端的应用，目前对于个人感受来说，微前端总是给我的期待是，差那么点意思，因为他细粒度不够细，每次都是加载了另外一个微应用，虽说可以一个项目下确实做到了跨技术栈，但是带来的页面性能也是一个要考虑的点，因为这个微应用加载也需要耗时间。后来我就一直在想有没有那么一个东西，他是可以将某个模块自己独立运行部署，并且能够最大程度减少主应用的公共包体大小。然后在最近，我终于找到了 module-federation，与其叫他模块联邦，我更喜欢使用远程组件给他命名。

### 基本使用

```js
  // 主应用
  new ModuleFederationPlugin({
    name: 'airport',
    filename: 'remoteEntry.js',
    // library: {type: 'module'},
    //
    remotes: {
      // 这里其实可以多个remote
      remote: 'transport_aircraft@http://127.0.0.1:8081/remoteEntry.js',
    },
    exposes: {},
    // 当模块联邦有exposes 会热更新失效 若没有exposes项 需要加上shared 不然热更新也会失效
    // 将公共依赖配置到 shared 中。另外，一定要两个项目同时配置 shared ，否则会报错。
    shared: require('../../package.json').dependencies,
  }),
```

```js
  // 远程组件
  new ModuleFederationPlugin({
    name: 'transport_aircraft',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './About': './src/modules/About/About.vue'
    },
    shared: {
      // vue: {
      //   // singleton: true,
      //   // import: false,
      //   requiredVersion: '^3.0.0',
      // },
      ...require('../../package.json').dependencies,
      ...require('../airport/package.json').dependencies,
    },
  }),
```

在使用远程组件的时候，他其实跟我们普通的组件一样，因为他其实被打包成了一份 js 文件，当加载这个组件的时候，会发 http 请求拉取该份 js 文件，也就是说，打包的颗粒度足够小了，在首屏加载时，速度也会快很多，因为他这里已经在某方面做了分包，公共包体已经被分割成各个远程组件的 js 文件。在使用这个远程组件的时候，他其实可以直接 props 下发数据，他也是可以接受到的，组件通信还是跟普通组件一样，不像微前端，要在加载微应用的时候，就需要做特殊处理才能接收。

```vue
<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
// import About from 'remote/About';

const About = defineAsyncComponent(() => import('remote/About'));
const Button = defineAsyncComponent(() => import('./components/Button.vue'));

const count = ref(0);

const add = () => {
  count.value++;
};
</script>

<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <About :count="count"></About>
    <div>
      <button @click="add">add</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.mt-10 {
  color: rgb(8, 223, 73);
}
</style>
```

## 搭建项目的一些其他考虑

在搭建该项目时，因为项目使用的是路由模式，而且项目是那种中规中矩的 navBar，sideBar，mainContent，三部曲，中间也就是路由出口，我把中间的路由出口加载的模块，都是写在了远程组件上，那么我们每次新增一个模块的时候，对应的路由表和 webpack 的 expose 出去的远程组件，都需要手动添加，这明显有点不够智能了，至此，我想让他能够自动写入，于是，我写了这么一份脚本：

### generateModulesAndRoutes

```js
const path = require('path');
const fs = require('fs');
const outputPath = path.resolve(__dirname, '../dynamicFile/index.js');

const remoteModulePath = path.resolve(
  __dirname,
  '../packages/transport-aircraft/src/modules'
);

const files = fs.readdirSync(remoteModulePath);

// 生成远程模块 webpack的expose
const generateExposesModules = () => {
  return Array.from(files).reduce((acc, cur) => {
    acc[`./${cur}`] = path.resolve(
      __dirname,
      `${remoteModulePath}/${cur}/${cur}.vue`
    );
    return acc;
  }, {});
};

const exposeModules = generateExposesModules();

// 远程组件模式
const remoteFileContent = `

const modulesRoute = [${files
  .map((file) => {
    return `{
      path: '/${file}',
      name: '${file}',
      component: () => import('remote/${file}'),
    },`;
  })
  .join('\n')}]


module.exports = {
  exposeModules: ${JSON.stringify(exposeModules)},
  modulesRoute,
}

`;

// 普通组件模式
const normalFileContent = `

const modulesRoute = [${files
  .map((file) => {
    return `{
      path: '/${file}',
      name: '${file}',
      component: () => import('packages/transport-aircraft/src/modules/${file}/${file}.vue'),
    },`;
  })
  .join('\n')}]


module.exports = {
  exposeModules: ${JSON.stringify(exposeModules)},
  modulesRoute,
}

`;

const serveModeMap = {
  remote: remoteFileContent,
  normal: normalFileContent,
};

fs.writeFileSync(
  outputPath,
  serveModeMap[process.env.MODE_ENV] ? serveModeMap[process.env.MODE_ENV] : ''
);
```

::: tip
我将他在项目启动的时候就自动生成一份路由表和暴露的远程组件表，写入一个新的 js 文件在项目上，然后在对应的位置引入进来，
这里面我发现远程组件的动态 import()，他不支持动态值，必须是写死的，虽然在 webpack 以前低版本，这本身就应该是静态的，但后来已经升级过了，它支持动态解析模块例如：import(`xxx/${aa}`)，这他会有一个 asyncChunk 生成 xxx 目录下的所有包都会导进来，他就是懒加载，这会导致包体变大了些，但在运行时，他不影响，因为当规则被触发，他在加载对应的。但是呢，如果是远程组件，他会报错，他自己会去找这个包，但是找不到，所以 resolve 失败了。这不知道算不算一个 bug，因为前缀已经告诉过你了，这明明是远程组件的 remote 开头啊，我也想不明白为啥？？？
:::

还有就是项目有两种模式，一种是远程组件模式了，还有是普通模式，普通模式就只是导入的模块是通过绝对路径导入的，这是通过注入环境变量去判断，启动命令也对此新增了，这里就不再多加介绍了。在搭建项目的时候，不仅需要从代码，性能优化，业务架构出发，像开发体验，开发效率，也是很重要的一个考虑点。
