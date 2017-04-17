'use strict'

console.log('hello world from inside nodejs')
let x = 25

function addXtoNum(num) {
  return x + num
}
console.log(addXtoNum(100))

function bar(num) {
  let y = 100
  return y + num
}

if(true) {
  let z = 1
}
console.log(y) // not defined
console.log(z) // no defined
