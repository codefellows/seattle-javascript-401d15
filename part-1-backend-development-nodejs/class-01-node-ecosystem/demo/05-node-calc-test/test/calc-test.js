'use strict'

const assert = require('assert')
const calc = require('../lib/calc.js')

// describe('module name', function() {
//   describe('method name', function() {
//     it('should do something', function() {
//       assert.equal(true, true);
//     });
//     it('should do something else', function() {
//       assert.equal(true, true);
//       assert.equal(false, false);
//     });
//   })
// })

describe('calc.js', function() {
  describe('#addTwoNums', function() {
    it('should return 4, if given 1, and 3', function() {
      assert.equal(calc.addTwoNums(1, 3), 4);
    });
    it('should return a valid integer', function() {
      assert.equal(typeof calc.addTwoNums(4, 4), 'number')
    })
  })
})
