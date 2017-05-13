'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

// fs.readFile('./data/one.txt', function(err, data) {
//   if(err) console.error(err)
//   console.log(data.toString('utf-8', 0, 16))
// })

fs.readFileProm('./data/one.txt')
.then(data => {
  console.log(data.toString('utf-8', 0, 16))
  fs.writeFileProm('./data/four.txt', data)
  .then(console.log)
  .catch(console.error)
})
.catch(console.error)
