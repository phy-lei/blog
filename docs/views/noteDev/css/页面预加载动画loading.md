---
title: 页面预加载动画loading
date: 2020-06-04
tags:
 - css
categories:
 - css
permalink: /20200604
---

## 介绍
一般在页面进入的时候，有时候网络如果不是很好的情况下，用户可能就会一下子就把页面给关了，所以为了提升用户体验，在页面加载的时候，先让他加载一个loading动画，这样用户的停留率也会提高很多，接下来，让我们来实现一下吧

### 页面周期函数
document.onreadystatechange

```js
  document.onreadystatechange = function () {
      console.log(document.readyState); //interactive complete
        if (document.readyState == "complete") {
            
          loader.style.display="none"
        }
    }
```