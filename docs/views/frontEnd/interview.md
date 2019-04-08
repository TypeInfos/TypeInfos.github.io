---
title: '初级前端工程师面经'
description: 'js面试的基础'
sidebarDepth: 2
sidebar: auto
categories: frontEnd
tags:
- 面试
- 前端
---

## js中for in与for of之间的差异

let aArray = ['a',123,{a:1,b:2}]

```
for(let index in aArray){
    console.log(index);
}
```

输出: 0 1 2 说明遍历的是index，

## 扩展运算符...

::: tip 对扩展运算符的理解
对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
:::

``` js
let bar = { a: 1, b: 2 };
let baz = { ...bar }; // { a: 1, b: 2 }
```
上面的方法实际上就等于
``` js
let bar = { a: 1, b: 2 };
let baz = Object.assign({}, bar); // { a: 1, b: 2 }
```
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。(如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性)。<br>
同样，如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。
```js
let bar = {a: 1, b: 2};
let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
baz.a = 10
console.log(bar) // {a: 1, b: 2};
console.log(baz) // {a: 10, b: 2};
```
### ...是浅拷贝
我们看个例子
```js
let bar = {a: 1, b: {one:1,two: 2}};
let baz = {...bar};
console.log(bar) // { a: 1, b: { one: 1, two: 2 } }
baz.b.one = 10
console.log('baz',baz) // baz { a: 1, b: { one: 10, two: 2 } }
console.log('bar',bar) // bar { a: 1, b: { one: 10, two: 2 } }
```
::: tip 基础数据类型与引用类型
javascript中有两种数据类型，分别是基础数据类型和引用数据类型。基础数据类型是按值访问的，常见的基础数据类型有`Number`、`String`、`Boolean`、`Null`、`Undefined`，这类变量的拷贝的时候会完整的复制一份；引用数据类型比如`Array`、`Object`,`symbol`，在拷贝的时候拷贝的是对象的引用，当原对象发生变化的时候，拷贝对象也跟着变化。
:::
为什么分成基础数据类型和引用类型，这就要扯到了栈内存和堆内存。
### 栈和堆
::: tip 栈和堆概述
栈区（stack）— 由编译器自动分配释放 ，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
堆区（heap） — 一般由程序员分配释放， 若程序员不释放，程序结束时可能由OS回收 。注意它与数据结构中的堆是两回事，分配方式倒是类似于链表
:::
基础数据类型是放在栈内存，引用类型是放在堆内存，两个图就理解了:
栈内存：
![](../../.vuepress/public/stack.jpg)
堆内存：
![](../../.vuepress/public/heap.jpg)
这就引出了浅拷贝与深拷贝，正常拷贝基础数据类型（也称为值类型）时，是直接拷贝目标值，拷贝引用类型时是拷贝引用地址。
::: tip 浅拷贝与深拷贝
浅拷贝:拷贝对象的引用，而不是在内存新建一块内存。
深拷贝:将对象的所有值拷贝一份放在新建的内存，这样两块内存互不干涉。
:::

### 深拷贝
深拷贝也经常被用到，我常用的是JSON.parse(JSON.stringify())
```js
let bar = {a: 1, b: {one:1,two: 2}};
let baz = JSON.parse(JSON.stringify(bar))
baz.b.one = 10
console.log('baz',baz) // baz { a: 1, b: { one: 10, two: 2 } }
console.log('bar',bar) // bar { a: 1, b: { one: 1, two: 2 } }
```
现在就是深拷贝了。

### 数组的扩展运算符

```js
function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
add(...numbers) // 42
```
还可以复制数组，但还是浅复制，因为数组也是引用类型
```js
const arr1 = [1, 2];
const arr2 = arr1;
arr2[0] = 2;
arr1 // [2, 2]
```
ES6有个新特效是解构复制，配合扩展运算符很好用
```js
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]
```
::: danger
如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
:::
```js
const [...rest, last] = [1, 2, 3, 4, 5];
// 报错
const [first, ...rest, last] = [1, 2, 3, 4, 5];
// 报错
```
扩展运算符还可以将字符串转为真正的数组
```js
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

## Vue的data是怎么实现

在Vue早期版本的时候是用
``` js
Object.defineProperty(window, 'fetch', {
  writable: false
});

Object.defineProperty(key, prop, {
  //配置
})
```
现在的Vue是基于ES6的proxy的实现，因为跟更改，区别就是:......
## 去重数组
``` js
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]) // [1, 2, 3]
```
<!--
## 上传图片
用鼠标拖图片在网页上预览图片 -->

## Vue兄弟间怎么检测数据变换
1. 在有些情况下可以用路由传参
2. 用Vuex作为载体传参、监听
3. 用兄弟的父元素来监听两个子组件的变换统一分配数据

## Vue中的计算属性可以调用计算属性吗？

答案是不可以，在调用后会提示：`Maximum call stack size exceeded`，
计算属性是在调用后才执行里的语句，跟函数是一样的。

## 用indexOf来实现简易版的include

```js
Array.prototype.myIncludes = function(e){
  return this.indexOf(e) !== -1
}
```

## 排序对象数组

```js
const compareAscending = function (propName) {
  return function (obj1, obj2) {
    var val1 = obj1[propName]
    var val2 = obj2[propName]
    if (val1 < val2) {
      return -1
    } else if (val1 > val2) {
      return 1
    } else {
      return 0
    }
  }
}
const compareDescending = function (propName) {
  return function (obj1, obj2) {
    var val1 = obj1[propName]
    var val2 = obj2[propName]
    if (val1 > val2) {
      return -1
    } else if (val1 < val2) {
      return 1
    } else {
      return 0
    }
  }
}
// 调用
let t = [{
  a: 1,
  b: 2
}, {
  a: 2,
  b: 3
}]
// 传入属性名
t.sort(compareDescending('a'))

```
## 防抖&节流
::: tip 防抖
防抖是用来制止某个事件在短时间内被连续触发，比如：用户在输入框输入文字的时候，需要请求后台来联想数据，如果没有加防抖时，用户每输入一个字或者每变换一个字时，都需要请求后端，有点浪费资源，这时可以加入防抖函数，在用户稍微停顿输入的时候再请求后端岂不是更好。
:::
```js
const antiShake = (fn, context, delay, args) => {
    clearTimeout(fn.timeoutID);
  //  在delay秒之内连续触发会刷新setTimeout，从而不能执行到fn
  fn.timeoutID = setTimeout(function () {
    fn.call(context, args);
  }, delay)
}
```
::: tip 节流
节流是让某个事件在执行完后过一段时间才能再次被触发，比如用来限制刷新按钮，当用户疯狂刷新，比如一秒刷新100次，我们就得向后端发送100次的请求，加了节流后端，可以自定义当第一次刷新后过几秒才能再次发起刷新事件。
:::
```js
const throttle = (fn, context, delay, args) => {
  // 判断是否是第一次执行，第一次执行给fn添加属性canRun:true
  if (!fn.hasOwnProperty('canRun')) {
    Object.assign(fn, {
      canRun: true
    })
  }
  if (!fn.canRun) {
    return
  }
  // 执通过关卡if(!canRun)，等于就拿到了通行证。然后下一步的操作就是立马将关卡关上canRun=false。
  // 这样，其他请求执行滚动事件的方法，就被挡回去了
  fn.canRun = false
  setTimeout(() => {
    fn.call(context, args)
    // 执行完一次后delay秒后才能再执行一次
    fn.canRun = true
  }, delay)
}

```

## 正则表达式
### 中文
::: tip 中文正则
“\u4e00”和“\u9fa5”是unicode编码，并且正好是中文编码的开始和结束的两个值，所以这个正则表达式可以用来判断字符串中是否包含中文
:::
匹配中文就可以用:`/^[\u4e00-\u9fa5]/`

## https
::: tip https
HTTPS即加密的HTTP，HTTPS并不是一个新协议，而是HTTP+SSL（TLS）。原本HTTP先和TCP（假定传输层是TCP协议）直接通信，而加了SSL后，就变成HTTP先和SSL通信，再由SSL和TCP通信，相当于SSL被嵌在了HTTP和TCP之间
:::

## NaN
::: tip NaN
NaN是全局属性，初始值就是NaN和Number.NaN的值是一样的，NaN和任何值都不相等，包括自身。可以通过x!==x来判断是否为NaN，为true就是NaN
:::
基本都没用到NaN，只是有时判断的时候有用到
```js
parseInt("blabla") // NaN
Math.sqrt(-2) // NaN
'A' - 'B' // NaN
1 + -'1' + 1 // 1 负号把'1'数字化了
Number('abc') // NaN
```

## css reset
1. reset 的目的不是清除浏览器的默认样式，这仅是部分工作。清除和重置是紧密不可分的。
2. reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
3. reset 期望提供一套普适通用的基础样式。但没有银弹，推荐根据具体需求，裁剪和修改后再使用。
::: tip 引发的问题
1. *{}会带来性能问题
2. 使用通配符存在隐性问题
:::
::: tip
这里推荐一个轻量级的css reset方案：normalize.css，它可以在元素样式上提供了跨浏览器的高度一致性。
:::
## &lt;img>的title和alt有什么区别
- title是global attributes之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
- alt是&lt;img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。（理解，可以自己讲出就好）
## 跨域的问题
::: tip 什么情况下会产生跨域
- 协议不相同
- 域名不相同
- 端口不相同
:::
满足其中一个就会产生跨域。<br>
跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。跨域通信通常有以下方法：
### 解决跨域的方法
 最普遍的就是CORS，就是后端允许我们的本地的请求地址或线上域名 
## js有哪几种方式里检查数据类型：
```js
let a = "cjh";
let b = 222;
let c= [1,2,3];
let d = new Date();
let e = function(){alert(111);};
let f = function(){this.name="22";};
```
### typeof 
::: tip
*可以判断function的类型；在判断除Object类型的对象时比较方便*
不能区分array和object
:::
```js
alert(typeof a)   ------------> string
alert(typeof b)   ------------> number
alert(typeof c)   ------------> object => array
alert(typeof d)   ------------> object => new Date
alert(typeof e)   ------------> function
alert(typeof f)   ------------> function
```
### instanceof 
::: tip
*后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支*
挺好用的，就是要区分大小写，自己写继承类的时候用这个比较好。<br>
instanceof在对象直接继承和间接继承的都会报true。
:::
```js
alert(c instanceof Array) ---------------> true
alert(d instanceof Date)  ---------------> true
alert(f instanceof Function) ------------> true
alert(f instanceof function) ------------> false
```
### constructor *构造器*
```js
alert(c.constructor === Array) ----------> true
alert(d.constructor === Date) -----------> true
alert(e.constructor === Function) -------> true
注意： constructor 在类继承时会出错
eg：
      function A(){};
      function B(){};
      A.prototype = new B(); //A继承自B
      var aObj = new A();
      alert(aobj.constructor === B) -----------> true;
      alert(aobj.constructor === A) -----------> false;
// 而instanceof方法不会出现该问题，对象直接继承和间接继承的都会报true：
      alert(aobj instanceof B) ----------------> true;
      alert(aobj instanceof B) ----------------> true;
// 言归正传，解决construtor的问题通常是让对象的constructor手动指向自己：
      aobj.constructor = A; //将自己的类赋值给对象的constructor属性
      alert(aobj.constructor === A) -----------> true;
      alert(aobj.constructor === B) -----------> false; 
//基类不会报true了;不过规范一点的话，继承后必须把constructor指向它的父类
```
### prototype.toString
::: tip
*大小写不能写错，比较麻烦，但胜在通用*
:::
```js
alert(Object.prototype.toString.call(a) === ‘[object String]’) -------> true;
alert(Object.prototype.toString.call(b) === ‘[object Number]’) -------> true;
alert(Object.prototype.toString.call(c) === ‘[object Array]’) -------> true;
alert(Object.prototype.toString.call(d) === ‘[object Date]’) -------> true;
alert(Object.prototype.toString.call(e) === ‘[object Function]’) -------> true;
alert(Object.prototype.toString.call(f) === ‘[object Function]’) -------> true;
```
## XSS和CSRF区别
### XSS
跨站点攻击。xss攻击的主要目的是想办法获取目标攻击网站的cookie，因为有了cookie相当于有了session，有了这些信息就可以在任意能接进互联网的PC登陆该网站，并以其他人的身份登陆做破坏。预防措施防止下发界面显示html标签，把</>等符号转义。
### CSRF
跨站点伪装请求。csrf攻击的主要目的是让用户在不知情的情况下攻击自己已登录的一个系统，类似于钓鱼。如用户当前已经登陆了邮箱或bbs，同时用户又在使用另外一个，已经被你控制的网站，我们姑且叫它钓鱼网站。这个网站上面可能因为某个图片吸引你，你去点击一下，此时可能就会触发一个js的点击事件，构造一个bbs发帖的请求，去往你的bbs发帖，由于当前你的浏览器状态已经是登陆状态，所以session登陆cookie信息都会跟正常的请求一样，纯天然的利用当前的登陆状态，让用户在不知情的情况下，帮你发帖或干其他事情。预防措施，请求加入随机数，让钓鱼网站无法正常伪造请求。
## dom事件中target，currentTarget的区别
target:当前被涉及到的对象<br>
currentTarget:事件绑定的元素
## vue的双向绑定
::: tip
Object.defineProperty的getter和setter机制
:::
```js
//object.defineProperty()
var obj = new Object();
var value;
Object.defineProperty(obj,'name',{
    get: function () {
        console.log('get it');
        return value;//必须return一个值，作为name属性的值
    },
    set: function (newvalue) {
        console.log('set it');
        value = newvalue;//同步把value的值进行更新
    }
});
console.log(obj);
console.log(obj.name);//get it
obj.name = 1234;//set it
console.log(obj.name);//get it
```
 后来Vue更新了，用ES6的proxy代替了Object.defineProperty
 ## Array.prototype.sort
 Google Chrome 对 sort 做了特殊处理，对于长度 <= 10 的数组使用的是插入排序(稳定排序算法) ，>10 的数组使用的是快速排序。快速排序是不稳定的排序算法。
## 闭包
::: tip 闭包
变量的作用域与非就是两种：全局变量、局部变量<br>
函数内部可以直接读取全局变量<br>
作用：使私有变量（局部变量）能够转换被多个函数共享，而不被能解析器从内存中释放掉
:::
## 编写一个Javascript函数，传入一个数组，对数组中的元素进行去重并返回一个无重复元素的数组，数组的元素可以是数字、字符串、数组和对象。举例说明：
::: tip 
1. 如传入的数组元素为[123, "meili", "123", "mogu", 123],则输出：[123, "meili", "123", "mogu"]
2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"],则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"],则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
:::
```js
Array.prototype.unique = function(){
  let hash = new Map()
  let result = []
  let item
  for (let i = 0; i < this.length; i++) {
    console.log(Object.prototype.toString.call(this[i]))
    if (Object.prototype.toString.call(this[i]) === '[object Object]'
      || Object.prototype.toString.call(this[i]) === '[object Array]') {
      item = JSON.stringify(this[i])
    } else {
      item = this[i]
    }
    if (!hash.has(item)) {
      hash.set(item, true)
      result.push(this[i])
    }
  }
  return result
}
```
## js 快速排序
```js
function quickSort(arr, left, right) {
     //为了防止剩一个数时再进行计算
    if (left < right) {
        //设置最左边的元素为基准点：pivot
    let p = arr[left];
    //把要排序的序列中比p大的放到右边，比p小的放到左边，p的下标位置为i
    let i = left,
        j = right;
    while(i<j)
    {
        //j向左移，找到一个比p小的元素，直到找到小于p的数就停止在j下标上
        while(arr[j] >= p && i < j){
            j--;
        }
        //i向右移，找到一个比p大的元素
        while(arr[i] <= p && i < j){
            i++;
        }
        //当i和j不相等的时候交换
        if (i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[left] = arr[i];
    arr[i] = p;
      //i-1,i+1是为了让当前基准点继续参加排序
    quickSort(arr,left,i - 1);
    quickSort(arr, i + 1, right);
    }
    return arr;
}
var arr = [1,3,4,2,45,2,92,0,-2];
console.log(quickSort(arr,0,arr.length-1));
```
## null && undefined
::: tip
在JavaScript规范中提到，要比较比较相等之前，不能将nullundefined转换成其他任何值，并且规定null和undefined是相等。null和undefined都代表无效的值。
:::
全等于状态下，是false，这个很好理解了。它们不属于同一类型数据。
```js
console.log( undefined === null ) // false
typeof null        //object
typeof undefined       //undefined
```
## Number && parseInt && parseFloat
### Number
如果是Boolean值，true和false值将分别被转换为1和0。<br/>
如果是数字值，只是简单的传入和返回。<br/>
如果是null值，返回0。<br/>
如果是undefined，返回NaN。<br/>
如果是字符串：<br/>
* 如果字符串中只包含数字时，将其转换为十进制数值，即“1”变成1，“123”变成123，而“011”会变成11
* 如果字符串中包含有效的浮点格式，如“1.1”，则将其转换为对应的浮点数值
* 如果字符串中包含有效的十六进制格式，例如“0xf”，则将其转换为相同大小的十进制整数值
* 如果字符串是空的（不包含任何字符），则将其转换为0
* 如果字符串中包含除上述格式之外的字符，则将其转换成NaN
### parseInt
在转换字符串时，更多的是看是否符合数值模式。会忽略字符串前面的空格，直至找到第一个非空格字符。
* 如果第一个字符不是数字字符或负号，`parseInt()`就会返回NaN，也就是说用`parseInt()`转换空字符时会返回NaN
* 如果第一个字符串是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到一个非数字字符。例如，“123blue”会被转换为123，因为“blue”会被完全忽略，类似低“22.5”会被转换成22，因为小数点不是有效数字字符
* 如果字符串以“0x”开头且后跟数字字符，就会将其当作一个十六进制整数
* 如果字符串以“0”开头且后跟数字字符，就会将其当作一个八进制整数
* parseInt()函数增加了第二参数用于指定转换时使用的基数（即多少进制）
`parseInt("10",16)//按十六进制解析`
`parseInt("10",8)//按八进制解析`
### parseFloat
与parseInt类似，parseFloat也是con第一个字符开始解析每个字符，而且也是一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符。也就是说，字符串的第一个小数点是有效的，而第二个小数点就是无效的，因此它后面的字符串将被忽略。例如“22.34.5”将会转换为22.34。<br/>
除了第一个小数点有效之外，parseFloat与parseInt的第二个区别在与它始终都会忽略前导的零。<br/>
parseFloat()只解析十进制值，因此它没有用第二个参数指定基数的用法。
```js
var num1=parseFloat("1234blue");  //1234

var num2=parseFloat("0xA");                  //0

var num3=parseFloat("0908.5");      //908.5

var num4=parseFloat("3.125e7");             //31250000
```
::: tip
ECMAScript定义了isNaN()函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否“不是数值”。isNaN()在接收到一个值之后，会尝试将这个值转换为数值。不能转换为数值的参数会返回true。
:::