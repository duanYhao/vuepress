---
    title: 事件流
---
>事件流  描述的是  从页面中接收事件的顺序

IE的事件流是 事件冒泡流，而Netscape开发团队的事件流是 事件捕获流

```html
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <div>click</div>
        </body>
    </html>
```

## 事件冒泡
当点击div时，click事件传播顺序： div->body->html->document <br>
向上传播
## 事件捕获
当点击div时，click事件传播顺序： document->html->body->div <br>
向下传播
## DOM事件流
"DOM2级事件" 规定的事件流包括三个阶段（按顺序为）：<br>
事件捕获阶段、处于目标阶段、事件冒泡阶段<br>
![An image](/imgs/event.png)

## 事件委托
事件委托利用了**事件冒泡**，只指定一个事件处理程序，就可以管理某一类型的所有事件