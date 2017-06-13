'use strict'

const expect = require('chai').expect

describe('Login Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $location, $httpBackend, $componentController, authService) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$location = $location
      this.$httpBackend = $httpBackend
      this.$componentController = $componentController
      this.authService = authService

      this.scope = this.$rootScope.$new()
      this.$window.localStorage.token = 'test token'
      done()
    })
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    done()
  })

  describe('user login', () => {
    it('should log a user into the application', done => {
      delete this.$window.localStorage.token

      let expectUrl = 'http://localhost:3000/api/login'
      let expectUser = {
        username: 'testy',
        password: 'password'
      }
      let base64 = this.$window.btoa(`${expectUser.username}:${expectUser.password}`)
      let expectHeaders = {
        'Accept': 'application/json',
        'Authorization': `Basic ${base64}`
      }

      this.loginCtrl = this.$componentController(
        'login',
        {
          scope: this.scope,
          authService: this.authService,
          $window: this.$window
        }
      )
      this.loginCtrl.$onInit()
      this.loginCtrl.user = expectUser

      this.$httpBackend.expectGET(expectUrl, expectHeaders).respond(200, 'new token')
      this.loginCtrl.login()

      this.$httpBackend.flush()
      this.$rootScope.$apply()

      done()
    })
  })
})
