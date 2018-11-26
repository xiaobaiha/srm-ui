# Pager
分页器组件

## 使用示例
### 基本用法
```javascript
<Pager 
    current={2} 
    sum={10}
    onJump={page => console.log("Jump to page:", page)}
    />
```
![](./imgs/example-pager0.png)
## props
|属性|说明|示例|
|-|-|-|
|current|当前在第几页,默认1|2|
|sum|总共多少页|10|
|onJump|点击某一页的回调|function(page) {console.log("jump to page:" page)}|
|showNumber|显示几个页数,默认5|5|
|buttonStyle|按钮样式|{minWidth: "40px"}|
|style|分页器样式重载|{justifyContent: 'flex-end',margin: '0.5rem'}|