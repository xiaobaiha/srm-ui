# Empty

## 使用示例
### 基本用法
```javascript
<Empty />
```
![](/docs/imgs/example-empty0.png)
## props
|属性       |说明|示例|
|-|-|-|
|title|图标下的标题|'数据为空'|
|message|图标下的显示内容，默认为'无数据'|'表格没有数据'|
|action|回调动作|{message: '触发action', func: ()=>console.log('action func run.')}|
|action.message|回调动作的显示信息|触发action'|
|action.func|动作的回调函数|()=>console.log('action func run.')|