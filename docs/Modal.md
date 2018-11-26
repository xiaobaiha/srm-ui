# Modal
弹窗组件，包含四种方法(confirm, error, confirm, success);
## 使用示例
### 基本用法
```javascript
Modal.success({
    title: '成功',
    message: '这是一条成功信息'
});
```
![](/docs/imgs/example-modal0.png)
## 单个方法props
|属性       |说明|示例|
|-|-|-|
|title|modal的标题，有默认值|'成功'|
|message|modal内容|'成功消息'|
|onOk|点击确定后的回调函数|e => console.log('success')|
|onCancel|点击取消后的回调函数|e => console.log('cancel')|