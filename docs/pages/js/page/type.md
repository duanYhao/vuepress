---
    title: 数据类型
---

## 数据类型
1. **基本类型**
    ```javascript
    // 基础数据类型存储在  栈内存
    Number, Boolean, String, null, undefined, symbol, BigInt
    ```
2. **引用类型**
    ```javascript
    // 引用数据类型存储在  堆内存
    Object, Array, Function, Date, RegExp, 
    基本包装类型, 单体内置对象(Global, Math)
    ```
## 类型判断
+ **typeof**  
    ```javascript
    typeof(表达式)   typeof  变量名
    ```
    返回值：undefined boolean string number object(对象类型或者null) function<br>
    主要用于判断基本数据类型(null 除外)，object类型无法判断具体是是什么类型的对象

+ **instanceof**
    ```javascript
    object instanceof constructor
    ```
    返回值：true/false<br>
    instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上<br>
    判断某个值是什么类型的对象
    ```javascript
    // 实现instanceof  核心：向上查找原型链
    function myInstanceof(left,right){
        if(typeof left !== 'object' || left === null) return false
        let proto = Object.getPrototypeOf(left)
        while(true){
            if(proto == null) return false // 查找到尽头，还没找到
            if(proto == right.prototype) return true // 找到相同的原型对象
            proto = Object.getPrototypeOf(proto)
        }
    }
    ```
+ **Object.prototype.toString.call(target)**

## 类型转换

+ **强制类型转换**  

    Number()、parseInt()、parseFloat()、toString()、String()、Boolean()

    ```javascript
        Number(true);        // 1
        Number(false);       // 0
        Number('0111');      //111
        Number(null);        //0
        Number('');          //0
        Number('1a');        //NaN
        Number(-0X11);       //-17
        Number('0X11')       //17
    ```