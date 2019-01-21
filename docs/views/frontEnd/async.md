---
title: 'async的理解和使用'
description: '用async代替大部分的promise'
sidebarDepth: 2
sidebar: auto
categories: frontEnd
tags:
- 前端
- async/await
---

::: tip
为什么要使用async/await，常用promise（当你没有彻底理解promise，请先看这篇文章）的人都知道每次都需要写`new Promise()`，代码整体看起来没那么优雅，但是两个作用都是一样的，都是处理异步操作。
:::

## 初步了解与Promise的区别

先看一段Promise的用法

``` js
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('timeout',ms)
			resolve('我是传递的信息')
		}, ms);
	});
}

function print (value, ms) {
	return new Promise((resolve, reject) => {
		timeout(ms).then(v => {
			resolve(v)
		})
	});
}

print('hello', 2000).then(v => {
	console.log('print', v)
})
```
两秒后出现输出一下结果:
```
timeout 2000
print 我是传递的信息
```
现在我们用async来代替上面print函数的代码

``` js
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('timeout',ms)
			resolve('我是传递的信息')
		}, ms);
	});
}

async function print (value, ms) {
	let msg = await timeout(2000)
	return msg
}

print('hello', 2000).then(v => {
	console.log('print', v)
})
```
输出的结果和执行的过程都是一样的，但是代码简便了很多
### 初步了解
