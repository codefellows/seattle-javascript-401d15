'use strict'

const fs = require('fs')

fs.readFile(`${__dirname}/data/text.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString())
  let newData = data.toString()
  newData += '\n\nI am some new text content'

  fs.writeFile(`${__dirname}/data/new_text.txt`, newData , function(err) {
    if(err) throw err
  })
})
