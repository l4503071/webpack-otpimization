/**
 * 此处使用 if else 语法是为了保证只打包对应的实例文件,使用 switch 不行(没有搞清楚原因).
 */
if(process.env.EXAMPLE === 1) {
  require('./example/ex1');
} else if(process.env.EXAMPLE === 2) {
  require('./example/ex2');
} else if(process.env.EXAMPLE === 3) {
  require('./example/ex3');
} else if(process.env.EXAMPLE === 4) {
  require('./example/ex4');
} else if(process.env.EXAMPLE === 5) {
  require('./example/ex5');
} else if(process.env.EXAMPLE === 6) {
  require('./example/ex6');
}  else {
  console.log('EXAMPLE:' + process.env.EXAMPLE);
  throw Error('请传递正确的EXAMPLE变量.');
}
