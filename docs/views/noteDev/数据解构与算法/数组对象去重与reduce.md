---
title: 数组对象去重与reduce
date: 2020-06-02
tags:
 - 数据结构与算法
categories:
 -  数据结构与算法
permalink: /20200602
---

## 排序 + 指针去重
给定一个数组对象，并去掉id相同的那一项。</br>
示例：
::: danger
输入:[{id: 4,aa: "12"}, {id: 2,aa: "12"}, {id: 2,aa: "12"}, {id: 4,aa: "12"}, {id: 5,aa: "12"}]</br>
输出:[{id: 4,aa: "12"}, {id: 2,aa: "12"}, {id: 5,aa: "12"}]
:::

### 1.思路
利用id的number类型进行排序，使其升序排列，然后查找规律发现，如果后面的项跟前面的项相等的话，那么他们就是重复项，不重复的话，是会比前面的大，所以基于这个特性，我们来用代码写一下，这里我还是用我最熟悉的js。
```js
    console.time("time")
    arr.sort((a, b) => a.id - b.id);
    let i = 0;
    let len = arr.length;
    while (i < len ) {
      /*
      需注意splice方法操作了原数组 
      每次splice 数组长度都会减1 
      故len也应该len-i-1 或len--
      */
      if (i < len - 1 && arr[i+1].id <= arr[i].id) {
        arr.splice(i, 1)
        /*
        因为splice后 指针会有所偏移
        所以为了纠正指针 应该i--
        */
        i--
        len--
      }
      i++
    }
    console.timeEnd("time") //取最中间值 0.48ms
```
至于耗时为何如此之高，完全是因为sort就占了总时间的80%了，还有一个难点就是在于splice后操作了原数组，数组每次splice长度会改变，如果不及时纠正指针和判断条件，就会报错，显然这不是我们预期想要的，我已经调试了不下3次后才发现的，哈哈，除了菜，我一无所有/(ㄒoㄒ)/~~

### 2.reduce实现去重
接下来，我们用reduce的方法实现，在这之前，我都没怎么用过reduce，但是就一直觉得他是一个很好用的东西，能做很多事请，去重也是他的一方面啦，我也去MDN看了下reduce的介绍，发现他最重要的一句话：
::: tip
reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素
:::
这句话应该是理解reduce执行流程的最重要的一句话了，为数组的每个元素执行callback，数组元素有多少个就执行多少次callback，不过如果使用的方法里操作了原数组，指针还是会偏移的，在这里还是要提一句，其实为了避免出现不必要的麻烦，我们还是最好使用那些不操作原数组的方法，做一个一等公民（纯函数）。
先看看reduce的参数和语法。
::: tip
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
  <p style="text-indent:2em">callback:</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
  </p>
  <p style="text-indent:3em">accumulator:</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;累计器累计回调的返回值;它是上一次调用回调时返回的累积值
  </p>
  <p style="text-indent:3em">currentValue:</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数组中正在处理的元素。
  </p>
  <p style="text-indent:3em">index(可选):</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数组中正在处理的当前元素的索引。
  </p>
  <p style="text-indent:3em">array(可选):</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调用reduce()的数组
  </p>
  <p style="text-indent:3em">initialValue(可选):</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为第一次调用callback函数时的第一个参数的值。
  </p>
:::

reduce另一个方法实现去重，参考mdn的，这个方法就没有指针偏移的烦恼：
```js
    console.time("time")
    let result =  arr.sort((a, b) => a.id - b.id).reduce((acc,cur)=>{
      if(acc.length === 0 || acc[acc.length-1].id !== cur.id){
        acc.push(cur);
      }
      return acc;
    },[])
    console.timeEnd("time") //取最中间值 0.27ms
```
我想用reduce也用上面的指针加排序的方案来做的，但是发现，reduce的index不能更改，只能循环下去，for循环也是一样，不能更改，即使在外面定义的变量也还是指针只能++，减不了，因为用的不一样的方法，所以时间复杂度比不了，但是while可以做指针偏移，看个人喜欢吧