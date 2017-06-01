'use strict'

require('./lib/test-setup.js')

describe('Signup Controller', function () {
  beforeEach(() => {
    angular.mock.module('routesApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.signupCtrl = new $controller('SignupController')
      this.$rootScope = $rootScope
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.signupCtrl.title).toBe('Welcome to the Signup Page')
    })
    this.$rootScope.apply()
  })
})
