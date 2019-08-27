import { f3, f4 } from "./module6_1";

// import { f5, f6 } from "./module6_2";

export { f5, f6 } from './module6_2';

function f1() {
  console.log("f1 done");
  return "f1 return";
}
function f2() {
  console.log("f2 done");
  return "f2 return";
}

// export { f1, f2, f3, f4, f5, f6 };
export { f1, f2, f3, f4 };
