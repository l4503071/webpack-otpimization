/**
 * **导出方式1**(**推荐**)
 */

// function f1(a,b) {
//   const c = a + b;
//   console.log('f1 done: ' + c)
//   return "f1 return";
// }
// function f2() {
//   const c = a + b;
//   console.log('f2 done: ' + c)
//   return "f2 return";
// }
// export {
//   f1,
//   f2,
// }

/**
 * **导出方式2**
 */

// function f1(a,b) {
//   console.log('f1');
//   const c = a + b;
//   return c;
// }
// function f2(a,b) {
//   console.log('f2');
//   const c = a + b;
//   return c;
// }

// export default {
//   f1,
//   f2,
// }

/**
 * **导出方式3**
 */

// function f2(a,b) {
//   const c = a + b;
//   console.log('f22 done: ' + c)
//   return "f22 return";
// }

// console.log(f2);

// export default {
//   f1: function f1(a,b) {
//     const c = a + b;
//     console.log('f1 done: ' + c)
//     return "f1 return";
//   },
//   // f2,
//   f2: function f2(a,b) {
//     const c = a + b;
//     console.log('f2 done: ' + c)
//     return "f2 return";
//   }
// }


/**
 * **导出方式4**
 */

// const  utils = {
//   f1: function f1(a,b) {
//     const c = a + b;
//     console.log('f1 done: ' + c)
//     return "f1 return";
//   },
//   f2: function f2(a,b) {
//     const c = a + b;
//     console.log('f2 done: ' + c)
//     return "f2 return";
//   }
// }
// export default utils;

/**
 * **导出方式5**
 */

// export default class P {
//   static f1(a,b) {
//     const c = a + b;
//     console.log('f1 done: ' + c)
//     return "f1 return";
//   }
//   static f2(a,b) {
//     const c = a + b;
//     console.log('f2 done: ' + c)
//     return "f2 return";
//   }
// }

/**
 * **导出方式6**
 */

// class P {
//   f1(a,b) {
//     const c = a + b;
//     console.log('f1 done: ' + c)
//     return "f1 return";
//   }
//   f2(a,b) {
//     const c = a + b;
//     console.log('f2 done: ' + c)
//     return "f2 return";
//   }
// }
// export default new P();

/**
 * **复合写法**
 * **注意:拿不到变量**
 */

// export {
//   f3,
//   f4,
// } from './module4_1';
// f4();
