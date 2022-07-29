## panda-design
模仿antd理念开发一款灵活高可用的组件库

## 组件开发生命周期
需求分析 -> 编码 -> 测试用例 -> 打包和输出 -> CI/CD持续集成，自动部署，文档生成
化繁为简，从简单入手，在需求中渐渐复杂

## 取名
lionet-design

## 项目初始化
```
yarn create react-app lionet-design --template typescript
```

## 文件组织结构
- 按照功能逻辑分组
- 按照文件类型分组

不要超过五分钟去思考文件组织结构，后期随时调整

目前暂定文件结构
```css
src
  components
    Button
      button.tsx
      button.test.tsx
      _style.scss
  styles
    _mixin.scss
    index.scss
  index.tsx
```

## 样式解决方案
- inline-css：直接使用 css 类名性能比style好
- css-in-js：60多种解决方案，最有名的是`styled-component`，将CSS和JS糅合在一起比较奇怪
- Sass/Less作为css预处理器，提供了函数、变量、继承等

> rem，采用根元素font-size的n倍
> _style.scss 代表编译的时候不对其做编译(编译出来结果为空)，只能被导入，导入的时候省略_和.scss后缀

### 样式文件夹结构
```css
styles
  _variables.scss (各种变量和可配置设置)
  _mixin.scss (全局mixin预设)
  _functions.scss (全局样式计算函数，返回css样式)
```

### 色彩体系
- 系统色板
  - 基础色板
  - 中性色板：黑白灰
- 产品色板
  - 品牌色 PrimaryColor + SecondaryColor
  - 功能色板 success+error+warn

### 字体系统

### normalize.css
- 区别于reset，能够把页面样式保留的前提下进行重置


## 测试
- 高质量的代码
- 更早地发现bug，节省成本
- 让重构和升级变得更加容易和可靠
- 让开发流程更加敏捷

### 测试的数量划分
- 很多的单元测试
- 一般的逻辑测试
- 很少的UI测试

### 为什么React组件特别适合单元测试
- Component组件化
- Function纯函数
- 单项数据流

### jest测试框架特点
- 通用
- 零配置
- 快速且安全
- 可生成报告

```js
test('test common matcher', () => {
  expect(2+2).toBe(4)
  expect(2+2).not.toBe(5)
})
```

执行命令`npx jest jest.test.js`，可以加`--watch`监听

### Testing Library react组件测试工具
- 在`react-script`之上的版本中已经内置
- `.test.`的文件和`__test__`文件夹都会被检测到

- getByText拿到的是一个Element属性对象，可以取tagName之类的属性

