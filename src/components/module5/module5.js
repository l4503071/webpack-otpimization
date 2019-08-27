
function f1(a,b) {
  const c = a + b;
  console.log('f1 done: ' + c)
  return "f1 return";
}
function f2(a,b) {
  const c = a + b;
  console.log('f2 done: ' + c)
  return "f2 return";
}

/**
 * 外部资源
 */
// import "./style.css";

/**
 * 副作用代码
 */
// f2();

export {
  f1,
  f2,
}