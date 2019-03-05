---
title: '题目名字'
  # 大标题
sidebarDepth: 2
sidebar: auto
categories: frontEnd
# 分类 共有三个分类： frontEnd work else
date: 2019-02-12
# 时间
tags:
- Vue的一些技巧
# 标签
---

::: tip 概述

:::

## 点击事件
### 鼠标右击事件
```js
@contextmenu.stop.prevent="rightClick($event)"
@contextmenu.prevent = "rightClick($event)"
```
### 双击事件
```
@dblclick="navDblclick(data)"
```
## Eslint
```js
rules: {
// 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
'for-direction': 'error',
// 强制 getter 函数中出现 return 语句
'getter-return': 'error',
// 禁止空块语句
'no-empty': 'error',
    'generator-star-spacing': 'off',
    'no-return-await': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'off',
    'semi': [2, 'never'],
    "space-before-function-paren": [0, "always"], //["error", "never"]不允许函数括号之间存在空格
}
```

## pingyin
::: tip
讲文字转化为拼音
npm install pinyin
:::

```js
    userPinyin() {
      let name = this.userName

      if (!name) {
        return '系统根据用户姓名给出'
      }

      let toPinyin = this.$pinyin(name, {
        style: this.$pinyin.STYLE_NORMAL, // 设置拼音风格
        heteronym: false
      })
      if (toPinyin.length === 1) {
        return toPinyin.join()
      }

      return toPinyin.reduce((previousValue, value) => {
        return previousValue + value
      })
    }
```

## 第二个大标题

### 中标题

#### 小标题



