---
title: Array
---
## 数组创建

+ 构造函数
    ```javascript
    let arr = new Array()
     // 传入值类型是数值，则创建长度为传入数值的数字
     //如果是其他类型，则创建包含该值的数组
    let arr = new Array(4) // 传入length
    let arr = new Array(1,2,3)  //传入元素

    // 也可以不用new操作符，结果一样
    let arr = Array()
    ```
+ 构造函数方法  
    Array.from()
    ```javascript
    //第一个参数是  一个类数组对象,即任何可迭代的结构。
        //或者 一个有length属性和可索引元素 的结构
    //第二个参数是 可选映射函数
    //第三个可选参数，用于指定映射函数中this的值
    let arr = Array.from('array')  //['a','r','r','a','y']
    let arr = Array.from([1,3,5])
    let brr = Array.from([1,2,3],x => x*2)
    ```
    Array.of()  
    ```javascript
    //把一组参数转换为数组。
    let arr = Array.of(1,2,3,4)
    // 用于替代之前的 Array.prototype.slice.call(arguements)
    ```
+ 数组字面量
    ```javascript
    let arr = [1,2,3]
    ```

## 数组检测

```javascript
value instanceof Array
Array.isArray(value)
Object.prototype.toString.call(value) === '[object Array]'
```

## 迭代器方法
    keys() values() entries()
    返回数组 索引迭代器，元素迭代器， 索引/值对迭代器

## 归并方法
    reduce() reduceRight()

## 迭代方法
    every() filter() forEach() map() some() 

## 搜索和位置方法
    indexOf() lastIndexOf() includes()
    都接收两个参数：要查找的元素和可选的起始搜索位置
    都是比较，要跟第一个参数 严格相等

## 操作方法
    concat() 
    slice() 含头不含尾
    splice() 
        删除：2个参数：第一个要删除元素的位置，要删除元素的个数
        插入：3+个参数：开始位置，0（删除0个），要插入的任意多个元素
        替换：3+个参数：开始位置，要删除的元素数量，要插入的任意多个元素

## 排序方法
    reverse() sort()
    sortArr.sort((a,b) => a-b) 升序

## 转换方法
    toLocaleString() 
    toString() 返回每个值的等效字符串，由逗号拼接的字符串
    valueOf() 返回数组本身

## 复制，填充
    fill(要填充的值，开始索引，结束索引)  包含开始索引，不包含结束索引
    copyWhitin()  包含开始索引，不包含结束索引