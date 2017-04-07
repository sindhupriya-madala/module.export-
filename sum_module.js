// var arg1 = 5, arg2 = 10;
// function printResult( result) {
//   console.log(result);
// }

// var sumResult = function sum() {
//   printResult( arg1 + arg2 );
//   return arg1 + arg2;
// }
// console.log(sumResult());
// module.exports = sumResult();

var arg1 = 5, arg2 = 10;
function printResult( result) {
  console.log(result);
}

var sumResult = function sum(x, y) {
  printResult( x + y );
  return x + y;
}
console.log(sumResult(arg1, arg2));
module.exports = sumResult(arg1, arg2);
