---
title: '命名规范'
  # 大标题
sidebarDepth: 2
sidebar: auto
categories: frontEnd
# 分类 共有三个分类： frontEnd work else
date: 2019-02-25
# 时间
tags:
- 命名规范
# 标签
---

::: tip 概述
“风格” 的含义涵盖范围甚广，从 “变量使用驼峰格式” 到 “禁止使用全局变量” ，再到 “禁止使用异常” 。
如果代码风格统一，我们就有了一个共同思维的环境。每个开发人员就可以专注于业务逻辑，而不是先搞明白这坨代码是谁写的，它是什么意思，为什么要这样写...

虽然我们在这里提出统一，但只是想让大家都知晓并借鉴而对自己的风格进行修正。

我们不做独裁者，也不会强迫你每一行代码应该怎么写，而是把一些大家存在争议，或可以提高团队效率的开发原则进行声明和约定。
:::

## 项目命名
全部采用小写方式，以短划线分隔。<br>
例如：project，my-project-name
## 目录命名
全部采用小写方式，复数形式。有多个单词时，以下划线分割。<br>
例如：styles，utils，node_modules
## JS文件命名
全部采用小写方式，以短划线分隔。<br>
例如：build-plugins.js，check-versions.js
## CSS，SCSS 文件命名
全部采用小写方式，以短划线分隔。<br>
例如：custom-forms.scss，bootstrap-reboot.scss
## HTML 文件命名
全部采用小写方式，以短划线分隔。<br>
例如：error-report.html，user-list.html
## 资源文件命名
全部采用小写方式，使用下划线分割。语法规则：<br>
`<WHAT>_<WHERE>_<DESCRIPTION>_<SIZE>`<br>
例如：icon_menu_dashboard_48.svg，logo_footer_white_small.svg
## 资源协议
::: tip 资源协议
尽可能使用 HTTPS 协议对嵌入式资源进行引用。
:::
所有图片及其它媒体文件、CSS 样式表和 JS 脚本都建议使用 HTTPS 协议（https:），除非指定的文件不支持 HTTPS 。

不推荐：省略协议声明<br>
`<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`<br>
不推荐：使用 HTTP 协议<br>
`<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`<br>
推荐<br>
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`<br>
不推荐：省略协议声明<br>
@import '//fonts.googleapis.com/css?family=Open+Sans';<br>
不推荐：使用 HTTP 协议<br>
`@import 'http://fonts.googleapis.com/css?family=Open+Sans';`<br>
推荐<br>
`@import 'https://fonts.googleapis.com/css?family=Open+Sans';`<br>
## 代码格式
* 缩进
一次缩进2个空格
不要使用制表符（tab）或多个空格进行缩进，禁止混合使用。
``` html
<ul>
  <li>Fantastic
  <li>Great
</ul>
.example {
  color: blue;
}
```
* 大小写
所有代码必须为小写：适用于 HTML 元素名称、属性、属性值（除非是 text/CDATA），CSS 选择器、属性和属性值（除字符串之外）。
不推荐<br>
`<A HREF="/">Home</A>`<br>
推荐<br>
`<img src="google.png" alt="Google">`<br>
不推荐<br>
`color: #E5E5E5;`<br>
推荐<br>
`color: #e5e5e5;`<br>
* 行尾空格
删除行尾空格
行尾空格没必要存在，且会增加文件对比复杂度。
不推荐
```html
<p>What?_
```
推荐
```html
<p>Yes please.
```