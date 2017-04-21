'use strict'

const fs = require('fs')
const EE = require('events').EventEmitter
const ee = new EE()

const paths = [
  `${__dirname}/data/first.txt`,
  `${__dirname}/data/second.txt`,
  `${__dirname}/data/third.txt`
]

ee.on('filedone', function(data) {
  // if(data) console.log('data:', data.toString())
  // if(paths.length === 0) return
  //
  // fs.readFile(paths.pop(), (err, data) => {
  //   if(err) throw err
  //   ee.emit('filedone', data)
  // })
})

ee.emit('filedone')
