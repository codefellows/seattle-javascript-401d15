'use strict'

const User = require('../models/user')
const expect = require('chai').expect
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

describe('User model', function() {
  let newUser
  before(done => {
    newUser = new User({username: 'scott', password: 'seekret', email: 'scott@scott.com'})
    newUser.generatePasswordHash(newUser.password)
    .then(() => done())
  })

  describe('usename property', () => {
    it('should have a valid username', done => {
      expect(newUser.username).to.equal('scott')
      done()
    })
  })
})
