/**
 * commonjs 导出
 */
function f3() {
  console.log('f3 done')
  return "f3 return";
}
function f4() {
  console.log('f4 done')
  return "f4 return";
}

module.exports = {
  f3,
  f4,
}