'use strict'


var a = 25;
var b = 34;

var x = addTwoNums(a, b);

setTimeOut(addTwoNums(a, b), 10000)

function addTwoNums(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(x);


// myfunc();
//
// var myfunc = function() {
//   console.log('I\'m a function')
// }
//
// myfunc();
