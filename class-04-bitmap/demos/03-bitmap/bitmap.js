'use strict'

const fs = require('fs')
const bitmap = fs.readFileSync(`${__dirname}/data/bitmap.bmp`)
const bmp = {}

bmp.spec = bitmap.toString('utf-8', 0, 2)
bmp.size = bitmap.readUInt32LE(2)
bmp.width = bitmap.readUInt32LE(18)
bmp.height = bitmap.readUInt32LE(22)
bmp.offset = bitmap.readUInt32LE(10)
bmp.colorArray = bitmap.slice(54, bmp.offset)

console.log(bmp)


// bmp.type = bitmap.toString('utf-8', 0, 2)
// bmp.size = bitmap.readInt32LE(2)
// bmp.headerSize = bitmap.readInt32LE(14)
// bmp.width = bitmap.readInt32LE(18)
// bmp.height = bitmap.readInt32LE(22)
// bmp.offset = bitmap.readInt32LE(10) // Gets you the offset to pixel array, which is the stopping point for color array
// bmp.colorArray = bitmap.slice(54, bmp.offset)
//
//
// console.dir(bmp)
