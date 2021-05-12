---
title: 节流(throttle)和防抖(debounce)
---
## **函数防抖**
>在事件被触发一段事件间隔后再执行回调，如果这段时间间隔内又被触发，则重新计时

```javascript
function debounce(func,delay){
    let timer = null
    return function(...args){
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            func.apply(this,args)
            clearTimeout(timer)
        }, delay);
    }
}
```
## **函数节流**
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
