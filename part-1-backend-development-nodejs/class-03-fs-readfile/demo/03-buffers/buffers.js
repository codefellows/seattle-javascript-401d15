'use strict'

const Buffer = require('buffer').Buffer

let myBuffer = Buffer.from('Hello world')

console.log(myBuffer.toString('utf-8', 2, 8))
