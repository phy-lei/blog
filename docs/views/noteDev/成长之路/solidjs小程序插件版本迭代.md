---
title: taro-solid小程序插件版本迭代
date: 2024-03-04
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20240304
---

## 问题
最近在深度使用tarojs-plugin-solid插件去写小程序的项目，发现了一些bug，也在仓库的<a href="https://github.com/phy-lei/tarojs-plugin-solid/issues?q=is%3Aissue+is%3Aclosed" target="_Blank">issues</a>中记录了下来，这2个bug的实质也算殊途同归，都是h函数出现了问题。

<img :src="$withBase('/assets/20240304/01.gif')" alt="">

不过图片所示的问题更加严重，这会在父组件中props的signal更新时，带动子组件的全量更新，这明显是违背了solid更新的原则。

## 问题分析
上菜：
```tsx
import { View, Text, Button } from '@tarojs/components'
import Counter from '@/components/Counter'
import { createSignal } from 'solid-js'
import styles from './index.module.css'

export default function Index() {
  const [color, setColor] = createSignal('red')
  const [cls, setCls] = createSignal('')

  return (
    <View class="index">
      <View>
        <Text>Hello world! </Text>
      </View>
      <View style={`color: ${color()}`}>
        <Text class={cls()}>Hello world2! </Text>
      </View>
      <Button onClick={() => setCls(styles['bold'])}>set class</Button>
      <Button onClick={() => setColor('blue')}>set style</Button>
      <Counter count={0}></Counter>
      <View>{Math.random()}</View>
    </View>
  )
}
```
示例代码长得如此俊俏，却表里不一，实属把我给伤透了心。在set style操作后，会去设置color，而绑定color的响应式数据只存在一处，就是<View style={`color: ${color()}`}>，但是当我们设置了后，最下面的<View>{Math.random()}</View>，也会重新render，count也会重置为0，这个操作看起来就有点类似重新init了。当我把color的响应式数据绑在text中时，他表现的结果又是符合预期的。

```tsx
<View>
  <Text class={cls()} style={`color: ${color()}`}>Hello world2! </Text>
</View>
```
那么到底为什么出现这种情况呢？在经历了一轮debug定位后，我发现在setter触发后的更新，他更新的依赖存在多个value。

<img :src="$withBase('/assets/20240304/02.png')" alt="">

> 而这其中的value数组，都是需要更新的dom，那为啥他会将这些无需更新的dom都推入到了observers呢？

### solid编译结果

<img :src="$withBase('/assets/20240304/03.png')" alt="">

这个编译结果，起初并没有看出有多大的问题，随着debug的深入，发现有重复触发依赖收集getter。

```ts
// h.ts
// 处理children
if (Object.prototype.hasOwnProperty.call(props, 'children')) {
  const descriptor = Object.getOwnPropertyDescriptor(props, 'children')
  if (descriptor?.get) {
    children = solidChildren(() => props.children)
  } else {
    children = props.children
  }
}
```
重点就出在solidChildren，这个是solidjs引入的children函数，而children函数内部也有getter。

```ts
export function children(fn: Accessor<JSX.Element>): ChildrenReturn {
  const children = createMemo(fn);
  const memo = "_SOLID_DEV_"
    ? createMemo(() => resolveChildren(children()), undefined, { name: "children" })
    : createMemo(() => resolveChildren(children()));
  (memo as ChildrenReturn).toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };
  return memo as ChildrenReturn;
}
```
这就造成了，只要父级的props有更新，都会触发children的更新，也就造成了页面像是初始init一样。

## 解决小程序组件编译
在编译小程序的view标签时，在jsx中写法是通过import taro的View组件进来编译的，而在solid侧，会将其作为组件进行编译，咋一看之下，并没有多大毛病，起初我也是遵守这jsx的写法进行solid与taro的融合，自己写了个h函数去编译这个View组件。在编译View组件的时候，其实他并不是function，而是string：‘view’，所以需要联合createElement，及setProps对其特殊处理，**但是这么做就脱离了solid的一套自循环响应式系统了**，这也是造就一切问题的原因所在。
我们看看solid-playground中编译普通标签的编译结果：

<img :src="$withBase('/assets/20240304/04.png')" alt="">

可以看到在编译div标签时，使用_$createElement进行编译，而我们的View组件他本质就是一个view标签，所以当我们不再使用这种组件形式进行编译，**改为自定义标签书写，发现他竟然真能顺利编译成功，并且响应式也是正常的**。怪不得solid中并没有这种h函数去处理你的custom-render，当然官方也有个h函数，但是那个h函数在创建的时候，需要的参数，在微信小程序中并没有这些环境。

> 顺利删掉h函数，感觉一切都变清晰了很多！

## 解决自定义标签在solid的ts定义
在solid的tsc中，我们是使用solid-js进行编译标签的，而对于小程序的标签，solid是没有定义的，这就造成了标签爆红：

<img :src="$withBase('/assets/20240304/05.png')" alt="">

这对于强迫症患者来说肯定很不适应，所以我们还得将这份类型给加上，而查了一番资料，在solid的issues中也能看到有类似的需求，也能看到的解决方案：

```ts
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      view: TransformReact2SolidType<ViewProps>
    }
  }
}
```
这里也跟taro提供的ViewProps关联上，这样在写view之类的小程序标签也就能获得类型提示了，这份文件需要在项目引入一下，可以在global.d.ts：

```ts
/// <reference path="../node_modules/tarojs-plugin-solid/types/taro-components-solid.d.ts" />
```

改造tsc
```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "removeComments": false,
    "preserveConstEnums": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "noImplicitAny": false,
    "allowSyntheticDefaultImports": true,
    "outDir": "lib",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "strictNullChecks": true,
    "sourceMap": true,
    "rootDir": ".",
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "allowJs": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "noEmit": true,
    "isolatedModules": true, // 解决掉自定义的type与solidjs定义的冲突
    "typeRoots": ["node_modules/@types"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["./src", "./types", "./config"],
  "compileOnSave": false
}
```

## 总结
经过开发这次tarojs-plugin-solid插件，与普通的业务代码不同，关注的点不再是上层ui层，还深入到了taro，solidjs源码中查看，**要读懂源码，最好的办法就是去参与其中**。经过这次的深度使用并解决的问题，迎来的是一个稳定的版本。之前还有老哥给我留言，能否上生产，当时我信心不足，但是这次给我带来很大的信心，毕竟这一块当时写的也是有疑惑的。所以如果对于solidjs感兴趣的，又想运用到小程序中（目前仅支持小程序，h5还是用原生吧），欢迎大家使用🙏🙏🙏<a href="https://github.com/phy-lei/tarojs-plugin-solid" target="_Blank">仓库</a>。
