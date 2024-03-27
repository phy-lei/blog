---
title: taro-solid小程序插件版本迭代第二期
date: 2024-03-27
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20240327
---

## 前情提要
在上一期taro-solid小程序插件版本迭代中，我们解决了h函数带来的问题，忘记了的家人们，[传送门](https://juejin.cn/post/7342148728135319564)回顾下吧。

## 问题介绍
很高兴，这次又见面了，但也很惭愧，自己写的东西居然漏洞百出，这次也迎来了个影响很大的bug，当时自己自测却没注意到。这次主要介绍的是《button input等标签渲染不出来》bug。

## 问题分析
上菜：

```tsx
import { useLoad, useDidShow } from '@tarojs/taro'
import { createSignal } from 'solid-js'
import styles from './index.module.css'

export default function Index() {
  const [color, setColor] = createSignal('red')
  const [cls, setCls] = createSignal('')

  return (
    <view class="index">
      <view>
        <text style={`color: ${color()}`}>Hello world! </text>
        <view>{Math.random()}</view>
      </view>
      <button onClick={() => setCls(styles['bold'])}>set class</button>
      <button onClick={() => setColor('blue')}>set style</button>

      {color() ? <icon type="success"></icon> : null}
      <input type="text" />
    </view>
  )
}

```
在index页面中，有icon button input等标签都渲染不出来，并且会有一个警告的信息:
<img :src="$withBase('/assets/20240327/01.png')" alt="">

::: tip
该信息其实就是表明找不到该模板标签的占位符，taro3是采用模板占位进行的dsl运行时高度语法编译。
:::

## @tarojs/components
本来在jsx的写法中，任何使用到小程序组件，我们都是使用引入@tarojs/components的组件进来使用，这个包能够跨端编译对应的组件，h5采用的是@stencil/core(目前暂不支持solid)编译的web component组件，小程序端只会使用该标签作为编译。但是目前在上一期，我们由于采用jsx import的写法，在solidjs并行不通，还引来很大的问题，所以我们目前的编译方式是跟vue3编译类似的，vue的模板语法，也不需要引入@tarojs/components中的component，直接写的自定义标签编译，但是我们却还未将这种方式迁移过来。

## webpack在jsx编译时处理
我们可以直接去到taro-webpack5-runner包查看其在小程序端webpack的特殊处理，这里有个叫做**collectComponents**的收集器：

```ts
compilation.hooks.afterOptimizeChunks.tap(PLUGIN_NAME, (chunks: Chunk[]) => {
  const chunksArray = Array.from(chunks)
  /**
   * 收集 common chunks 中使用到 @tarojs/components 中的组件
   */
  commonChunks = chunksArray.filter(chunk => this.commonChunks.includes(chunk.name) && chunkHasJs(chunk, compilation.chunkGraph)).reverse()

  this.isCompDepsFound = false
  for (const chunk of commonChunks) {
    this.collectComponents(compiler, compilation, chunk)
  }
  if (!this.isCompDepsFound) {
    // common chunks 找不到再去别的 chunk 中找
    chunksArray
      .filter(chunk => !this.commonChunks.includes(chunk.name))
      .some(chunk => {
        this.collectComponents(compiler, compilation, chunk)
        return this.isCompDepsFound
      })
  }
})
```
webpack对于import的语法，都可以用到这个方法去收集chunks，然后对于引用到的chunk利用collectComponents进行小程序component收集。例如：

```tsx
import { View, Text, Button } from '@tarojs/components'
```

这样就能收集到**View, Text, Button**的组件。看看收集器做的操作：
```ts
collectComponents (compiler: Compiler, compilation: Compilation, chunk: Chunk) {
  const chunkGraph = compilation.chunkGraph
  const moduleGraph = compilation.moduleGraph
  const modulesIterable: Iterable<TaroNormalModule> = chunkGraph.getOrderedChunkModulesIterable(chunk, compiler.webpack.util.comparators.compareModulesByIdentifier) as any
  for (const module of modulesIterable) {
    if (module.rawRequest === taroJsComponents) {
      this.isCompDepsFound = true
      // 在这里进行组件收集
      const includes = componentConfig.includes
      const moduleUsedExports = moduleGraph.getUsedExports(module, chunk.runtime)
      if (moduleUsedExports === null || typeof moduleUsedExports === 'boolean') {
        componentConfig.includeAll = true
      } else {
        for (const item of moduleUsedExports) {
          includes.add(toDashed(item))
        }
      }
      break
    }
  }
}
```
> 其核心就是在componentConfig.includes 中添加了组件，然后就会在小程序的模板中生成这些组件的占位符。

## vue3在webpack编译时处理
简简单单分析下vue3在webpack编译时，是如何收集组件的，进入到taro-vue3-plugin包中，看看webpack.mini的处理
```ts
function setVueLoader (ctx: IPluginContext, chain, data, config: IConfig) {
  const vueLoaderPath = getVueLoaderPath()
  vueLoaderOption.compilerOptions.nodeTransforms.unshift((node: RootNode | TemplateChildNode) => {
    if (node.type === 1 /* ELEMENT */) {
      node = node as ElementNode
      const nodeName = node.tag
      if (capitalize(toCamelCase(nodeName)) in internalComponents) {
        // 收集小程序使用到的组件
        data.componentConfig.includes.add(nodeName)
      }
    }
  })
}
```
精简了一下代码，因为太长了，其实就是通过vue-loader的插件去收集小程序用到的组件，那么vue文件有vue-loader编译器去收集，而在solidjs中，有编译器吗？类似vue-loader的solid-js-loader，但是solid-js-loader目前并没有。

## componentConfig内容
```ts
export const componentConfig: IComponentConfig = {
  includes: new Set(['view', 'catch-view', 'static-view', 'pure-view', 'scroll-view', 'image', 'static-image', 'text', 'static-text']),
  exclude: new Set(),
  thirdPartyComponents: new Map(),
  includeAll: false
}
```
本身在componentConfig的includes里就有包含了一些小程序的组件标签，那么只要在webpack编译后的文件中，在去收集里面有用到小程序组件，也未尝不可，毕竟不能做到像vue-loader一样，可以在编译过程中就收集，只能在编译后再收集了。我的想法是在plugin-solid的loader-meta中，有个modifyConfig自定义方法，这里可以拿到编译后的文件source。

```ts
function extractCreateElementTags (code: string) {
  const regex = /_\$createElement\s*\(\s*(['"])?(.*?)\1\s*\)/g
  const matches = []
  let match

  while ((match = regex.exec(code)) !== null) {
    if (match[2]) { // 检查是否有内容
      matches.push(match[2].replace(/"/g, '')) // 移除双引号
    }
  }

  return matches
}

function modifyComponentConfig (source) {
  const res = extractCreateElementTags(source)

  res.forEach((name) => {
    if (capitalize(toCamelCase(name)) in internalComponents) {
      // 收集小程序模板中需要渲染的组件
      componentConfig.includes.add(name)
    }
  })
  return {}
}

```
> 采用正则去匹配_createElement括号里面的内容，这里面就是view，text之类的标签，因为_createElement是solidjs编译后的创建标签的函数，所以可以如此取，但是如果页面有打印_createElement('view')，这样也会将view标签收集，**明显这种暴力方法虽然很方便，但并不准确**。

## solidjs的编译器babel-preset-solid
由于采用暴力法去收集小程序用到的组件并不准确，所以还是得从编译过程入手，让他能够语法分析获得tagName是什么。对于jsx的编译器，其实就是babel做的，毕竟本身就是js超集语法，而solidjs用到的babel就是babel-preset-solid，里面有个babel-plugin-jsx-dom-expressions，这个插件就是用来解析jsx dom的。

```js
import SyntaxJSX from "@babel/plugin-syntax-jsx";
import { transformJSX } from "./shared/transform";
import postprocess from "./shared/postprocess";
import preprocess from "./shared/preprocess";

export default () => {
  return {
    name: "JSX DOM Expressions",
    inherits: SyntaxJSX.default,
    visitor: {
      JSXElement: transformJSX,
      JSXFragment: transformJSX,
      Program: {
        enter: preprocess,
        exit: postprocess
      }
    }
  };
};
```
其入口的配置如下，分析了这个结构，我发现可以在preprocess这个文件，只要重写，加入一个tagCollector函数，这样就很方便，并且不会对源代码造成什么影响，不过自己得重新发布一个babel的插件，用户得从babel-preset-solid迁移到我这个babel插件。这也是一个缺点，要是能给babel-plugin-jsx-dom-expressions这个库提个pr拓展这个方法肯定是最好了，但是估计能不能同意合进去又另外说。

### 最终解决方法
在上面是采用引入babel-plugin-jsx-dom-expressions库，然后重写preprocess，然而这有一个新的问题，对于一些动态的标签，他并不能识别到：

```tsx
// 1.
<Component renderHeader={() => <view>header</view>} />

// 2.
<view>
  {show() ? <view>show</view> : <text>hide</text>}
</view>
```
对于上述2种情况，preprocess里面的JSXValidator并不会识别到这个标签，看来一开始的方向错误，这个preprocess只是静态的解析语法，如果这个方法行不通的话，其他的类似transformJSX应该是准确的，但是这个文件里面结构很复杂，想要重写这个文件，需要改动点太大了，不得已，采用了一个简易的方法，直接拿到这个babel-plugin-jsx-dom-expressions库打包后的文件，在这个文件进行代码修改，所幸的是，这个打包后的文件，只有一份index.js，那就直接进行修改吧。
```js
function transformElement(config, path, info = {}) {
  const node = path.node
  const tagName = getTagName(node)

  // <Component ...></Component>
  if (isComponent(tagName)) return transformComponent(path)
  // new Add tagCollector
  if (typeof config.tagCollector === 'function') {
    config.tagCollector(tagName)
  }
  // <div ...></div>
  // const element = getTransformElemet(config, path, tagName);

  const tagRenderer = (config.renderers ?? []).find(renderer => renderer.elements.includes(tagName))

  if (tagRenderer?.name === 'dom' || getConfig(path).generate === 'dom') {
    return transformElement$3(path, info)
  }

  if (getConfig(path).generate === 'ssr') {
    return transformElement$2(path, info)
  }

  return transformElement$1(path)
}

```
这个方法就是最准确获取tagName的位置了，无论是动态的还是静态的。

## 总结
在衡量一个标准时，我个人还是以准确性为第一要义。像使用暴力法，虽然很方便，而且也不需要用户额外安装另外的库，但是它的准确性存在一定的问题。不知道如果是你，你会怎么选择这2种方案？  
这期我们主要讲了如何处理收集小程序用到的组件问题，其实还有其他问题没有说，像用不了solid-js/web下的Portal、Dynamic组件等，自定义指令ts类型不生效，打包发包该用changest管理等等，后面如果有时间就继续写下一期，敬请期待。
