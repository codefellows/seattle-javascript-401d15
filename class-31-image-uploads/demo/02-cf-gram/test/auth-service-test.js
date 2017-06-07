'use strict'

const expect = require('chai').expect

describe('Auth Service', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($httpBackend, $window, $rootScope, authService) => {
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.$rootScope = $rootScope
      this.authService = authService
      done()
    })
  })

  describe('authService.getToken', () => {
    it('shoul return a token', done => {
      this.authService.token = null
      this.$window.localStorage.setItem('token', 'test token')

      this.authService.getToken()
      .then(token => {
        expect(token).to.equal(this.$window.localStorage.token)
      })
      .catch(err => {
        expect(err).to.equal(null)
      })
      done()
    })
  })
})
