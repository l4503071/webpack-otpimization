# webpack之 treeShaking && sideEffects

## 使用方法

- `git clone`
- `npm run install`
- `EXAMPLE=num npm run start` 打包对应实例文件,生成bundle包;
  > num = 1,2,3,4,5. 分别对应
- `npm run exec`  执行生成后的bundle包.

## 背景

为什么要研究 **webpack** 的 **treeShaking** 和 **sideEffects** 属性?

- 规范模块导出方法;
- 删除 **死区** 代码;
- 删除 **无副作用** 模块.

> 总之: 最后就是为了减少打包之后的文件大小.

## 版本信息

- **webpkack**: 4.32.2
  > 打包工具.
- **babel**: 7.4.5
  > 转义工具,需要配置保留**ES6**模块化(import && export)语法.
- **terser-webpack-plugin**: 1.3.0
  > 删除无用代码

## 结论

- 项目中一定开启 treeShaking 和 sideEffects,可以大幅度减少bundle包大小;
- 使用正确的导入导出方法,保证 treeShaking 有效;
- 工具类不要写带有副作用的代码,否则没有办法消除;
- 用好 sideEffects 会有意想不到的效果.


## 代码验证

- 实例1
  > 基础用法
- 实例2
  > 多层用法
- 实例3
  > 副作用代码
- 实例4
  > ES6的导入导出方式
- 实例5
  >
