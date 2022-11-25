---
title: 利用keepAlive缓存页面
date: 2022-11-25
tags:
  - vue
categories:
  - vue
permalink: /20221125
---

## 场景介绍

项目中经常会有这么一个需求，一个表单页面，可能需要跳转其他页面拿到对应的数据，再跳回表单页面，但是之前填写过的数据还在。而某些页面跳这个表单页面的时候，是不需要缓存，因为他是新增，如果是缓存的话，那么上次填的数据，下次进入这个表单页面的时候，那么数据还存在，明显不符合设计的要求。

## 需求分析

因为项目中使用的是 vue3，所以对于页面缓存，第一时间想到就是利用 keepAlive 做缓存，但是如果不做其他处理的话，仅仅简单使用 keepAlive 会带来一些问题，就像上面说的，如果上次填的数据，回退到上一个页面，再进来表单页，那么上次填的数据还存在，那么，我们该怎么去清掉缓存，什么时候又加入缓存呢，而且清缓存和加入缓存的时机，我们又怎么把握呢，这就是我们需要解决的难题。

## 1. 动态 include 数组

一开始，我想到的是，维护 keepAlive 的 include 数组，这个数组我使用的是 set 数据结构，因为有比较方便的增删方法，而且不重复，代码如下：

```ts
// useCache.ts
import { ref } from "vue";

const KEEP_ALIVE_SET = ref(new Set([]));

export default () => {
  const setKeepAlive = <T extends "add" | "delete">(
    operate: T,
    value: number
  ) => {
    KEEP_ALIVE_SET.value[operate](value);
  };

  return {
    KEEP_ALIVE_SET,
    setKeepAlive
  };
};
```

```html
<!-- App.vue -->
<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive :include="Array.from(KEEP_ALIVE_SET)">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
```

::: tip
关于这里 setKeepAlive 的时机的心智负担着实有点大，因为 add 的时候，存在着大量的页面进行 add，即使用了路由守卫去设置，逻辑的编写也充斥着代码本身，随着页面变多，这心智负担也会呈现直线增长，并且这还会有一个 bug，当 add 缓存的时候，首次进入缓存页面，其实他还没缓存下来，我们都知道 keepAlive 执行缓存，需要首次进入页面的时候记录下来，之后再进入的时候，判断该页面是否已经加载过，就不执行重新渲染，也就造成了，缓存能生效是在第二次进入这个页面的时候，这明显与我们的预想不符合，所以该方案也就 pass 掉了。
:::

## 2. 时间戳 key

我们回顾下关于在 vue 中的 key 属性：
::: tip
key 这个特殊的 attribute 主要作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。如果 key 相同，会最小化触发重新渲染（达到缓存的目的），如果 key 不同，那么肯定会发生替换。
:::

### 主要代码

```ts
// useCache.ts
import { ref } from "vue";

const kEEP_ALIVE_MAP = ref(new Map([]));

export default () => {
  const setKeepAlive = (key: string, value: number) => {
    kEEP_ALIVE_MAP.value.set(key, value);
  };

  return {
    kEEP_ALIVE_MAP,
    setKeepAlive
  };
};
```

```html
<!-- App.vue -->
<template>
  <!-- 利用缓存的时间戳key 保证页面保鲜 -->
  <router-view v-slot="{ Component }">
    <keep-alive :max="5">
      <component
        :is="Component"
        v-if="$route.meta.keepAlive"
        :key="$route.meta.keepAlive ? kEEP_ALIVE_MAP.get($route.name) : $route.path"
      />
    </keep-alive>

    <component
      :is="Component"
      v-if="!$route.meta.keepAlive"
      :key="$route.name"
    />
  </router-view>
</template>
```

a 页面去到表单页，不需要缓存：

```ts
const goAddOrdersPage = () => {
  // 设置时间戳key 保证每次从这个页面跳转，key都是最新的，进入表单页也就一直重新渲染
  setKeepAlive("AddOrder", new Date().getTime());
  router.push({
    name: "AddOrder"
  });
};
```

b 页面操作完成后，回到表单页面，需要缓存：

```ts
// 路由导航守卫
onBeforeRouteLeave((to, from, next) => {
  // 如果不是去的表单页面，那么就重新更新表单页面的key，否则的话，就直接next，这样就可以在表单页面用到的key还是旧的时间戳key，以此达到缓存目的
  if (to.name !== "AddOrder") {
    setKeepAlive("AddOrder", new Date().getTime());
  }
  next();
});
```

## 总结

在维护该 key 的时候，我使用的是一个全局变量维护，利用 hooks 的形式，在各个页面之间进行设置，当然这只是比较简单的一种处理方法，其实方法有很多，也可以用状态管理器 vuex 或 pinia。<span style="color:red">注意：如果用 params 进行传值，vue-router 会给出警告，目前这个方案是官方也不建议的，而且我自己也试过，params 会获取不到值。</span>
