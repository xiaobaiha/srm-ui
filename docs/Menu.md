# Menu

## 使用示例
### 基本用法
```javascript
<Menu menus={[
    {
        title: 'menu1',
        icon: <Icon />,
        id: '1',
        onClick: id =>console.log(id)
    },{
        title: 'menu2',
        id: '2',
        fold: false,
        children: [
            {
                title: 'submenu1',
                id: '3',
                icon: <Icon />,
                onClick: id =>console.log(id)
            }, {
                title: 'submenu2',
                id: '4',
                icon: <Icon />,
                onClick: id =>console.log(id)
            }
        ]
    }]}/>
```
![](/docs/imgs/example-menu0.png)
## props
|属性       |说明|示例|
|-|-|-|