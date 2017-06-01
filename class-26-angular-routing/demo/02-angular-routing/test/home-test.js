
'use strict'

require('./lib/test-setup.js')

describe('Home Controller', function () {

  beforeEach(() => {
    angular.mock.module('routesApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.homeCtrl = new $controller('HomeController')
      this.$rootScope = $rootScope
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.homeCtrl.title).toBe('Welcome to the homepage')
      this.$rootScope.apply()
    })
  })
})
