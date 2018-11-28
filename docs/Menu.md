# Menu

## 使用示例
### 基本用法
```javascript
<Menu menus={[
        {id:'1', title:'menu1111', icon: Cloud, fold: true,children: [{id:'3', icon: Cloud,title:'menu3'}]},
        {id:'2', title:'menu2', icon: Cloud},
    ]}
    />
```
![](/docs/imgs/example-menu0.png)
## props
|属性       |说明|示例|
|-|-|-|
|theme|主题，light\|dark，默认light|'light'|
|menus|菜单的详细配置|[{title: 'menu1',icon: <Icon />,id: '1',onClick: id =>console.log(id)},{title: 'menu2',id: '2',fold: false,children: [{title: 'submenu1',id: '3',icon: <Icon />,onClick: id =>console.log(id)}]}]|
|menus[]|菜单的一项|{title: 'menu1',icon: <Icon />,id: '1',onClick: id =>console.log(id)}|
|menus[].id|菜单项的唯一标识|'1'|
|menus[].title|菜单显示文字|'menu1'|
|menus[].icon|菜单显示图标,material-ui icon类型|Cloud|
|menus[].onClick|点击菜单项的回调|id=>console.log(id)|
|menus[].children|子菜单，类型与menus相同|同menus|