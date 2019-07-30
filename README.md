# webpack之 treeShaking && sideEffects

## 背景

为什么要研究 **webpack** 的 **treeShaking** 和 **sideEffects** 属性?

- 规范模块导出方法;
- 删除 **死区** 代码;
- 删除 **无副作用** 模块;

> 总之: 最后就是为了减少打包之后的文件大小.

## 版本信息

- **webpkack**: 4.32.2
  > 打包工具.
- **babel**: 7.4.5
  > 转义工具,需要配置保留**ES6**模块化(import && export)语法.
- **terser-webpack-plugin**: 1.3.0
  > 删除无用代码


## 代码验证