'use strict'

const fs = require('fs')

module.exports = function(paths) {
  if(paths.length > 3 || paths.length < 3) throw new Error('must have three paths')
  // let one = paths[0]
  // let two  = paths[1]
  // let three = paths[2]
  let [one, two, three] = paths
  let buffArray = []

  fs.readFile(one, (err, data) => {
    if(err) throw err
    buffArray.push(data.toString('hex', 0, 8))

    fs.readFile(two, (err, data) => {
      if(err) throw err
      buffArray.push(data.toString('hex', 0, 8))

      fs.readFile(three, (err, data) => {
        if(err) throw err
        buffArray.push(data.toString('hex', 0, 8))
        console.log(buffArray);
      })
    })
  })
}
