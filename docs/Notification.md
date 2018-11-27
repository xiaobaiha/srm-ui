# Notification

## 使用示例
### 基本用法
```javascript
Notification.notification({
    type: 'success',
    message: '删除成功'
});
```
![](/docs/imgs/example-notification0.png)
## props
|属性       |说明|示例|
|-|-|-|
|type|必需值，success\|warning\|info\|error|'success'|
|message|必需值，通知的消息|'删除成功'|
|duration|弹窗持续时间，默认3000(毫秒)|2000|
|vertical|垂直轴上对齐，top\|bottom，默认top|'top'|
|horizontal|水平轴上居中，left\|center\|right，默认right|'right'|
