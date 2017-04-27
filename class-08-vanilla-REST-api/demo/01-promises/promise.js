'use strict'

function isBigNumber(num) {
  return new Promise((resolve, reject) => {
    if(num > 1000) return resolve('congrats, that\'s huge')
    reject(new Error('number not big enuf'))
  })
}

let isLarge = isBigNumber(100000)
console.log(isLarge)

isBigNumber(1000000)
.then(data => console.log(data))
.catch(error => console.error(error))


isBigNumber(10)
.then(data => console.log(data))
.catch(error => console.error(error))
