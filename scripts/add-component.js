const path = require('path');
const fs = require('fs');
const translate = require('./translate');
const docRoot = path.join(__dirname, '../docs/');
const srcRoot = path.join(__dirname, '../src/components');

const type = process.argv[2];
const componentName = process.argv[3];
const docTemplate = (componentName, chineseName='') => `# ${componentName}
${chineseName?chineseName+'组件':''}
## 使用示例
### 基本用法
\`\`\`javascript
\`\`\`
![](/docs/imgs/example-${componentName.toLowerCase()}0.png)
## props
|属性       |说明|示例|
|-|-|-|`;
const srcTemplate = componentName => ``;

translate(componentName).then(chineseName => {
    // Create Doc
    const docPath = path.join(docRoot, componentName+'.md');
    fs.writeFileSync(docPath, docTemplate(componentName));

    // Create Src
    const srcFolder = path.join(srcRoot, componentName);
    fs.mkdirSync(srcFolder);
    const srcPath = path.join(srcFolder, componentName+'.ts');
    fs.writeFileSync(srcPath, srcTemplate(componentName));

    // Update README
    const readmePath = path.join(__dirname, '../README.md');
    let readmeContent = fs.readFileSync(readmePath).toString();
    const reg = type === 'basic'?
        /(\#\#\s基础组件\s*)((\d.*\n)*)(\s*\#\#\s业务组件)/:
        type === 'sprite'?
        /(\#\#\s业务组件\s*)((\d.*\n)*)(\s*)/:
        '';
    readmeContent = reg === ''? readmeContent: 
        readmeContent.replace(reg, (...argvs) => {
            const header = argvs[1];
            const footer = argvs[argvs.length - 3];
            const matchWholeContent = argvs[2].split('\n').filter(e => e!=='');
            matchWholeContent.push(`${matchWholeContent.length+1}. ${chineseName} ${componentName} [${componentName}.md](./docs/${componentName}.md)`)
            return header+matchWholeContent.join('\n')+'\n'+footer;
        });
    fs.writeFileSync(readmePath, readmeContent);
})

