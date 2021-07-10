---
title: vue3的使用心得
date: 2021-07-03
tags:
  - vue
categories:
  - vue
permalink: /20210703
---

## vue3

vue3 也出来了一段时间了，刚好项目中也使用到了 vue3，刚开始的时候不是很适应，但是写了一段时间，感觉比 vue2 的开发体验好很多，现在基本回不去 vue2 了，别再叫我用 vue2！！！

### reactive 及 ref

在我的理解中，reactive 跟 ref 都可以定义数据为响应式数据，但是 reactive 是定义复杂数据类型，而 ref 是定义基本数据类型，但是其实 ref 你去定义复杂数据类型也是可以的，只不过多了个 value 作为安全语法，有一点需要注意，如果你给最外层的响应式数据重新赋值，是没有意义的，例如：

```js
var obj = {
  a: 1
};
var proxyObj = new Proxy(obj, {});
proxyObj = {};
console.log(proxyObj); // {}
```

如果在 vue 中数组用 reactive 去代理响应式，想要将数组初始为空数组，你可能会这么做：

```js
let arr = reactive([1, 2, 3]);
arr = [];

// 应该这么做
arr.length = 0;
```

::: tip
这就会让这个 arr 失去了响应式，这是没有意义的，所以要注意
:::

### 自建 store

因为 vue3 支持逻辑视图分离，我们也可以做到 DDD，不论是拓展性，复用性，解耦，都得到了很大的提升，所以也可以自建自己的状态管理库。
</br>

#### useStore

````ts
// useStore.ts
import { readonly } from "vue";
import createAction from "./action";
import { createState, IState } from "./state";

interface DispatchParams {
  type: string;
  payload: Record<string, any>;
}

const myState = createState();
const action = createAction(myState);

// 用dispath派发action 参考dva的dispatch 支持promise调用
// eslint-disable-next-line max-len
const createDispatch = <T>(actionType: any) => ({ type, payload }: DispatchParams): Promise<T> =>
  new Promise(resolve => {
    resolve(actionType[type](payload));
  });

interface StoreDto {
  state: IState;
  dispatch: any;
}

/** 小型的状态管理库 主要是为了在弹窗中各个组合的组件通信
 * 也是观察者模式的一种 利用watch监听state的变化
 * 组件中不允许直接修改state 应该使用action 再通过reducer去修改state
 * @returns {store,dispatch}
 */
const useStore = (): StoreDto => {
  const state = readonly(myState);

  /**
   * 使用md这种代码块可以使ts得到很好的提示，例子：
   * ```js
   * dispatch({
   *  type: 'ActionType',
   *  payload: payload参数
   * }).then(() => {
   *  // 成功后的回调todo
   * })
   * ```
   */
  const dispatch = createDispatch<any>(action);

  return {
    state,
    dispatch
  };
};

export default useStore;
````

#### state 文件

```ts
// state.ts
import { reactive } from "vue";

export interface IState {
  isExpand: boolean;
  dialogIsOpenPrevEl: any;
  isArticleStoreHouseDetail: boolean;
}
export const state: IState = {
  isExpand: false,
  dialogIsOpenPrevEl: null,
  isArticleStoreHouseDetail: false
};

const _createState = (stateObj: IState) => () => reactive(stateObj);

export const createState = _createState(state);
```

#### action 文件

```ts
// action.ts
import { IState } from "./State";

const initState: IState = {
  isExpand: false,

  dialogIsOpenPrevEl: null,
  isArticleStoreHouseDetail: false
};

const reducers: Record<string, any> = {
  initDialogStateAction: (state: IState) => ({ uid }: Record<string, string>) => {
    (state as any)[uid] = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in initState) {
      (state as any)[uid][key] = (initState as any)[key];
    }
    console.log(state, "state");
  },

  articleStoreHouseDetailAction: (state: IState) => ({ uid, status }: Record<string, string>) => {
    (state as any)[uid].isArticleStoreHouseDetail = status;
  },

  cleanUpCurrentStateAction: (state: IState) => ({ uid }: Record<string, string>) => {
    delete (state as any)[uid];
    console.log(state, "state");
  }
};

/**
 * 描述 创建 Action
 * @param {any} state:IState
 * @returns {actionCollection}
 */
const createAction = (state: IState): Record<string, any> => ({
  initDialogStateAction: reducers.initDialogStateAction(state),
  articleStoreHouseDetailAction: reducers.articleStoreHouseDetailAction(state),
  cleanUpCurrentStateAction: reducers.cleanUpCurrentStateAction(state)
});

export default createAction;
```

### 总结

vue3 不仅对于 ts 的支持变得更好，也消灭了 this，其实我感觉消灭 this 也是因为 this 在 ts 中比较难定义，毕竟他是动态的词法。冲啊，VUE DDD!!!
