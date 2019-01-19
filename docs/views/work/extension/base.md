---
title: '谷歌插件的开发'
description: '谷歌插件的内部通讯'
sidebarDepth: 2
sidebar: auto
---

## 谷歌插件的大致内容

background.js:背景页，当你的插件被挂载在浏览器的一瞬间开始执行，当你刷新插件和浏览器重启时，也会重新执行里面的代码

content.js:content可能不止一个，因为manifest.json里面的content_scripts配置项可以加好几个content.js，它是用来插入到某个网页的代码，比如当manifest.json的配置如下:

``` js
    "content_scripts": [{
      "matches": ["https://www.baidu.com"],  //必选，指定内容脚本要插入到哪些页面中去
      "exclude_matches": ["https://www.baidu.com/test/"], //可选。排除不需要插入内容脚本的页面
      "js": ["content.js"], //可选。要插入匹配页面的 JavaScript 文件列表，它们将按照数组中指定的顺序插入
      "css":["global.css"],
      "run_at": "document_start", //
      "all_frames": false //默认为 false，意味着仅在顶层框架中运行
    }],
```

::: tip
content_scripts是一个数组，说明可以对多个网站进行代码嵌入
"run_at"表示你的content.js要在什么时候嵌入到网站，总共有三个可选值：
"document_start":这些文件将在 css 中指定的文件之后，但是在所有其他 DOM 构造或脚本运行之前插入，也就是目标页的文档节点加载完之前就注入content.js了，这或许会让你代码里面的document.querySelector()不会达到你预期的效果
"document_end":文件将在 DOM 完成之后立即插入，但是在加载子资源（如图像与框架）之前插入，这个时候基本页面上面的任何节点你都可以拿来用，但是为了保险起见还是放在window.onload里面比较保险
"document_idle":run_at的默认值，浏览器将在 "document_end" 和刚发生 window.onload 事件这两个时刻之间选择合适的时候插入，具体的插入时间取决于文档的复杂程度以及加载文档所花的时间，并且浏览器会尽可能地为加快页面加载速度而优化，因为是浏览器来决定插入的时间，所以我基本不用这个
:::

## 插件的内部通讯
::: tip
为什么要在插件内部通讯呢？比如你在content.js获取了页面节点信息想要请求后端转换，那你是在content直接请求你自己的服务器吗？这样发出的请求源是目标页。http请求中的referrer，用来指明当前流量的来源参考页。例如在www.sina.com.cn/sports/上点击一个链接到达cctv.com首页，那么就referrer就是www.sina.com.cn/sports/了，虽然是你自己的服务器，可能设置cors跨域，但是请求源终究是别人的，这样不好，所以你就需要从content传信息到background，然后从background发出请求，background还有一个优点，无视浏览器的同源策略，简单来说可以伪装请求源，可以请求每个服务器上面的数据。
:::





