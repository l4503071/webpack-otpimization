# webpack之 treeShaking && sideEffects

## 引言

先看一段代码

**./index.js**
```js
import { Component_1, Component_2 } from './component/index.js';

export default class {
  render() {
    <Component_1 />
  }
}
```

**./component/index.js**
```js
import Component_1 from './component_1';
import Component_2 from './component_2';
import Component_3 from './component_3';

export {
  Component_1,
  Component_2,
  Component_3,
}
```

问题:
  1. 只使用了 **Component_1**, 引入的 **Component_2** 有没有被引入进来?
  2. 没有引用的 **Component_3** 有没有被引用进来?
  3. 如果被引用进来了, 怎么解决?

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

### 实例1
> treeShaking: 使用方法

**./index.js**
```js
import { f1 } from "../components/module1";
// const { f1 } = require("../components/module1"); // 2: 使用require引入方式
console.log('ex1', f1()); // 1: 注释此行代码,查看效果
```
**../components/module1**
```js
function f1() {
  console.log('f1 done')
  return "f1 return";
}
function f2() {
  console.log('f2 done')
  return "f2 return";
}
export {
  f1,
  f2,
}
```
<ol style="color:blue"> 
  <li>结论: f2 函数会被删除</li>
  <li>结论: 注释1 f1, f2函数都会被删除</li>
  <li>导入导出方式:
    <ol>
      <li>结论: 使用2 f1, f2函数都会保留(ES6导出, commonJS导入)</li>
      <li>结论: f1, f2函数都会保留(commonJS导出, commonJS导入)</li>
      <li>结论: f1, f2函数都会保留(commonJS导出, ES6导入)</li>
    </ol>
  </li>
</ol>

### 实例2
  > treeShaking: 多层用法

**./index.js**
```js
import { f1 } from "../components/module2";
console.log("ex2", f1());
```
**../components/module2**
```js
import { f3, f4 } from "./module2_1";
function f1() {
  console.log("f1 done");
  return "f1 return";
}
function f2() {
  f3();
  console.log("f2 done");
  return "f2 return";
}
export { f1, f2 };
```
**./module2_1**
```js
function f3() {
  console.log("f3 done");
  return 'f3 done';
}
function f4() {
  console.log("f4 done");
  return 'f4 done';
}
export {
  f3,
  f4,
}
```
<span style="color:blue">结论: f2,f3,f4 函数会被删除</span>

### 实例3
  > treeShaking: 副作用代码

**./index.js**
```js
import { f1, f2 } from "../components/module3";
console.log("ex3", f1());
```
**../components/module3**
```js
import {
  isWeb,
} from "universal-env"; // 1: 第三方工具(commonjs导出)
//  import './style.css'; // 2: 资源文件
// console.log('isWeb:', isWeb); // 注释此行代码,查看效果
function f1() {
  console.log('f1 done')
  return "f1 return";
}
function f2() {
  console.log('f2 done')
  return "f2 return";
}
/*#__PURE__*/f2();  // 3: 有副作用的代码
export { f1, f2 };
```
<ol style="color:blue"> 
  <li>结论: 1 commonjs导出的没有办法删除</li>
  <li>结论: 2 资源文件没办法删除</li>
  <li>结论: 3 有副作用的代码没办法删除</li>
</ol>

### 实例4
  > treeShaking: ES6的导入导出方式

#### 导出方式1(**推荐**)
**../components/module4**
```js
function f1(a,b) {
  const c = a + b;
  console.log('f1 done: ' + c)
  return "f1 return";
}
function f2() {
  const c = a + b;
  console.log('f2 done: ' + c)
  return "f2 return";
}
export {
  f1,
  f2,
}
```
**./index.js**

导入方式1
```js
import {
  f1,
  f2,
} from '../components/module4';
console.log('ex4', f1(1,2));
```
<span style="color:blue">结论: ok</span>

导入方式2
```js
import * as A from '../components/module4';
console.log('ex4', A.f1(3,4))
```
<span style="color:blue">结论: ok</span>
<hr />

#### 导出方式2
**../components/module4**
```js
function f1(a,b) {
  console.log('f1');
  const c = a + b;
  return c;
}
function f2(a,b) {
  console.log('f2');
  const c = a + b;
  return c;
}

export default {
  f1,
  f2,
}
```
**./index.js**

导入方式1
```js
import A from '../components/module4';
console.log('ex4', A.f1(1,2));
```
<span style="color:blue">结论: bad</span>

导入方式2
```js
import { default as A } from '../components/module4';
console.log('ex4', A.f1(3,4));
```
<span style="color:blue">结论: bad</span>
<hr />

#### 导出方式3
**../components/module4**
```js
// function f2(a,b) {
//   const c = a + b;
//   console.log('f22 done: ' + c)
//   return "f22 return";
// }
// console.log(f2);
export default {
  f1: function f1(a,b) {
    const c = a + b;
    console.log('f1 done: ' + c)
    return "f1 return";
  },
  // f2,
  f2: function f2(a,b) {
    const c = a + b;
    console.log('f2 done: ' + c)
    return "f2 return";
  }
}
```
**./index.js**

导入方式1
```js
import A from '../components/module4';
console.log('ex4', A.f2(1,2));
```
<span style="color:blue">结论: ok,原因有待商榷</span>
<hr />

#### 其他导出方式
**../components/module4**
```js
// 第 1 种
const  utils = {
  f1: function f1(a,b) {
    const c = a + b;
    console.log('f1 done: ' + c)
    return "f1 return";
  },
  f2: function f2(a,b) {
    const c = a + b;
    console.log('f2 done: ' + c)
    return "f2 return";
  }
}
export default utils;
// 第 2 种
export default class P {
  static f1(a,b) {
    const c = a + b;
    console.log('f1 done: ' + c)
    return "f1 return";
  }
  static f2(a,b) {
    const c = a + b;
    console.log('f2 done: ' + c)
    return "f2 return";
  }
}
// 第 3 种
class P {
  f1(a,b) {
    const c = a + b;
    console.log('f1 done: ' + c)
    return "f1 return";
  }
  f2(a,b) {
    const c = a + b;
    console.log('f2 done: ' + c)
    return "f2 return";
  }
}
export default new P();
```
**./index.js**

导入方式1
```js
import A from '../components/module4';
console.log('ex4', A.f2(1,2));
```
<span style="color:blue">结论: all bad</span>

### 实例5
  > sideEffects: 使用方法

**./index.js**
```js
import {
  f1,
  f2,
} from '../components/module5'
console.log('ex5', f1(1,91));
```
**../components/module5**
```js
import {
  isWeb,
} from "universal-env";
/**
 * 外部资源
 */
import "./style.css";
// require("./style.css");

function f1(a,b) {
  const c = a + b;
  console.log('f1 done: ' + c)
  return "f1 return";
}
function f2(a,b) {
  const c = a + b;
  console.log('f2 done: ' + c)
  return "f2 return";
}
/**
 * 副作用代码
 */
f2();
export {
  f1,
  f2,
}
```
<span style="color:blue">结论: 开启 sideEffects 会在不引用模块的时候删除整个模块,引用的时候删除未使用的import模块</span>

## 使用方法

[https://github.com/l4503071/webpack-otpimization/tree/f_share_one](https://github.com/l4503071/webpack-otpimization/tree/f_share_one)

- `git clone`
- `npm run install`
- `EXAMPLE=${num} npm run start` 打包对应实例文件,生成bundle包;
  > ${num} = 1,2,3,4,5. 分别对应实例n
- `npm run exec`  执行生成后的bundle包.


## 补充
  1. require 的模糊匹配
