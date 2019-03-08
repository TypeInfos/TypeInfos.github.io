---
title: 'VSCode的一些配置'
description: '主题、icon、Setting.json的配置'
sidebarDepth: 2
sidebar: auto
categories: frontEnd
tags:
- 前端
- async/await
---

## 配置主题
文件 -> 首选项 -> 颜色主题 -> 选择更改

快捷键： ctrl + k、ctrl + t

icon theme:`Material Icon Theme`
color theme:`one dark pro`


## setting.json
```js
{
    "editor.fontSize": 14,
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "One Dark Pro",
    // 控制资源管理器是否在把文件删除到废纸篓时进行确认。
    "explorer.confirmDelete": true,
    // 启用后，将在文件打开时尝试猜测字符集编码。可以按语言对此项进行配置。
    "files.autoGuessEncoding": true,
    // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
    "explorer.confirmDragAndDrop": false,
    // 窗口失去焦点时会自动保存当前代码
    "files.autoSave": "onFocusChange",
    // 制表符的空格数
    "editor.tabSize": 2,
    // 按下保存会自动修复eslint的配置
    "eslint.autoFixOnSave": true,
    // 启用或禁用字体连字。
    "editor.fontLigatures": true,
    // 是否在每行后面添加分号
    "prettier.semi": false,
    // 如果为真，将使用单引号而不是双引号
    "prettier.singleQuote": true,
    // 用“beautiful -eslint”代替“beautiful tier”
    "prettier.eslintIntegration": true,
    // 限制缩略图的宽度，控制其最多显示的列数。
    "editor.minimap.maxColumn": 100,
    // 是否显示右侧的缩略图
    "editor.minimap.enabled": true,
    // 控制在差异编辑器中是否把前导空格或尾随空格的改动显示为差异。
    "diffEditor.ignoreTrimWhitespace": false,
    // 启用时，提交将自动从当前Git存储库的默认远程获取。
    "git.autofetch": false,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
        "language": "html",
        "autoFix": true
        },
        {
        "language": "vue",
        "autoFix": true
        }
    ],
    // 控制终端的渲染方式。
    "terminal.integrated.rendererType": "dom"
}
```

