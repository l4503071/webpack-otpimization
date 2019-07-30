import {
  f3,
  f4,
} from './module2_1';

function f1(a,b) {
  console.log('f1');
  const c = a + b;
  return c;
}
function f2(c,d) {
  console.log('f2');
  f3();
  const e = c - d;
  return e;
}

export {
  f1,
  f2,
}