'use strict'

const expect = require('chai').expect

describe('Home Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $state, $location, $window, $httpBackend, $controller, galleryService) => {
      this.$rootScope = $rootScope
      this.$state = $state
      this.$location = $location
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.$controller = $controller
      this.galleryService = galleryService

      // this.scope = this.$rootScope.$new()
      this.$location.url('/home')
      this.$window.localStorage.token = 'test token'
      this.galleryService.galleries = [
        {name: 'one', desc: 'one', _id: '1234'},
        {name: 'two', desc: 'two', _id: '5678'}
      ]

      this.homeCtrl = this.$controller(
        'HomeController',
        {
          scope: this.$rootScope,
          galleryService: this.galleryService
        }
      )

      done()
    })
  })

  afterEach(done => {
    delete this.homeCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('Functional methods', () => {
    describe('#HomeController.fetchGalleries', () => {
      beforeEach(done => {
        this.expectUrl = 'http://localhost:3000/api/gallery'
        this.expectHeaders = {
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.$window.localStorage.token}`
        }
        this.expectGalleries = [
          {name: 'one', desc: 'one', _id: '1234'},
          {name: 'two', desc: 'two', _id: '5678'}
        ]
        done()
      })
      afterEach(done => {
        this.$httpBackend.flush()
        done()
      })

      it('should make a valid GET request', done => {
        this.$httpBackend.expectGET(this.expectUrl, this.expectHeaders)
          .respond(200, this.expectGalleries)

        this.homeCtrl.$onInit()
        this.$rootScope.$apply()

        done()
      })
      it('should return an array of galleries', done => {
        this.$httpBackend.whenGET(this.expectUrl, this.expectHeaders)
          .respond(200, this.expectGalleries)

        this.homeCtrl.$onInit()
        this.$rootScope.$apply()

        done()
      })
    })
  })

  describe('Default properties', () => {
    beforeEach(done => {
      this.homeCtrl.$onInit()
      done()
    })

    it('should have a galleries array', done => {
      expect(this.homeCtrl.galleries).to.be.instanceOf(Array)
      done()
    })
    it('should have a #fetchGalleries method', done => {
      expect(this.homeCtrl.fetchGalleries).to.be.instanceOf(Function)
      done()
    })
  })
})
