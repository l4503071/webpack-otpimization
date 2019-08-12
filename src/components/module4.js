/**
 * **导出方式1**(**推荐**)
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
//   console.log('f2');
//   const c = a + b;
//   return c;
// }

// export default {
//   f1: function f1(a,b) {
//     console.log('f1');
//     const c = a + b;
//     return c;
//   },
//   // f2,
//   f2: function f2(a,b) {
//     console.log('f2');
//     const c = a + b;
//     return c;
//   }
// }


/**
 * **导出方式4**
 */

// const  utils = {
//   f1: function f1(a,b) {
//     console.log('f1');
//     const c = a + b;
//     return c;
//   },
//   f2: function f2(c,d) {
//     console.log('f2');
//     const e = c - d;
//     return e;
//   }
// }
// export default utils;

/**
 * **导出方式5**
 */

// export default class P {
//   static f1() {
//     console.log('f1')
//     return 'f1';
//   }
//   static f2() {
//     console.log('f2')
//     return 'f2';
//   }
// }

/**
 * **导出方式6**
 */

// class P {
//   f1() {
//     console.log('f1');
//   }
//   f2() {
//     console.log('f2');
//   }
// }

// export default new P();

/**
 * **复合写法**
 */

export {
  f3,
  f4,
} from './module4_1';

// export {
//   f5,
//   f6,
// } from './module4_2';


// !function f1() {
//   console.log('f1');
// }()