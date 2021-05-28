---
    title: 克隆
---
## 浅克隆

+ Object.assign(target,source)
+ 扩展运算符方式 let cloneObj = { ...obj }
+ 遍历方式
    ```javascript
    //浅克隆
    function shallowClone(obj){
        if(typeof obj === 'object' && target !== null){
            let cloneObj = Array.isArray(obj) ? [] : {}
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    cloneObj[key] = obj[key]
                }
            }
            return cloneObj
        }else{
            return obj
        }
    }
    ```

## 深克隆

+ JSON.parse(JSON.stringify(obj))

    - 对象中的 Date、RegExp、函数，都无法复制  
    - NaN,Infinity,-Infinity 会变成null
    - 无法拷贝对象原型链

    ![An image](/imgs/cloneObj.png)
    ![An image](/imgs/clone.png)

+ 函数递归方式
```javascript

// 深克隆
function deepClone(obj){
    var result
    if(typeof obj === 'object' && obj !== null){
        result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}
        for(let key in obj){
            result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
        }
    }else{
        result = obj
    }
    return result
}
```