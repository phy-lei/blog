---
title: react hook 的踩坑记录
date: 2020-04-15
tags:
 - react
categories:
 -  react
permalink: /20200415
---

## react hook 的踩坑记录

- ### useState和useEffect

  ```js
    const [tableSource,setTableSource] = useState
    (btnType === "推荐套餐" ? recommendSource : optionalSource);
  
    function handleClick(tbSource) {
      setBtnType(tbSource["TAG-name"]);
      setTableSource(tbSource);
    }
    
    useEffect(() => {
      dispatch({
        type: 'pricing/queryMeal',
        payload: {lang},
      });
  
    }, [lang]);
  
  ```


  ![image-20200516112338880](/blog/assets/121501/1.png)


一次渲染，会打印这么多个tableSource，而且前面的中文还是旧值

原因其实在 `react` 的官方文档里面有提到

> 组件内部的任何函数，包括事件处理函数和effect，都是从它被创建的那次渲染中被「看到」的。

在使用dva的派发action的时候，由于是异步的，在他处理好请求的时候，页面还是会有打印出之前的旧值，而useState只能拿到之前的值，拿不到之后最新的值，就很另人头痛。

官方有说可以用useRef来实现，但是我试过，也还是一样的问题，useRef也没能获取最新值，唯一的解决办法就是不使用useState，直接用变量赋值

```js
let tableSource = (btnType === "推荐套餐" ? recommendSource : optionalSource);

  function handleClick(tbSource) {
    setBtnType(tbSource["TAG-name"]);
    tableSource = tbSource;
  }
```

```js
 // setState也必须是纯函数 不会合并值 会覆盖掉之前的值 若想用合并值可以用useReducer
 setSecondData(firstItem);
 setActiveName([...tempName]);
```

还有就是useEffect的的依赖要处理好，不然一下子就会陷入死循环
```js
const [mobileActive, setMobileActive] = useState(false);
const [iconActive, setIconActive] = useState("");
//拿不到mobileActive
setIconActive(mobileActive ? "activeIcon" : "");
//要写在useEffect
useEffect(() => {
    setIconActive(mobileActive ? "activeIcon" : "");
    dispatch({
      type: 'app/queryNavbar',
      payload: {lang}
    });
  }, [mobileActive, lang]);
```
