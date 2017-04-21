'use strict'

const fs = require('fs')
const bitmap = fs.readFileSync(`${__dirname}/data/bitmap.bmp`)
const bmp = {}

bmp.spec = bitmap.toString('utf-8', 0, 2)
bmp.size = bitmap.readUInt32LE(2)
bmp.width = bitmap.readUInt32LE(18)
bmp.height = bitmap.readUInt32LE(22)
bmp.offset = bitmap.readUInt32LE(10)
bmp.colorArray = bitmap.slice(54, bmp.offset).toString()

console.log(bmp)
