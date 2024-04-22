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
为了解决用户使用的组件命名是跟@tarojs/components里的导出命名一致:
```js
import { Button } from '@tarojs/components'
import View from '@/components/MyView'
```

我们可以对import的语法进行分析，只要收集'@tarojs/components'里import进来的组件就好，在babel里也是能做到这个的，具体代码如下：
```js
visitor: {
  JSXElement: transformJSX,
  JSXFragment: transformJSX,
  Program: {
    enter: (path, { opts }) => {
      const taroComponentsMap = (path.hub.file.metadata.taroComponentsMap ||= new Set())
      for (const stmt of path.get('body')) {
        if (t.isImportDeclaration(stmt.node)) {
          // 是否是@tarojs/components的包
          if (isTaroComponent(stmt.node.source.value)) {
            stmt.node.specifiers.forEach((specifier) => {
              // 包体导出的变量名
              const importedName = specifier.imported.name
              taroComponentsMap.add(importedName)
            })
          }
        }
      }
      if (merged.validate) path.traverse(JSXValidator)
    },
    exit: postprocess
  }
}
```
在enter中，可以获取所有import进来的语句，基于此，对于别的import路径组件，即使重名，也不会对其进行收集。

#### 解决组件别名
除了需要解决组件重名外，还存在另一个隐患：
```js
import { Button as MyButton } from '@tarojs/components'
```

组件别名，使用上述方法收集到的组件是MyButton，在transformElement处理分支的时候，MyButton并不在可用列表中，那这个Button的编译就会被遗漏掉了，所以我们还得改写上述的方法：
```js
visitor: {
  JSXElement: transformJSX,
  JSXFragment: transformJSX,
  Program: {
    enter: (path, { opts }) => {
      const taroComponentsMap = (path.hub.file.metadata.taroComponentsMap ||= new Map())
      for (const stmt of path.get('body')) {
        if (t.isImportDeclaration(stmt.node)) {
          // 是否是@tarojs/components的包
          if (isTaroComponent(stmt.node.source.value)) {
            stmt.node.specifiers.forEach((specifier) => {
              // 包体导出的变量名
              const importedName = specifier.imported.name
              // 当前使用的变量名 防止别名
              // import { Button as MyButton } from '@tarojs/components'
              const localName = specifier.local.name
              taroComponentsMap.set(localName, importedName)
            })
          }
        }
      }
      if (merged.validate) path.traverse(JSXValidator)
    },
    exit: postprocess
  }
}
```
>将Set数据结构改为Map，采用localName(对应的MyButton): importedName(对应的Button)，这样能够方便transformElement直接获取到源组件名。

#### 其他问题
在使用babel处理后，由于我们把源文件'@tarojs/components'的组件在正文中并没有在使用了(变为原生标签使用)，导致这个包变为了一个无引用import chunk，这在taro的收集小程序组件chunks流程中，会收集不到。所以还得对这个在taro的流程中特殊处理：
```ts
!(nameOfCallee && nameOfCallee.includes('_$createElement')) && // solidjs创建元素
```
大概就是在TaroComponentsExportsPlugin，再进行一次收集，solid转换后的源码中，都会用_$createElement方法进行元素创建，所以就去检索这个方法里的标签作为小程序使用到的组件即可，这在taro中也有比较多类似其他第三方组件库收集不到的处理方法，这里也是大佬给我指明在这里处理，所以就不在继续深入研究。

## H5端的解决
由于taro在h5中统一都是使用[stencil](https://stenciljs.com/)做的web-component，而stencil的output适配器并没有solid的实现，在solid实现web-component的话，他自己有个solid-element的库，写solid的代码，能够将其define为customElement，这2者最终导出的实现都会走defineCustomElement的原生方法，从结果上来说是一致的，要么就把各个taro的组件用solid-element实现一遍，但是这工作量也很大，并且维护成本也变高，所以这个方案也被驳回了。

### stencil-solid-output
实现一个stencil-solid-output的适配器，其实taro的output导出的component，都需要自定义，那么只要去参考别的output适配器即可。
```ts
export const generateProxies = (config: Config, components: ComponentCompilerMeta[], pkgData: PackageJSON, outputTarget: OutputTargetSolid, rootDir: string): string => {
  const distTypesDir = path.dirname(pkgData.types)
  const dtsFilePath = path.join(rootDir, distTypesDir, GENERATED_DTS)
  const componentsTypeFile = relativeImport(outputTarget.proxiesFile, dtsFilePath, '.d.ts')
  const pathToCorePackageLoader = getPathToCorePackageLoader(config, outputTarget)

  const imports = `/* eslint-disable */
  /* tslint:disable */
  /* auto-generated solid proxies */
  import { createSolidComponent } from './solid-component-lib';\n`

  const generateTypeImports = () => {
    if (outputTarget.componentCorePackage !== undefined) {
      const dirPath = outputTarget.includeImportCustomElements ? `/${outputTarget.customElementsDir || 'components'}` : ''
      return `import type { ${IMPORT_TYPES} } from '${normalizePath(outputTarget.componentCorePackage)}${dirPath}';\n`
    }

    return `import type { ${IMPORT_TYPES} } from '${normalizePath(componentsTypeFile)}';\n`
  }

  const typeImports = generateTypeImports()

  let sourceImports = ''
  let registerCustomElements = ''

  return [
    imports,
    typeImports,
    sourceImports,
    registerCustomElements,
    components.map(cmpMeta => createComponentDefinition(cmpMeta, outputTarget.includeImportCustomElements)).join('\n'),
  ].join('\n') + '\n'
}
```
这部分代码就不需要细看了，因为我删了一部分，而且这个适配器的实现并不是重点。

### createSolidComponent
createSolidComponent这个方法是用来沟通stencil与solid的连接器，由于stencil导出的组件都已经变为web-component，类似以下：

```tsx
<View class="index">
  <View style={{color: ${color()}}}>
    <Text>Hello world! </Text>
  </View>
  <Button onClick={() => setCls('bold')}>set class</Button>
  <Button onClick={() => setColor('red')}>set style</Button>
  <View>{Math.random()}</View>
</View>
```

输出在页面上的ui都会编译为web-component：
```tsx
 <taro-view-core class="index">
  <taro-view-core style={`color: ${color()}`} >
    <taro-text-core>Hello world!</taro-text-core>
  </taro-view-core>
  <taro-button-core  onClick={() => setCls('bold')}>set class</taro-button-core >
  <taro-button-core onClick={() => setColor('red')}>set style</taro-button-core>
  <taro-view-core>
    {Math.random()}
  </taro-view-core>
</taro-view-core>
```

将这些taro的component转换为web-component就是createSolidComponent做的事情，那么到底如何做的呢？
```ts
export const createSolidComponent = <
  PropType,
  ElementType extends HTMLStencilElement,
  ExpandedPropsTypes = any
>(
  tagName: string,
  manipulatePropsFunction?: (
    originalProps: StencilSolidInternalProps<ElementType>,
    newProps: any
  ) => ExpandedPropsTypes,
  defineCustomElement?: () => void,
): Component<PropType & JSX.DOMAttributes<ElementType> & ComponentSupplementaryTypes> => {

  if (defineCustomElement !== undefined) {
    defineCustomElement()
  }

  function SolidComponentWrapper(props: { children: JSX.Element } & any) {
    const [local, other] = splitProps(props, ['children', 'ref'])
    const eventsMap = new Map()
    const reactiveKeys = []
    const getUnTrackProps = (_props: Record<string, any>) => {
      let propsToPass: typeof props = {}
      for (const key in _props) {
        if (!_props.hasOwnProperty(key)) {
          continue
        }
        if (isPropNameAnEvent(key)) {
          eventsMap.set(key, _props[key])
          continue
        }
        if (isReactiveKey(_props, key)) {
          reactiveKeys.push(key)
          continue
        }
        const propValue = _props[key]
        propsToPass[camelToDashCase(key)] = propValue
      }
      if (manipulatePropsFunction !== undefined) {
        propsToPass = manipulatePropsFunction(_props, propsToPass)
      }
      return propsToPass
    }

    const unTrackProps = getUnTrackProps(other)
    const [reactiveProps] = splitProps(other, reactiveKeys)

    const _mergeProps = mergeProps(unTrackProps, { ref: (element: HTMLElement) => {
      if (local.ref && isFunction(local.ref)) local.ref(element)
      syncEvents(element, eventsMap)
      setReactiveProps(element, reactiveProps)
    } })

    return memo(() => h(tagName, _mergeProps, local.children), true)
  }

  return SolidComponentWrapper as any
}
```
这里主要解决的问题如下：
- 使用solid中的h函数创建web-components，其实就是自定义element，因为注册web-component都已经在内部注册完成
- props的响应式属性需关联并能依赖更新ui

在利用h函数的过程中，遇到许许多多的问题，各种形态我都尝试过，还自己对children进行循环遍历，并递归调用h函数。到最后，自己看了h函数的源码后，发现他内部已经会对children进行递归处理了，我是多此一举的行为，当把h函数的正确形态书写完毕后，后面的props更新，耗费的时间就少很多，就跟之前写solid的编译器setProps很类似。

## 总结
这一次的taro-solid的响应式处理，虽然只是一个bug，但是这涉及到的改动也很多，很大程度上都已经不算是一个bug的处理，需要深入到了编译层面，对babel工具的使用又加深了其理解，并且在处理大型框架上，需要考虑的东西也会很多，尽量做到满足用户需求的同时，也要考虑到后期的维护拓展问题。希望taro4版本能够顺利发布，也祝taro能变得更好🎉🎉🎉
