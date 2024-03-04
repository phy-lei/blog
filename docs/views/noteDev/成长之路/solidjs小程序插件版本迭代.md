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
这个编译结果，起初并没有看出有多大的问题，随着debugger的深入，发现有重复触发依赖收集getter。

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

### 解决小程序组件编译
在编译小程序的view标签时，在jsx中写法是通过import taro的View组件进来编译的，而在solid侧，会将其作为组件进行编译，咋一看之下，并没有多大毛病，起初我也是遵守这jsx的写法进行solid与taro的融合，自己写了个h函数去编译这个View组件。在编译View组件的时候，其实他并不是function，而是string：‘view’，所以需要联合createElement，及setProps对其特殊处理，**但是这么做就脱离了solid的一套自循环响应式系统了**，这也是造就一切问题的原因所在。
我们看看solid-playground中编译普通标签的编译结果。
