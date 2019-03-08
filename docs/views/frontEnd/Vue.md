---
title: 'Vue的一些理解'
  # 大标题
sidebarDepth: 2
sidebar: auto
categories: frontEnd
# 分类 共有三个分类： frontEnd work else
date: 2019-02-12
# 时间
tags:
- Vue
- Skill
- Config
# 标签
---

::: tip Vue概述
国产好用的MVVM框架（View的状态和行为抽象化），相对于react比较好入门，一些是一些自己的理解和笔记。
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
## request
::: tip
封装axios
:::
```js
import axios from 'axios'
import baseUrl from '../services/index'

axios.defaults.withCredentials = true

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

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const errortext = codeMessage[response.status] || response.statusText
  this.$notify.error({
    title: `请求错误 ${response.status}`,
    message: `${errortext}`
  })
  const error = new Error(errortext)
  error.name = response.status
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(api, options = {}) {
  const url = api.replace('/api', baseUrl)
  const defaultOptions = {
    credentials: 'include',
  }
  const newOptions = { ...defaultOptions, ...options }
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }

  return axios(url, newOptions)
    .then(checkStatus)
    .then(response => {
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text()
      }
      return response.data
    })
    .catch(e => {
      console.error('请求错误', e)
    })
}

```

## pug
安装命令
`npm install pug pug-loader pug-filters -D`
在`webpack.base.conf`文件，在`module`的`rule`对象添加以下代码:
```js
  {
    test: /\.pug$/,
    loader: 'pug'
  }
```
## .eslintrc
```js
rules: {
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'warn',
    // 强制 getter 函数中出现 return 语句
    'getter-return': 'error',
    // 禁止空块语句
    'no-empty': 'error',
    // 关闭强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["error", 2],
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 一些风格指南不允许使用 tab 字符，包括在注释内
    'no-tabs': 'off',
    // 禁止使用分号
    'semi': ['error', 'never'],
    // ["error", "never"]不允许函数括号之间存在空格
    "space-before-function-paren": ["error", "never"]
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
## slot
::: tip slot
slot是父组件与子组件的通讯方式，可以将父组件的内容显示在子组件当中。
:::
普通slot的用法，只有一个slot。<br>
新建slot.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.8/dist/vue.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="app">
    <say-to p-name="豆豆">你是睿智吧</say-to>
    <say-to p-name="水水">你也是睿智</say-to>
    <say-to p-name="大大">你管管他们两</say-to>
  </div>
  <script src="./testSlot.js"></script>
</body>
</html>
```
新建slot.js
```js
const SayTo = {
  props: {
    pName: String
  },
  template: `
    <div>
      你好<strong>{{ pName }}</strong>
      <slot></slot>
    </div>
  `
}

let app = new Vue({
  el: '#app',
  components: {
    SayTo
  }
})
```
组合slot的用法，多个slot的组合，也叫具名slot。<br>
新建combinedSlot.index
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.8/dist/vue.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="app">
    <nba-all-start c="奥尼尔" pf="加内特">
      <span slot="sf">皮尔斯</span>
      <span slot="sg">雷阿伦</span>
      <span slot="pg">隆多</span>
    </nba-all-start>
  </div>
  <script src="./combinedSlot.js"></script>
</body>
</html>
```
新建combinedSlot.js
```js
const NbaAllStart = {
  props: {
    c: String,
    pf: String
  },
  template: `
    <div>
      <div>中锋： {{ c }}</div>
      <div>大前： {{ pf }}</div>
      <div>小前： <slot name="sf"></slot></div>
      <div>大前： <slot name="sg"></slot></div>
      <div>大前： <slot name="pg"></slot></div>
      <slot></slot>
    </div>
  `
}
let app = new Vue({
  el: '#app',
  components: {
    NbaAllStart
  }
})
```
## router
::: tip 
Vue router的用处就是在单页应用中通过router与component的交互，演变成类似多页面，但是路由变化时并没有重新刷新页面和请求后端资源，只是页面div的替换，因此页面切换速度非常快。
:::
### 嵌套路由
新建index.html文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.8/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="app">
    <router-view></router-view>
  </div>
  <script src="./testRouter.js"></script>
</body>
</html>
```
新建index.js
```js
const index = {
  template: `
    <div>
    <h1>this is index</h1>
    <router-link to='/foo'>go to foo</router-link>
    <router-link to='/bar'>go to bar</router-link>
    <router-view></router-view>
    </div>
  `
}
const foo = {
  template: `
    <div>
    <h1>this is foo</h1>
    </div>
  `
}
const bar = {
  template: `
    <div>
    <h1>this is bar</h1>
    <router-link to='/bar/barchild'>go to barchild</router-link>
    <router-view></router-view>
    </div>
  `
}
const barchild = {
  template: `
    <div>
      <h1>this is barchild</h1>
      <router-link to='/bar/barchild/one'>go to one</router-link>
      <router-link to='/bar/barchild/two'>go to two</router-link>
      <router-view></router-view>
    </div>
  `
}
const barchildOne = {
  template: `
  <div>
    <h1>this is barchildOne</h1>
  </div>
`
}
const barchildTwo = {
  template: `
  <div>
    <h1>this is barchildTwo</h1>
  </div>
`
}
const routes = [{
  path: '/',
  name: 'index',
  component: index,
  children: [{
      path: '/foo',
      name: 'foo',
      component: foo
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar,
      children: [{
        path: '/bar/barchild',
        name: 'barchild',
        component: barchild,
        children: [{
            path: '/bar/barchild/one',
            name: 'one',
            component: barchildOne
          },
          {
            path: '/bar/barchild/two',
            name: 'two',
            component: barchildTwo
          }
        ]
      }]
    }
  ]
}]
const router = new VueRouter({
  routes
})
let app = new Vue({
  el: '#app',
  router
})
```
上面代码讲的是路由嵌套的使用，也是基本项目最常用到的结构。



