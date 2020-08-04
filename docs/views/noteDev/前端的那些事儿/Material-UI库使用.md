---
title: Material-UI库使用
date: 2020-08-04
tags:
 - 前端的那些事儿
categories:
 -  前端的那些事儿
permalink: /20200804
---

## 介绍
Material-UI —— 世界上最受欢迎的 React UI 框架，摘自官网的原话。Material-UI（以下简称Mui）吸引我的一点是，有些组件样式确实好看，而且动画的过渡效果也很棒，Mui源于谷歌设计师设计的，然后就试着用了一下，发现跟传统的UI库语法上有着很大的区别，最主要是css的注入使用jss插件的，当然Mui自带这个jss插件，无需再安装，jss的语法一开始我看的有点难受，毕竟他是使用js的语法来书写css，类似于行间样式那样。开发难度大了很多，而且，Mui里有很多组件的一些功能比较简单，感觉跟原生的差不多，所以很多时候我们要制作功能模块的时候，通常都要自己继续编写相应的功能代码，我以为这是他的缺点，然而Mui是鼓励我们自己去封装组件来使用，我的天，原来他们是故意这样做，为了提高我们自己的组件封装能力，所以说，开发难度大了很多。不过，用了顺手之后还是不错的，不建议用到企业开发，毕竟开发成本相应的会大很多。

### jss
因为用到jss，所以我们在封装组件的时候，也方便了很多，因为是js代码，所以样式中可以使用变量，就可以通过props来传送我们样式中需要的东西了，而且jss注入到css是纯css注入，不像行间样式那样，这样也优化了性能，举个例子：
```js
import { makeStyles, useTheme } from '@material-ui/core/styles';
function Sidebar ({rest}) {
  const theme = useTheme(); //全局主题
  const useStyles = makeStyles((theme) => ({
     drawer: {
      zIndex: "100",
      width: rest.drawerWidth, //可以看到宽度是从父组件传过来的，所以说这是组件封装很好的实现
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
  }))
  //classes就是上面useStyles解析出来的jss对象
  const classes = useStyles();
  
  return 
  (<Drawer anchor="left" variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: rest.open,
        [classes.drawerClose]: !rest.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: rest.open, //类名也通过父组件传值是否拥有此类名
          [classes.drawerClose]: !rest.open,
        }),
      }}
    >
      <div className={classes.sidebarWrapper}>
        {list(anchor)}
      </div>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${banner})` }}
      />
    </Drawer>
    )
}
```
::: tip
clsx是一个小型工具集，用于有条件地从一个对象中构造 className 字符串，此对象的键是类字符串（class strings），而值是布尔值（booleans）
:::
```js
//以前多类名的时候的写法
// let disabled = false, selected = true;
return (
  <div
    className={`MuiButton-root ${disabled ? 'Mui-disabled' : ''} ${selected ? 'Mui-selected' : ''}`}
  />
);
```
```js
//现在是这样写
import clsx from 'clsx';
return (
  <div
    className={clsx('MuiButton-root', {
      'Mui-disabled': disabled,
      'Mui-selected': selected,
    })}
  />
);
```
这是一个侧边栏抽屉的功能实现，这个功能可以响应式，左右拉动，实现抽屉伸缩效果。可以看看效果<a href="http://phy-lei.cn:3000" target="_Blank">抽屉伸缩</a>，这是我打算用来做个人博客管理后台的页面，目前已经做好全局的layout，样式调色，还需要再改，现在还是比较丑的。

### Mui带给我的好处
用了Mui后，发现以前有很多地方的代码都是可以优化的，就像react-hook，原来不用定义多个state，可以用对象存储一个state就好了，对于自己的数据结构也会有一定的提高。
```js
 const [values, setValues] = useState({
    userName: '',
    passWord: '',
    showPassword: false
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
```
更大的好处应该就是，可以尽早进入组件封装的阶段吧，现在实现的只是一个比较单一的半成品封装，不是一个很大的功能，对于代码的结构性也有良好的维护。
