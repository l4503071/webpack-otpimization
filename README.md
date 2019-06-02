# webpack-optimization

> 优化方案结论,仅供参考

## 优化工具

- http://webpack.github.io/analyse
  > 第三方分析工具(推荐参考使用)
- https://github.com/webpack-contrib/webpack-bundle-analyzer
  > 官方推荐工具(查看module引用关系)
- coverage
  > 高版本Chrome自带工具,分析执行代码占有率

## 环境

- webpack 4.32.2
- minimizer: https://github.com/terser-js/terser

## 优化方法

### 1. 文件引入方式

#### 可行方案

方案1
```js
export function testA(){

}
export function testB(){
  
}
```
方案2
```js
function testA(){

}
function testB(){
  
}
export {
  testA,
  testB,
}
```

#### <div style='color:red;'>不可以行方案</div>
```js
export default class CA {
  static testA() {

  }
  static testB() {

  }
}
```

### 2. 图片资源

- 常用图片资源转化内置资源;
- 很小的图片(8k以下)转化为 base64;
- 不要在一个文件内引入所有图片,在统一导出,否则会导致所有图片都会引入

> **image-source-loader** 是不是可以针对 ES6 进行优化,支持 Tree Shaking

### 3. 公共模块提取

- 工具类和框架类的module可以打包到一个 js 文件

> 需要客户端和打包平台支持


### 4. 分平台打包

- 各端打包自己的js文件
- 区分 pro 和 dev 模式的 webpack.config.js

### 5. 懒加载

- **Rax 1.0** 版本支持 **rax-use-import** 懒加载方式
