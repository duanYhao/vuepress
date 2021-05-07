## 浅克隆
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
## 深克隆
```javascript
// 深克隆
function deepClone(obj){
    var result
    if(typeof obj === 'object'){
        result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}
        for(let key in obj){
            result[key] = typeof obj[key] === 'object' ? clone3(obj[key]) : obj[key]
        }
    }else{
        result = obj
    }
    return result
}
```