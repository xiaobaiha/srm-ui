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
## props
|属性|说明|示例|
|-|-|-|
|current|当前在第几页,默认1||
|sum|总共多少页||
|onJump|点击某一页的回调||
|showNumber|显示几个页数,默认5||