---
title: 'Array内置函数'
description: '::: tip
测试
:::'
sidebarDepth: 2
sidebar: auto
categories: frontEnd
date: 2017-12-28 23:39:45
tags:
- JS
- Array
---

::: tip 概述
常用的array的对比与使用
:::

## forEach与map
::: tip forEach与map的异同
* 不同点:forEach没有返回值，map有返回值
* 相同点:两者都是遍历数组：对数组的每个元素执行一次提供的函数，两者不修改调用它的原数组本身（可以在遍历的过程中用下标更改原数组的值）
:::

### forEach与map需要的参数
::: tip forEach需要的参数
* callback 为数组中每个元素执行的函数，该函数接收三个参数：
  + currentValue(必须) 数组中正在处理的当前元素。
  + index(可选) 数组中正在处理的当前元素的索引。
  + array(可选) forEach()方法正在操作的数组。
* thisArg(可选) 当执行回调 函数时用作this的值(参考对象)。
* 返回值: undefined
:::

::: tip map需要的参数
* callback 为数组中每个元素执行的函数，该函数接收三个参数：
  + currentValue(必须) 数组中正在处理的当前元素。
  + index(可选) 数组中正在处理的当前元素的索引。
  + array(可选) callback  map 方法被调用的数组。
* thisArg(可选) 当执行回调 函数时用作this的值(参考对象)。
* 返回值: 一个新数组，每个元素都是回调函数的结果
:::

## pop与shift
::: tip pop与shift异同
* 不同点:pop从数组中删除最后一个元素，shift从数组中删除第一个元素
* 相同点:两者都会对被调用的数组进行更改（更改数组的长度），都会返回被删除的那个值，如果数组为空时调用改方法返回`undefined`
:::

## indexOf与includes
::: tip indexOf与includes异同
* 不同点:返回值不同，indexOf方法在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1，includes：数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false
* 相同点:两者都可以用来判断某个值是否存在当前数组，需要的参数是相同的。
:::

::: tip indexOf与includes需要的参数
* searchElement 要查找的元素
* fromIndex 开始查找的位置
:::

### indexOf的参数fromIndex的一些注意事项
indexOf的第二个参数fromIndex默认值为0，也就是从数组下标的第0个开始，如果改值大于或等于数组长度，意味着不会在数组里查找，返回-1。
如果该值是一个负值，则将其作为数组末尾的一个抵消，也就是从数组的最右边开始算起，-1表示最后一个元素，-2表示倒数第二个元素开始查找，以此类推。还有种情况就是一个数组长度为5，你输入的fromIndex为-8，抵消后还是-3所以整个数组都将会查询。**注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组**

#### indexOf例子
``` js
let array = [2, 5, 9]
array.indexOf(2) // 0 在下标为0的位置找到[2]
array.indexOf(7) // -1 没有找到返回-1
array.indexOf(9, 2) // 2 从下标为[2]的地方开始找，返回2
array.indexOf(2, -2) // -1 从倒数第二个下标开始找，也就是下标[1]开始找，以此对比5,9都没有匹配到2，所以返回-1
array.indexOf(2, -4) // 0 因为-4的绝对值大于数组长度3，所以抵消之后还是负值，还是会将整个数组都查询一遍
```

### includes的参数fromIndex的一些注意事项
从该索引开始寻找目标值。如果为负值，则按升序从`array.length - fromIndex`的索引开始搜索。默认为0.**这个参数的定义没有indexOf那么复杂，注意一点：如果 fromIndex 为负值，计算出的索引将作为开始搜索目标值的位置。如果计算出的索引小于 0，则整个数组都会被搜索**
#### includes例子
``` js
let array = [1, 2, 3]
array.includes(2) // true  在下标为[1]的位置找到2
array.includes(4) // false array没有找到目标值4
array.includes(3 ,3) // false 从下标[3]开始搜索，但是数组的最后一个下标为[2]，所以没有搜索，返回false
array.includea(1, -1) // false 从`array.length - fromIndex`来看，3-1=2，从下标2开始搜索，没有搜索，返回false
array.includea(2, -1) // false 一样的道理，接着看下个例子
array.includea(3, -1) // true 按照MDN的解释是这样的：数组长度：3，fromIndex：-1，计算出来的index为：3+(-1)=2,从下标[2]开始搜索，刚好是目标值3，返回true
```

## splice与slice
::: tip splice与slice的异同
不同点:splice用来删除数组,slice用来拷贝数组元素（浅拷贝），splice会改变原数组
相同点:都是返回一个新的数组
:::

### splice参数
::: tip splice参数
* start​ (可选) 指定修改的开始位置(从数组下标0开始)。<br>
 + 如果超出了数组的长度，则从数组尾开始添加内容。如果是负值，则表示从数组末位开始第几位（从-1计数）<br>
 + 如果负数的绝对值大于数组的长度，则表示开始位置为第0位
* deleteCount (可选) 整数，表示要移除的数组元素的个数。<br>
 + 如果`deleteCount`要是0或者负数，则不移除元素。这中情况下，至少应添加一个新元素。<br>
 + 如果`deleteCount`大于`start`之后的元素的总数，则从`start`后面的元素都将被删除(包含下标`start`的元素)<br>
 + 如果`deleteCount`被省略，则其相当于`(arr.length - start)`
 + item1, item2, ... (可选) 要添加进数组的元素，从`start`开始，如果不指定，则`splice`将只删除数组
:::

### splice例子
从第 2 位开始删除 0 个元素，插入 "drum"
``` js
var myFish = ["angel", "clown", "mandarin", "surgeon"];
var removed = myFish.splice(2, 0, "drum");
console.log(myFish) // ["angel", "clown", "drum", "mandarin", "surgeon"]
console.log(removed) // []，没有元素被删除
```
从第3位开始删除1个元素
``` js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
console.log(myFish) // ["angel", "clown", "drum", "sturgeon"]
console.log(removed) //被删除元素数组：["mandarin"]
```
从第2位开始删除1个元素，然后插入“trumpet”
``` js
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet"); // 2代表从下标[2]开始，1代表删除一个，从第三个参数开始就是被添加元素
console.log(myFish)
//运算后的myFish: ["angel", "clown", "trumpet", "surgeon"]
//被删除元素数组：["drum"]
```
从第2位开始删除2个元素
```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);
// 运算后的myFish： ["parrot", "anemone", "sturgeon"]
// 被删除元素数组：["blue", "trumpet"]
```
当deleteCount大于等于数组长度，则从数组末尾开始添加内容
```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length, 2, 'yellow', 'red');
// 运算后的myFish： ["parrot", "anemone", "blue", "trumpet", "sturgeon", "yellow", "red"]
// 被删除元素数组：[]
```
### slice参数
::: tip slice参数
* begin (可选) 从该索引开始提取原数组的元素(从0开始)
 + 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）<br>
如果省略`begin`，则`slice`从索引0开始
* end (可选) 在该索引处结束提取原数组元素(从0开始)。slice会提取原数组中索引<br>
 + 从begin到end的所有元素(包含begin，但不包含end)<br>
 + slice(1, 4)提取原数组中的第二个元素开始直到第四个元素的所有元素 （索引为 1, 2, 3的元素）<br>
 + 如果 end 被省略，则slice 会一直提取到原数组末尾<br>
 + 如果 end 大于数组长度，slice 也会一直提取到原数组末尾
:::
### slice例子
返回现有数组的一部分
```js
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// fruits:['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus:['Orange','Lemon']
```
slice的浅拷贝
```js {6}
let colors = { cOne: 'red'}
let colorsArray = [colors, 'deepstyblue', 'purple']
let newColors = colorsArray.slice(0, 2)
console.log(newColors) // [ { cOne: 'red' }, 'deepstyblue' ]
console.log(colorsArray) // [ { cOne: 'red' }, 'deepstyblue', 'purple' ]
newColors[0].cOne  = 'black'
newColors[1] = 'black'
console.log(newColors) // [ { cOne: 'black' }, 'black' ]
console.log(colorsArray) // [ { cOne: 'black' }, 'deepstyblue', 'purple' ]
```
上面代码说明了slice的浅拷贝，所以当你想真正拷贝一个数组的某些元素的时候需要用JSON.parse(JSON.stringify())进行深拷贝，具体我在另一个[页面]()详细提到



