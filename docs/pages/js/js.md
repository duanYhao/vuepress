---
title: javascript
---

## 数据类型
1. **基本类型**
    ```javascript
    Number,Boolean,String,null,undefined,symbol,BigInt
    ```
2. **引用类型**
    ```javascript
    Object ,对象子类型(Array,Function)
    ```
## 类型判断
```javascript
typeof
```
## 0.1+0.2===0.3?为什么?解决办法?
## apply,call,bind
## 浅克隆，深克隆
```javascript
//浅克隆
function shallowClone(obj){
    let cloneObj = {}
    for(let key in obj){
        cloneObj[key] = obj[key]
    }
    return cloneObj
}
/*
*若使用 JSON.parse(JSON.stringify(obj)) 来做克隆,对象中的 Date、RegExp、函数，都无法复制,如下图
* /
```
![An image](/imgs/cloneObj.png)
![An image](/imgs/clone.png)
```javascript
// 深克隆

```
## 闭包

## 节流(throttle)和防抖(debounce)
### **函数防抖**
>在事件被触发一段事件间隔后再执行回调，如果这段时间间隔内又被触发，则重新计时

```javascript
function debounce(func,delay){
    let timer = null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this,args)
            clearTimeout(timer)
        }, delay);
    }
}
```
### **函数节流**
>一段时间间隔内，事件触发多次，只有一次生效
```javascript
// 定时器方式
function throttle(func,delay){
    let timer = null
    return function(...args){
        if(!timer){
            timer = setTimeout(() => {
                func.apply(this,args)
                clearTimeout(timer)
                timer = null
            }, delay);
        }
    }
}
// 时间戳方式
function throttle2(func,delay){
    let start = 0;
    let that = this;
    return function(...args){
        let now = new Date().getTime()
        if(now - start > delay){
            func.apply(that,args)
            start = now
        }
    }
}
```