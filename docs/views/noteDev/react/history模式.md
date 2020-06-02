---
title: 项目部署上线，报404？究竟是？？？
date: 2020-05-28
tags:
 - react
categories:
 - react
permalink: /20200528
---

## history模式的坑

什么？404？不可能，我本地跑的可好了？你清下缓存吧.jpg

相信这是绝大数人都会遇到的一个问题吧，项目本地跑的好好的，一旦打包上线，就404了，我们需要重新配置下nginx服务代理

刚开始的配置是：

```conf
server {
    listen 30002;
    server_name  域名/外网IP;
    index index.html;
    root  /www/server/dist;  #dist上传的路径
    # 避免访问出现 404 错误
    error_page 404 /index.html;
}
```

修改后的配置：

```conf
{
    listen 30002;
    server_name 域名/外网IP;
    index index.html;
    root  /www/server/dist;  #dist上传的路径
    location / {
    	try_files $uri $uri/ @router; 
    	index  index.html;
    }
    #重定向
    location @router {
    	rewrite ^.*$ /index.html last;
    }  
}
```
::: tip
之所以要配置重定向代理是因为，history模式下的坑，history模式下，/list不等于/index.html/list，他会去找该路径下的list，因为默认不会从index.html出发，而是/list，发现/list没有，所以就404了，如果从index.html出发就不会有这种bug了，所以我们只要他没有去到正确路径的话，就重定向到index.html下，再去查找；当然，如果你用hash模式，就不会有这种问题。
:::