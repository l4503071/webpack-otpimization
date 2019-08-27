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
  console.log('isWeb:', isWeb);
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