'use strict'

function isBigNumber(num) {
  return new Promise((resolve, reject) => {
    if(num > 1000) return resolve('congrats, that\'s huge')
    reject(new Error('number not big enuf'))
  })
}

let isLarge = isBigNumber(100000)
console.log(isLarge)

function _success(data) {
  console.log('this is my data', data)
}

isBigNumber(1000000)
.then(_success)
.catch(error => console.error(error))


isBigNumber(10)
.then(data => console.log(data))
.catch(error => console.error(error))
