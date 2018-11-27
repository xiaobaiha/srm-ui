# TaskList
任务列表
## 使用示例
### 基本用法
```javascript
<TaskList tasks={[{id:'1',content:'task1',subContent:'2018-1-1'},{id:'2',content:'task2'}]} />
```
![](/docs/imgs/example-tasklist0.png)
## props
|属性       |说明|示例|
|-|-|-|
|tasks|任务列表|[{id:'1',content:'task1',subContent:'2018-1-1'},{id:'2',content:'task2'}]|
|tasks[]|任务列表中的一项|{id:'1',content:'task1',subContent:'2018-1-1'}|
|tasks[].id|任务的唯一标示|'1'|
|tasks[].content|列表显示内容|'task1'|
|tasks[].subContent|列表显示副内容|'2018-01-01'|
|tasks[].onClick|点击任务后的回调|task=>console.log("click task:", task)|