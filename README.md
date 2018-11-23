# SRM-ui SRM组内组件封装

使用Typescript/React Hooks，基于material-ui，对基础组件以及业务组件进行进一步封装

## Userful Scripts

### 增加组件自动化命令
会根据组件类型和组件名称创建文档以及源代码目录/文件，并更新README文档
```bash
npm run add ['basic'|'sprite'] [componentName]
```
'basic'代表基础组件
'sprite'代表业务组件
例：增加Button基础组件
```bash
npm run add basic Button
```
## 基础组件

1. 分页器 Pager [Pager.md](./docs/Table)
2. 表格 Table [Table.md](./docs/Table.md)


## 业务组件

