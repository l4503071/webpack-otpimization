import {
  f3,
  f4,
} from './module2_1';

function f1() {
  console.log('f1 done')
  return "f1 return";
}
function f2() {
  f3();
  console.log('f2 done')
  return "f2 return";
}

export {
  f1,
  f2,
}