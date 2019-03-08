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
- Vue的一些配置
# 标签
---

::: tip 概述
。。。
:::

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
## Eslint
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

#### 小标题

## 第二个大标题

### 中标题

#### 小标题



