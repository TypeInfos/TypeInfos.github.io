---
title: '前端面试预备问题'
description: 'js面试的基础'
sidebarDepth: 2
sidebar: auto
categories: frontEnd
tags:
- 前端面试
---

# js中for in与for of之间的差异

let aArray = ['a',123,{a:1,b:2}]

```
for(let index in aArray){
    console.log(index);
}
```

输出: 0 1 2 说明遍历的是index，


