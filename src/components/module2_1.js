function f3(a,b) {
  console.log('f3');
  const c = a + b;
  return c;
}
function f4(c,d) {
  console.log('f4');
  const e = c - d;
  return e;
}

export {
  f3,
  f4,
}