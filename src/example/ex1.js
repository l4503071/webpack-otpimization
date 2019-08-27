// import { f1 } from "../components/module1";
// console.log('ex1', f1()); // 注释此行代码,查看效果

/**
 * `结论: treeShaking 是有效果的`
 */

/**
 * 生命在于尝试,试一试下面的引入方法
 */

// const { f1 } = require("../components/module1");
// console.log("ex1", f1());  // 注释此行代码,查看效果

/**
 * `结论: treeShaking 是有效果的, 但 require 导入方式不行, 需要使用 ES6`
 */


/**
 * 怀疑是导入 or 导出方式的差别 
 */

// 方式1: commonjs 导出, commonjs 导入
// const { f1 } = require("../components/module1_1");
// console.log("ex1", f1());

// 方式2: commonjs 导出, ES6 导入
// import { f1 } from "../components/module1_1";
// console.log("ex1", f1());

/**
 * `结论: 导入 和 导出方式都需要使用 ES6 语法`
 */


 /**
 * 其他使用方式验证
 */

import { f1 } from "../components/module1";
// console.log('ex1', typeof f1);
// console.log('ex1', f1);
// console.log('ex1', f1 === 1);

/**
 * `结论: 不管调用与否都会打包进来`
 */