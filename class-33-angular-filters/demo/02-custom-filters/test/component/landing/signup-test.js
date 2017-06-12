'use strict'

const expect = require('chai').expect

describe('Signup Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $location, $componentController, authService) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.$location = $location
      this.signupCtrl = $componentController('signup')
      this.authService = authService
      this.signupCtrl.$onInit()
      done()
    })
  })

  beforeEach(done => {
    this.$window.localStorage.token = 'test token'
    done()
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    done()
  })

  describe('Default Properties', () => {
    it('should have a title property', done => {
      expect(this.signupCtrl.title).to.equal('Welcome to the signup page!')
      done()
    })
  })

  describe('User signup', () => {
    it('should set a token into local storage', done => {
      this.$window.localStorage.token = null

      let expectUrl = 'http://localhost:3000/api/signup'
      let expectHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
      let expectUser = {
        username: 'testy',
        email: 'test@test.com',
        password: 'password'
      }
      this.$httpBackend.expectPOST(expectUrl, expectUser, expectHeaders)
      .respond(200, 'new token')

      this.signupCtrl.signup(expectUser).then(() => {
        expect(this.$window.localStorage.token).to.equal('new token')
      })

      this.$httpBackend.flush()
      this.$rootScope.$apply()

      done()
    })
  })
})
