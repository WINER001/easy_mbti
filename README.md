# MBTI 性格测试 React 应用

这是一个基于 React 的 MBTI 性格测试应用，从原始的 Python NiceGUI 版本转换而来。

## 功能特性

- 🧠 72道精心设计的 MBTI 测试题目
- 🎨 现代化的渐变背景和美观的 UI 设计
- 📊 实时进度显示
- 🔀 题目随机排序
- 📱 响应式设计，支持移动端
- 🎯 16种人格类型详细描述
- ⚡ 快速结果计算

## 技术栈

- React 18
- React Router DOM
- Tailwind CSS
- Font Awesome 图标

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # React 组件
│   ├── Welcome.js      # 欢迎页面
│   ├── Test.js         # 测试页面
│   ├── Result.js       # 结果页面
│   └── Personalities.js # 人格类型页面
├── data/               # 数据文件
│   ├── questions.js    # 测试题目
│   └── personalityTypes.js # 人格类型描述
├── utils/              # 工具函数
│   └── mbtiLogic.js    # MBTI 计算逻辑
├── App.js              # 主应用组件
├── App.css             # 样式文件
├── index.js            # 入口文件
└── index.css           # 全局样式
```

## 页面路由

- `/` - 欢迎页面
- `/test` - 测试页面
- `/result/:type` - 结果页面
- `/personalities` - 人格类型浏览页面

## 开发说明

这个应用完全基于原始的 Python NiceGUI 版本的功能和设计，使用 React 重新实现。所有测试题目和人格类型描述都保持原样，确保测试结果的准确性。
