'use strict'

const assert = require('assert')

describe('testing the behavior of pass by value', function() {
  describe('testing that numbers are pass by value', function() {
    it('abc should not change when xyz is changed', function() {
      let abc = 2

      let xyz = abc
      assert.strictEqual(abc, xyz)

      xyz += 10
      assert.equal(abc, 2) // true
      assert.equal(xyz, 12) // true
      assert.equal(abc, xyz) // false
    })
  })

  describe('testing the strings are pass by value', function() {
    it('abc should not change when xyz is changed', function() {
      let abc = 'hello from tests'

      let xyz = abc
      assert.equal(abc, xyz) // true
      xyz += ' I am a string'
      assert.notEqual(abc, xyz) // true
      assert.equal(abc, 'hello from tests') // true
    })
  })

  describe('testing pass by reference', function() {
    it('abc should not change when xyz is mutate', function() {
      let abc = {
        info: 'this is useful'
      }

      let xyz = abc

    })
  })
})
