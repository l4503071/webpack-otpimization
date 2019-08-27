/**
 * 测试1:
 *    不遵循 ES6 导出规则的文模块
 */

// import {
//   isWeb,
// } from "universal-env";
// console.log('isWeb:', isWeb); // 注释此行代码,查看效果

/**
 * 测试2:
 *    资源模块,如 css, image等.
 */

//  import './style.css';

function f1() {
  console.log('f1 done')
  return "f1 return";
}

function f2() {
  console.log('f2 done')
  return "f2 return";
}

/**
 * 测试3:
 *    遵循ES6 导出规则,但是有副作用的代码
 */

// /*#__PURE1__*/f2();

/**
 * `结论: treeShaking 对于有副作用的代码是无能为力的`
 */

export { f1, f2 };
