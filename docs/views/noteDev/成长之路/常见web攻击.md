---
title: 常见web攻击
date: 2021-05-10
tags:
 - 成长之路
categories:
 -  成长之路
permalink: /20210510
---

## XSS
XSS (Cross-Site Scripting)，跨站脚本攻击，因为缩写和 CSS重叠，所以只能叫 XSS。跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的非本站点HTML标签或JavaScript进行的一种攻击。场景：页面存在不转义就插入html。

### XSS攻击分类
- 反射型 - url参数直接注入
::: tip
http://localhost:3000/?from=<script src="http://localhost:4000/hack.js"> </script>
:::

- 存储型 - 存储到DB后读取时注入

### XSS防御
对于XSS攻击，他可以通过Scripting对我们造成如下危害：
- 获取页面数据
- 获取Cookies
- 劫持前端逻辑
- 发送请求
- 偷取网站的任意数据
- 偷取用户的资料
- 偷取用户的秘密和登录态
- 欺骗用户
那么我们可以怎么防范呢？
1. ejs转义小知识
::: tip
<% code %>用于执行其中javascript代码；<br> 
<%= code %>会对code进行html转义；<br>
<%- code %>将不会进行转义
:::

2. HEAD
::: tip
ctx.set('X-XSS-Protection', 0) // 禁止XSS过滤
通常浏览器是默认的启用XSS过滤。如果检测到跨站脚本攻击，浏览器将清除页面并使用CSP report-uri 指令的功能发送违规报告。
::: 

3. CSP
内容安全策略 (CSP, Content Security Policy) 是一个附加的安全层，用于帮助检测和缓解某些类型的攻击，包括跨站脚本 (XSS) 和数据注入等攻击。这些攻击可用于实现从数据窃取到网站破坏或作为恶意软件分发版本等用途。
```js
// 只允许加载本站资源 
Content-Security-Policy: default-src 'self' 
// 只允许加载 HTTPS 协议图片 
Content-Security-Policy: img-src https://* 
// 不允许加载任何来源框架 
Content-Security-Policy: child-src 'none'

ctx.set('Content-Security-Policy', "default-src 'self'")
```

4. 转义字符
用户的输入永远不可信任的，最普遍的做法就是转义输入输出的内容，对于引号、尖括号、斜杠进行转义
```js
function escape(str) { 
  str = str.replace(/&/g, '&amp;') 
  str = str.replace(/</g, '&lt;') 
  str = str.replace(/>/g, '&gt;') 
  str = str.replace(/"/g, '&quto;') 
  str = str.replace(/'/g, '&#39;') 
  str = str.replace(/`/g, '&#96;') 
  str = str.replace(/\//g, '&#x2F;') 
  return str }
```

5. HttpOnly Cookie
这是预防XSS攻击窃取用户cookie最有效的防御手段。Web应 用程序在设置cookie时，将其属性设为HttpOnly，就可以避免该网页的cookie被客户端恶意JavaScript窃取，保护用户cookie信息。
```js
response.addHeader("Set-Cookie", "uid=112; Path=/; HttpOnly")
```

## CSRF
CSRF(Cross Site Request Forgery)，即跨站请求伪造，是一种常见的Web攻击，它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。场景：用户已经登录了站点 A，并在本地记录了 cookie；在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。

### CSRF防御
危害：
- 利用用户登录态
- 用户不知情
- 完成业务请求
- 盗取用户资金（转账，消费）
- 冒充用户发帖背锅
- 损害网站声誉
防御：
- 禁止第三方网站带Cookie - 有兼容性问题
- Referer Check - Https不发送referer
```js
app.use(async (ctx, next) => { 
  await next() 
  const referer = ctx.request.header.referer 
  console.log('Referer:', referer) 
})
```
- 验证码

## 总结
在处理网络安全的场景时，应对XSS攻击，其实可以借助XSS库去做处理，不过大抵都是会对内容进行安全的转义处理，对于CSRF的防御手段其实还有很多，除了以上讲的XSS和CSRF外，还有点击劫持 - clickjacking，SQL注入，OS命令注入，DDOS等