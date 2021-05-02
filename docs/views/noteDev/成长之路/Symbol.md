---
title: 成长之路
date: 2021-05-02
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20210502
---

## 写在前面的话
之前没怎么在意Symbol，但是看了下红宝书里面Symbol的东西，没想到Symbol内置了这么多东西，之前一直以为只是一个新型的数据类型，且符号实例是唯一的，看来之前是我见识短浅啊，既然这样，学习一波Symbol的常用内置符号！

### 1. Symbol.asyncIterator
定义：这个符号作为一个属性表示"一个方法，该方法返回对象默认的AsyncIterator。由for-await-of语句使用"。主要实现异步迭代器API的函数。
```js
  class Emitter {
    constructor(max) {
      this.max = max
      this.asyncIdx = 0
    }

    // ES2018
    async *[Symbol.asyncIterator] () {
      while(this.max > this.asyncIdx) {
        // yield new Promise((resolve) => resolve(this.asyncIdx++))
        yield Promise.resolve(this.asyncIdx++)
      }
    }
  }

  async function asyncCount() {
    let emitter = new Emitter(5)
    for await(const x of emitter) {
      console.log(x);
    }
  }
  asyncCount()
  // 0
  // 1
  // 2
  // 3
  // 4
```
::: tip
这种异步迭代器，让我想到了promise的调用链是否也可以用这种写法，像promise.all，koa的中间件实现
:::

### 2. Symbol.hasInstance
定义：这个符号作为一个属性表示"一个方法，该方法决定一个构造器对象是否认可一个对象是它的实例。由instanceof操作符使用"。
```js
  // 在ES6种。instanceof操作符会使用Symbol.hasInstance函数来确定关系
  function Foo() {}
  let f = new Foo()
  f instanceof Foo //true
  console.log(Foo[Symbol.hasInstance](f))  //true
```
人为改变instanceof
```js
  class Bar {
    static [Symbol.hasInstance] () {
      return false
    }
  }
  let b = new Bar()
  console.log(Bar[Symbol.hasInstance](b)) //false
  console.log(b instanceof Bar) //false

```

### 3. Symbol.isConcatSpreadable
定义：这个符号作为一个属性表示“一个布尔值，如果是 true，则意味着对象应该用 Array.prototype.concat()打平其数组元素”。
```js
  let arrayLikeObject = { length: 1, 0: 'baz' }; 
  console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined 
  console.log(initial.concat(arrayLikeObject)); // ['foo', {...}] 
  arrayLikeObject[Symbol.isConcatSpreadable] = true; 
  console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz'] 

  let otherObject = new Set().add('qux'); 
  console.log(otherObject[Symbol.isConcatSpreadable]); // undefined 
  console.log(initial.concat(otherObject)); // ['foo', Set(1)] 
  otherObject[Symbol.isConcatSpreadable] = true; 
  console.log(initial.concat(otherObject)); // ['foo']
```

### 4. Symbol.iterator
定义：这个符号作为一个属性表示“一个方法，该方法返回对象默认的迭代器。由 for-of 语句使用”。
```js
  class Emitter { 
    constructor(max) { 
      this.max = max; 
      this.idx = 0; 
    } 
    *[Symbol.iterator]() { 
      while(this.idx < this.max) { 
        yield this.idx++; 
      } 
    } 
  } 
  function count() { 
    let emitter = new Emitter(5); 
    for (const x of emitter) { 
      console.log(x); 
    } 
  } 
  count();
  // 0
  // 1
  // 2
  // 3
  // 4
```

### 5.Symbol.match/Symbol.replace/Symbol.search/Symbol.split
因为这3个有点相似就放一起好了，这几个跟原生的match，replace，search，split的用法都一样，不过我们可以人为的破坏式
```js 
class StringSearcher { 
  constructor(str) { 
    this.str = str; 
  } 
  [Symbol.match](target) { 
    return target.includes(this.str); 
  }
  [Symbol.replace](target, replacement) { 
    return target.split(this.str).join(replacement); 
  }
  [Symbol.search](target) { 
    return target.indexOf(this.str); 
  } 
  [Symbol.split](target) { 
    return target.split(this.str); 
  }

}
```

### 6. Symbol.toPrimitive
定义：这个符号作为一个属性表示“一个方法，该方法将对象转换为相应的原始值。由 ToPrimitive 抽象操作使用”。
```js
class Bar { 
 constructor() { 
  this[Symbol.toPrimitive] = function(hint) { 
    switch (hint) { 
      case 'number': 
      return 3; 
      case 'string': 
      return 'string bar'; 
      case 'default': 
      default: 
      return 'default bar'; 
    } 
  } 
 } 
}
let bar = new Bar(); 
console.log(3 + bar); // "3default bar" 
console.log(3 - bar); // 0 
console.log(String(bar)); // "string bar"
```
::: tip
这有点那个运算操作符(3+'1')，执行的是valueOf,还是toString,然后我自己也试验了下，还是用的v8底层调用的，也不是这个。
主要是处理不了这个3的定义，这个只能写成变量的形式去做。
:::

### 总结
还有2个是Symbol.toStringTag/Symbol.unscopables,第一个是针对toString()的调用，第二个是针对with的，感觉不太重要，就不补充了。
我个人觉得比较重用的是迭代器，跟那个异步迭代器比较有意思，感觉可以做很多事，对象中定义迭代器啦，中间件的实现了，promise的异步调用链等等。


