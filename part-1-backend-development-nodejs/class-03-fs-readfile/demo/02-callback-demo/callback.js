'use strict'

// NODE CALLBACK PATTERN //

function nodeCallback(err, data) {
  if(err) throw err
  console.log('this is some data', data)
}

function someFunction(callback) {
  callback(new Error('my error'), 'I am some data')
}

someFunction(nodeCallback)


// function nodeCallback(err, data) {
//   console.log('this is some data', data)
// }
//
// function someFunction(callback) {
//   callback(null, 'I am some data')
// }
//
// someFunction(nodeCallback)


// GENERAL CALLBACK PATTERN //
// function someCallback(data) {
//   console.log('this is some data', data);
// }
//
// function someFunction(callback) {
//   callback('I am some data!')
// }
//
// someFunction(someCallback)
