/**
 * **--------分割线-------**
 * **导出方式1**(**推荐**)
 * `treeShaking生效`
 */

/**
 * 导入方式1
 */

// import {
//   f1,
//   f2,
// } from '../components/module4';
// console.log('ex4', f1(1,2));

/**
 * 导入方式2
 * `treeShaking生效`
 */

// import * as A from '../components/module4';
// console.log('ex4', A.f1(3,4))

// function unused() {
//   A.f2();
// }

/**
 * **--------分割线-------**
 * **导出方式2**
 */

/**
 * 导入方式1
 * `treeShaking不生效`
 */

// import A from '../components/module4';
// console.log('ex4', A.f1(1,2));

/**
 * 导入方式2
 * `treeShaking不生效`
 */

// import { default as A } from '../components/module4';
// console.log('ex4', A.f1(3,4));

/**
 * **--------分割线-------**
 * **导出方式3**
 */

/**
 * 导入方式1
 * `treeShaking不生效`
 * **注意对比 导出方式2 的 导入方式1**
 */

// import A from '../components/module4';
// console.log('ex4', A.f2(2,2));

/**
 * **--------分割线-------**
 * **导出方式4**
 * `treeShaking不生效`
 */

/**
 * 导入方式1
 */

// import A from '../components/module4';
// console.log('ex4', A.f1(0,1));

/**
 * **--------分割线-------**
 * **导出方式5**
 * `treeShaking不生效`
 */

/**
 * 导入方式1
 */

// import A from '../components/module4';
// console.log('ex4', A.f1(1,9));

/**
 * **--------分割线-------**
 * **导出方式6**
 * `treeShaking不生效`
 */

/**
 * 导入方式1
 */

// import A from '../components/module4';
// console.log('ex4', A.f1(2,9));



/**
 * **--------分割线-------**
 * **复合写法**
 */

// import {
//   f3,
// } from '../components/module4';
// console.log('ex4', f3(0,9));