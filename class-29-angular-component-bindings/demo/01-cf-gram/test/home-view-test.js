'use strict'

const expect = require('chai').expect

describe('Home Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $controller) => {
      this.$rootScope = $rootScope
      this.scope = this.$rootScope.$new()
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.homeCtrl = new $controller('HomeController', {scope: this.scope})
      done()
    })
  })

  beforeEach(done => {
    this.$window.localStorage.setItem('token', 'test token')
    done()
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    done()
  })

  describe('fetch galleries on page load', () => {
    it('should make a request to GET all galleries', done => {
      let expectUrl = 'http://localhost:3000/api/gallery'
      let expectHeaders = {
        Accept: 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }

      this.$httpBackend.expectGET(expectUrl, expectHeaders).respond(200,
        {
          galleries: [
            {name: 'one', desc: 'dOne'},
            {name: 'two', desc: 'dTwo'}
          ]
        }
      )

      this.homeCtrl.$onInit().then(data => {
        expect(data.galleries[0].name).to.equal('one')
        expect(data.galleries[1].name).to.equal('two')
      })

      this.$httpBackend.flush()
      this.$rootScope.$apply()
      done()
    })
  })
})
