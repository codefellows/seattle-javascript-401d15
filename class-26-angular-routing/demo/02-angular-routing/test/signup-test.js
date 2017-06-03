'use strict'

// require('./lib/test-setup')
const expect = require('chai').expect

describe('Signup Controller', function () {
  beforeEach(done => {
    angular.mock.module('routesApp')
    angular.mock.inject(($controller) => {
      this.signupCtrl = new $controller('SignupController')
      done()
    })
  })

  beforeEach(done => {
    this.signupCtrl.$onInit()
    done()
  })

  describe('Default Properties', () => {
    it('title is set correctly', done => {
      expect(this.signupCtrl.title).to.equal('Welcome to the Signup Page')
      done()
    })
  })
})
