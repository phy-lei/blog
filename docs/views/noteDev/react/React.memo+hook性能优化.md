---
title: React.memo+hook性能优化
date: 2020-08-12
tags:
 - react
categories:
 -  react
permalink: /20200812
---

## 写在前面的话
在react中，每当我们新页面打开的时候，父组件一旦更新，子组件也会跟着更新，有的时候，子组件的props并没有改变，我们也不需要它重新渲染，在以前class组件中，我们会用到PureComponent和shouldComponentUpdate，如今函数组件越来越趋向成熟，函数组件中也有了解决方案，memo是用在函数组件的hook，而且写法上也更加的优雅，并且还有其他的memoized hook来让我们记忆当前包裹的函数，react用到这一点来去判断被包裹的组件需不需要重新渲染。

### React.memo
memo的使用方式很简单，接收2个参数，第一个是包裹的函数组件名，第二个是areEqual是否需要重新渲染，memo为高阶组件，它与PureComponent非常相似，但只适用于函数组件，而不适用 class 组件。

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
function areEqual(prevProps, nextProps) {
  return isEqual(prevProps, nextProps); //这里我用到lodash的isEqual方法去判断props是不是完全相等
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

关于执行机制，我的看法，因为没有阅读过源码，只是说出我的猜想：
::: tip
当areEqual为true的时候，react在编译的时候，遇到props渲染的东西的时候，都是拿之前的值来渲染，就不执行这段代码了，直接next，而不是又来执行一遍有props的代码，因为有memoized hook，所以就更好的去读取记忆中的值了。
:::

### Memoized hook
memoized hook中有useMemo，useCallback，当父组件传过来的值中有函数的话，我们应该要用useCallback包裹，如果不用useCallback包裹，那么memo包裹的组件，还是会一直渲染，值的话可以用useMemo包裹，因为他们的第二个参数都是一个依赖项数组。
```js

const toggleDrawer = useCallback(() => {
  setDrawerWidth(73);
  setOpen(false);
}, []);
```
useMemo也是可以包裹函数的，我们来看看：
```js
// 一个很耗时间的代码
function slowlyAdd(n) {
  console.time('add slowly')
  let res = n;
  for (let i = 0; i < 2000000000; i++) {
    res += 1;
  }
  console.timeEnd('add slowly')
  return res;
}
// useMemo记忆结果的一个自定义hook
function useSlowlyAdd(n) {
  const res = useMemo(() => {
    return slowlyAdd(n);
  }, [n])
  return res;
}
//useMemo也可以做高阶组件，用起来的时候，可以写成reactElement的形式了
const HOC = useMemo(() => <C />, deps)
```
将来，React 可能会选择“遗忘”以前的一些 memoized 值，并在下次渲染时重新计算它们，比如为离屏组件释放内存。先编写在没有 useMemo 的情况下也可以执行的代码 —— 之后再在你的代码中添加 useMemo，以达到优化性能的目的。这是官网的原话，我的navbar起初也是没有用到useMemo，然后不用的时候，每次都会重复渲染，所以我就用上了来优化，显然成功了，但是我想侧边栏也用上useMemo的时候，就出现渲染问题了，并不是所有的都可以进行性能优化，如果组件一直都是会重复更新的，就没必要做成memo包裹了，我的侧边栏因为就是一直更新的，所以才会渲染出错。最后，有幸能用到高阶组件，表示很高兴！
