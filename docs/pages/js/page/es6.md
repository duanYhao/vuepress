---
    title: es6部分
---
## let和var区别

+ let声明的变量不会提升，必须先声明才能使用，不然会报Uncaught ReferenceError错误。
+ let变量不能重复声明， 报Uncaught SyntaxError错误
+ let有块级作用域

## 箭头函数和普通函数区别

+ 写法形式不同
+ 箭头函数的this对象是定义时所在的上下文对象，普通函数的this指向直接调用者
+ 箭头函数不能作为构造函数，不能使用new命令
+ 箭头函数不能使用arguements对象，可以用rest参数代替
+ 不能使用yeild命令，因此不能作为Generator函数

## Map,Set,WeakMap,WeakSet

## Promise