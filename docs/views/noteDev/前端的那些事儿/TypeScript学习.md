---
title: TypeScript学习
date: 2021-08-09
tags:
  - 前端的那些事儿
categories:
  - 前端的那些事儿
permalink: /20210809
---

### extends 关键词

extends 也是 interface 跟 type 的一点区别，看看 type 的使用场景：

```ts
interface P1 {
  name: string;
  age: string;
}
interface P2 {
  age: number;
}
// 如果联合类型中的类型不一致，则改属性为never
type P3 = P1 & P2; // {name: sting, age: never}
```

看看 extends 场景：

```ts
// interface如果继承了2个接口 但类型(age)不一致会报错
interface P3 extends P1, P2 {
  sex: string;
}
```

表示条件类型，表判断：

```ts
/**
 * @example
 * type A1 = 1
 */
type A1 = "x" extends "x" ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = "x" | "y" extends "x" ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends "x" ? 1 : 2;
type A3 = P<"x" | "y">;
```

::: tip

- 如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型<br>
- 若 extends 前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给 extends 后面的类型（是一个分发的过程）。
  :::
