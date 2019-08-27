function f3(a,b) {
  const c = a + b;
  console.log('f3 done: ' + c)
  return "f3 return";
}
function f4(a,b) {
  const c = a + b;
  console.log('f4 done: ' + c)
  return "f4 return";
}

export {
  f3,
  f4,
}