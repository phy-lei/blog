---
title: linux服务器安装nginx
date: 2020-05-29
tags:
 - linux
categories:
 -  linux
permalink: /20200529
---

## 步骤

给nginx配置安装目录,就是nginx存放的目录，一般安装软件都是安装在/usr/local下面的，所以我们cd /usr/local，在创建一个新文件夹 mkdir nginx

### 1.进入nginx目录
::: tip
cd nginx
:::
### 2.使用wget命令下载nginx资源包
::: tip
wget http://nginx.org/download/nginx-1.5.9.tar.gz
:::
### 3.解压
::: tip
tar -zxvf nginx-1.5.9.tar.gz
:::
### 4.执行 ./configure命令
::: tip
cd nginx-1.5.9</br>
./configure
:::
可能会有一些报错，这时我们安装下其他模块
::: tip
yum -y install pcre-devel</br>
yum -y install openssl openssl-devel
:::
### 5.编译 

make 编译 （make的过程是把各种语言写的源码文件，变成可执行文件和各种库文件）
::: tip
cd /usr/local/nginx/nginx-1.5.9
make
:::
### 6.make install安装

make install 安装 （make install是把这些编译出来的可执行文件和库文件复制到合适的地方）
::: tip
make install
:::
### 7.启动nginx服务
::: tip
cd /usr/local/nginx/sbin</br>
./nginx
:::
### 8.查看端口使用情况
::: tip
netstat -ntpl
:::
如果有看到除了80端口外，还有8080或者其他端口，证明配置成功了

如果启动失败，要杀nginx进程
::: tip
killall -9 nginx
:::
然后再次启动即可

### 9.我的nginx.conf配置

```conf
  server {
      listen 8080; 
      server_name 域名; # 自己PC的ip或者服务器的域名 charset utf-8; # 避免中文乱码 
      root /home/public/; # 存放文件的目录 
      location / { 
        try_files $uri $uri/ @router;
        index  index.html;
        autoindex on; # 索引 
        autoindex_exact_size on; # 显示文件大小 
        autoindex_localtime on; # 显示文件时间 
      }
      location @router {
    	  rewrite ^.*$ /index.html last;
      } 
    }

   server {
        listen       8080;    # 监听端口（别人访问你服务器时输入的端口）
        server_name  mos-backend;
        # 配置虚拟主机
        location / {
            proxy_pass http://域名;   # 反向代理（自己电脑的ip:自己本地开启的服务器的端口）
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'PUT, GET, POST, DELETE, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-	Requested-With,If-Modified-Since,Cache-Control,Content-Type,x-ijt';
            
        }
    }
```
