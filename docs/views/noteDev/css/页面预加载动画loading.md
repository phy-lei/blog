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
一般在页面进入的时候，有时候网络如果不是很好的情况下，用户可能就会一下子就把页面给关了，所以为了提升用户体验，在页面加载的时候，先让他加载一个loading动画，这样用户的停留率也会提高很多，接下来，让我们来实现一下吧。

### 使用window.ohload
至于加载的loading动画我使用<a href="https://github.danielcardoso.net/load-awesome/" target="_Blank">https://github.danielcardoso.net/load-awesome/</a>的是这个，里面有很多的loading动画，任君选择。最重要的思想其实就是要跟这个loading有一个遮罩层，沾满屏幕，作用是遮住下面的元素，不然就会loading跟内容一起显示了，就不好看，其实这是一个障眼法

```html
<!-- 遮罩层 -->
  <div class="loading-wrap">
    <div id="pacman" class="la-pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
```
```css
.loading-wrap{
      width: 100vw;
      height: 100vh;
      position: fixed;
      background-color: #fff;
      -webkit-transition: opacity 1s ease;
      -moz-transition: opacity 1s ease;
      -o-transition: opacity 1s ease;
      transition: opacity 1s ease;
    }
    .la-pacman{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
```
```js
  //原生
  window.onload = function(){
    setTimeout(function(){
    var loader = document.getElementsByClassName("loading-wrap")[0];
    loader.className="loading-wrap fadeout" ;//使用渐隐的方法淡出loading page
    setTimeout(function(){loader.style.display="none"},1000)
    },1000)//强制显示loading page 1s
  }

  //在react中 需使用ref
  componentDidMount() {
    setTimeout(() => {
      this.loader.current.class = "fadeout";// 使用渐隐的方法淡出loading page
      setTimeout(() => { this.loader.current.style.display = "none"; }, 500);
    }, 500);// 强制显示loading page 0.5s
  }
```

大家可以去我这里看我写的小demo演示效果<a href="http://106.53.242.20:8082/" target="_Blank">过场动画demo</a>，源码也在那里了。