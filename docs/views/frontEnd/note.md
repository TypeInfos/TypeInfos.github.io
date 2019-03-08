---
title: '前端小笔记'
  # 大标题
sidebarDepth: 2
sidebar: auto
categories: frontEnd
# 分类 共有三个分类： frontEnd work else
date: 2019-02-12
# 时间
tags:
- 前端
- 笔记
# 标签
---

::: tip 概述
当遇到一些要死机的东西时会记在这边。
:::

## http状态码
```js
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
```

## placeholder样式的更改
```css
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
color: #666; 
} 
input:-moz-placeholder, textarea:-moz-placeholder { 
color: #666; 
} 
input::-moz-placeholder, textarea::-moz-placeholder { 
color: #666; 
} 
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
color: #666; 
}
```



