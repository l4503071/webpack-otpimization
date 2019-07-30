/**
 * 测试1:
 *    不遵循 ES6 导出规则的文模块
 */

// import {
//   isWeb,
// } from "universal-env";
// console.log(isWeb);

/**
 * 测试2:
 *    资源模块,如 css, image等.
 */

//  import './style.css';

/**
 * 测试3:
 *    遵循ES6 导出规则,但是有副作用的代码
 */

// /*#__PURE123__*/ f2();


function f2() {
  console.log('f2');
  return 110;
}

function f1(a,b) {
  console.log('f1');
  const c = a + b;
  return c;
}

export {
  f1,
  f2,
}