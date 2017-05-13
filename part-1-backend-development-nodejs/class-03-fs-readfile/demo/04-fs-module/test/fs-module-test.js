'use strict'

const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const fs = require('fs')

describe('fs module', function() {
  describe('#readFile', function() {
    it('should read a file, and produce a raw buffer', done => {
      fs.readFile(`${__dirname}/../data/text.txt`, function(err, data) {
        let bufferData = data
        expect(typeof bufferData).equal(typeof Buffer.from(''))
        done()
      })
    })
    // it('should write a new file to the data dir', done => {
    //
    //   done()
    // })
  })
})
