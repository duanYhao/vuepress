---
title: 创建对象
---
## 工厂模式
用函数来封装特定接口创建对象的细节
```javascript
function createPerson(name) {
    var obj = new Object()
    obj.name = name
    obj.sayName = function() {
        console.log(this.name)
    }
    return obj
}
var man = createPerson('hi')
man.sayName()
```
工厂函数创建的对象，无法知道对象是什么类型的对象

## 构造函数模式
```javascript
function Person(name){
    this.name = name
    this.sayName = function(){
        console.log(this.name)
    }
}
var person = new Person('john')
console.log(person instanceof Person)
```
+ 使用构造函数new出来的对象，都有一个constructor属性，指向Person<br>
通过instanceof就可以判断出实例是什么类型的对象
+ 使用这样的形式创建多个对象，sayName方法会实例化多次，每个对象都会实例化一次<br>
如果将sayName方法提出来在外部声明可以结局可以解决方法实例化多次的问题<br>
但如果方法很多，就会产生很多的全局变量

## 原型模式
让所有对象实例共享它所包含的属性和方法
```javascript
function Car(){}
Car.prototype.name = 'dazhong'
Car.prototype.sayName = function(){
    console.log(this.name)
}
var car1 = new Car()
car1.sayName()

// 或

function Person(){}
Person.prototype = {
    constructor: Person,
    name: 'hihi',
    sayName: function(){
        console.log(this.name)
    }
}
```
由于属性和方法是所有实例共享的，如果属性值是引用类型（如数组），则各个实例数据会被污染。

## 组合使用 构造函数模式 和 原型模式
（使用最广泛，认同度最高的一种创建自定义类型的方式）<br>
构造函数用于定义 实例属性，原型模式用于定义 方法和共享属性
```javascript
function Person2(name){
    this.name = name;
    this.friends = ['hh','nn']
}
Person2.prototype = {
    constructor: Person2,
    sayName: function () {
        console.log(this.name)
    }
}
```

## 动态原型模式
```javascript
function Person3(name){
    this.name = name;
   if(typeof this.sayName != 'function'){
       Person3.prototype.sayName = function(){
           console.log(this.name)
       }
   }
}
```
判断方法不存在的情况下才会添加到原型。判断添加的代码智慧在初次调用构造函数时才会执行。

## 寄生构造函数模式
```javascript
function Person4(name){
    var o = new Object()
    o.name = name
    o.sayNmae = function(){
        console.log(this.name)
    }
    return o
}
var p = new Person4('jk')
p.sayName()
```
返回的对象和构造函数或者构造函数原型属性之间没有关系，不能使用instanceof判断对象类型

## 稳妥构造函数模式
没有公共属性，而且其他方法也不引用this对象，不使用new操作符调用构造函数
```javascript
function Person4(name){
    var o = new Object()
    o.sayName = function(){
        console.log(name)
    }
    return o
}
var p = Person4('jk')
p.sayName()
```