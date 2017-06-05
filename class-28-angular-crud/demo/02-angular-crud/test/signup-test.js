'use strict'

const expect = require('chai').expect

describe('Signup Controller', function () {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope
      this.$componentController = $componentController
      done()
    })
  })


  describe('Default Properties', () => {
    it('title is set correctly', done => {
      let signupCtrl = this.$componentController('signup')
      signupCtrl.$onInit()

      expect(signupCtrl.title).to.equal('Welcome to the signup page!')
      done()
    })
  })
})
