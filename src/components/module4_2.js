function f5(a,b) {
  const c = a + b;
  console.log('f5 done: ' + c)
  return "f5 return";
}
function f6(a,b) {
  const c = a + b;
  console.log('f6 done: ' + c)
  return "f6 return";
}

module.exports = {
  f5,
  f6,
}