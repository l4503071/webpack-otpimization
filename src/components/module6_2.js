import {
  isWeb,
} from "universal-env";

function f5() {
  console.log("f5 done");
  return "f5 return";
}
function f6() {
  console.log("f6 done");
  return "f6 return";
}

export { f5, f6 };
