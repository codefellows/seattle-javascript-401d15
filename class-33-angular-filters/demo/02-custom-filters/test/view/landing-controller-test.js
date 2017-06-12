'use strict'

const expect = require('chai').expect

describe('Landing Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $location, $controller) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$location = $location

      this.scope = this.$rootScope.$new()
      this.landingCtrl = $controller(
        'LandingController',
        { scope: this.scope }
      )
      this.landingCtrl.$onInit()
      this.landingCtrl.url = '/join#signup'
      done()
    })
  })

  describe('default properties', () => {
    describe('landingCtrl.url', () => {
      it('should have a url value of `/join#signup`', done => {
        expect(this.landingCtrl.url).to.equal('/join#signup')
        done()
      })
    })
    describe('landingCtrl.showSignup', () => {
      it('should have a value of false on url === `/join#signup`', done => {
        expect(this.landingCtrl.showSignup).to.be.false
        done()
      })
      it('should have a value of false on url === `/join`', done => {
        this.$location.url('/join')
        expect(this.landingCtrl.showSignup).to.be.false
        done()
      })
      it('should have a value of true on url === <any other route>', done => {
        this.$location.url('/anything-else')
        expect(this.landingCtrl.showSignup).to.be.false
        done()
      })
    })
  })
})
