---
    title: 事件处理程序
---
>事件 就是用户做浏览器自身执行的某种动作（click,load,mouseover...）<br>
响应某个事件的函数就叫做 事件处理程序

## HTML 事件处理程序
```html
<input type="butcon" value ="ClickMe' onclick='alert(event.type )" >
```
事件通过元素特性值绑定，HTML与JavaScript代码紧密耦合

## DOM0级 事件处理程序
将一个函数赋值给一个元素的指定事件处理程序属性
```javascript
var btn = document.getElementById('btn')
btn.onclick = function(){
    console.log('clicked')
}
btn.onclick = null // 删除事件处理程序
```

## DOM2级 事件处理程序
+ DOM2级事件 定义了两个方法：addEventListener()、removeEventListener()，均接受3个参数：要处理的事件名、事件处理函数，布尔值<br>
+ 布尔值是true 表示要在捕获阶段调用事件处理程序，false 表示在冒泡阶段调用事件处理程序<br>
可以添加多个处理程序<br>
+ 通过addEventListener添加的处理程序只能通过removeEventListener移除，且removeEventListener的参数要与
addEventListener的参数完全相同
+ 大多数情况下，都是将事件处理程序添加到事件流的冒泡阶段，是为了最大限度兼容各种浏览器
```javascript
var btn = document.getElementById('btn')
btn.addEventListener('click',function(){
    console.log('clicked111')
},false)
btn.addEventListener('click',function(){
    console.log('clicked222')
},false)
```

## IE的事件处理程序
attachEvent(),detachEvent() 类似DOM2级的两个方法，没有第三个参数，第一个参数事件名要加'on',this指向的是window
```javascript
var btn = document.getElementById('btn')
btn.attachEvent('onclick',function(){
    console.log('clicked111')
})
```