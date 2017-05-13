'use strict'

const readFiles = require('./lib/readfile')
const paths = [
  `${__dirname}/data/first.txt`,
  `${__dirname}/data/second.txt`,
  `${__dirname}/data/third.txt`
]

readFiles(paths)
