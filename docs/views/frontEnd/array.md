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

::: tip ss
测试
:::

### forEach与map
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
* thisArg(可选) 可选参数。当执行回调 函数时用作this的值(参考对象)。
* 返回值: undefined
:::

::: tip map需要的参数
* callback 为数组中每个元素执行的函数，该函数接收三个参数：
  + currentValue(必须) 数组中正在处理的当前元素。
  + index(可选) 数组中正在处理的当前元素的索引。
  + array(可选) callback  map 方法被调用的数组。
* thisArg(可选) 可选参数。当执行回调 函数时用作this的值(参考对象)。
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
indexOf的第二个参数fromIndex默认值为0，也就是从数组下标的第0个开始，如果改值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果该值是一个负值，则将其作为数组末尾的一个抵消，也就是从数组的最右边开始算起，-1表示最后一个元素，-2表示倒数第二个元素开始查找，以此类推。还有种情况就是一个数组长度为5，你输入的fromIndex为-8，抵消后还是-3所以整个数组都将会查询。**注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组**

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


