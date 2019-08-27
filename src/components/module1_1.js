/**
 * commonjs 导出
 */
function f1() {
  console.log('f1 done')
  return "f1 return";
}
function f2() {
  console.log('f2 done')
  return "f2 return";
}

module.exports = {
  f1,
  f2,
}