(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{206:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("概述")]),s._v(" "),n("p",[s._v("。。。")])]),s._v(" "),n("h2",{attrs:{id:"request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[s._v("#")]),s._v(" request")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("封装axios")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" axios "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" baseUrl "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../services/index'")]),s._v("\n\naxios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaults"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("withCredentials "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" codeMessage "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'服务器成功返回请求的数据。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'新建或修改数据成功。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一个请求已经进入后台排队（异步任务）。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'删除数据成功。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发出的请求有错误，服务器没有进行新建或修改数据的操作。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户没有权限（令牌、用户名、密码错误）。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户得到授权，但是访问是被禁止的。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发出的请求针对的是不存在的记录，服务器没有进行操作。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("406")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求的格式不可得。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求的资源被永久删除，且不会再得到的。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("422")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'当创建一个对象时，发生一个验证错误。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'服务器发生错误，请检查服务器。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'网关错误。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'服务不可用，服务器暂时过载或维护。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'网关超时。'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("checkStatus")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" errortext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" codeMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statusText\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$notify"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`请求错误 ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("errortext"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("`")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" error "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("errortext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status\n  error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" error\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/**\n * Requests a URL, returning a promise.\n *\n * @param  {string} url       The URL we want to request\n * @param  {object} [options] The options we want to pass to "fetch"\n * @return {object}           An object containing either "data" or "err"\n */')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" defaultOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'include'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" newOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("defaultOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("options "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n    newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PUT'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("\n    newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DELETE'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FormData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json; charset=utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// newOptions.body is FormData")]),s._v("\n      newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("axios")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("checkStatus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// DELETE and 204 do not return data by default")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// using .json will report an error.")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DELETE'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请求错误'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br")])]),n("h2",{attrs:{id:"pug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pug","aria-hidden":"true"}},[s._v("#")]),s._v(" pug")]),s._v(" "),n("p",[s._v("安装命令\n"),n("code",[s._v("npm install pug pug-loader pug-filters -D")]),s._v("\n在"),n("code",[s._v("webpack.base.conf")]),s._v("文件，在"),n("code",[s._v("module")]),s._v("的"),n("code",[s._v("rule")]),s._v("对象添加以下代码:")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.pug$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pug'")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[s._v("#")]),s._v(" Eslint")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("rules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强制 “for” 循环中更新子句的计数器朝着正确的方向移动")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'for-direction'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'warn'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强制 getter 函数中出现 return 语句")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'getter-return'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁止空块语句")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-empty'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭强制 generator 函数中 * 号周围使用一致的空格")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'generator-star-spacing'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// allow debugger during development")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-debugger'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'indent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁止使用 空格 和 tab 混合缩进")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-mixed-spaces-and-tabs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一些风格指南不允许使用 tab 字符，包括在注释内")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-tabs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'off'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 禁止使用分号")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'semi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'never'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["error", "never"]不允许函数括号之间存在空格')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"space-before-function-paren"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"never"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h4",{attrs:{id:"小标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小标题","aria-hidden":"true"}},[s._v("#")]),s._v(" 小标题")]),s._v(" "),n("h2",{attrs:{id:"第二个大标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二个大标题","aria-hidden":"true"}},[s._v("#")]),s._v(" 第二个大标题")]),s._v(" "),n("h3",{attrs:{id:"中标题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中标题","aria-hidden":"true"}},[s._v("#")]),s._v(" 中标题")]),s._v(" "),n("h4",{attrs:{id:"小标题-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小标题-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 小标题")])])}],!1,null,null,null);r.options.__file="VueConfig.md";t.default=r.exports}}]);