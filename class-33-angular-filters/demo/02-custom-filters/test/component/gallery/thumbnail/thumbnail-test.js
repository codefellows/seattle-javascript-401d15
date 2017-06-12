'use strict'

const expect = require('chai').expect

describe('Thumbnail Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, picService, galleryService) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.$componentController = $componentController
      this.picService = picService
      this.galleryService = galleryService

      this.scope = this.$rootScope.$new()
      this.$window.localStorage.token = 'test token'
      done()
    })
  })
  beforeEach(done => {
    this.url = 'http://localhost:3000/api/gallery/1234/pic/5678'
    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.$window.localStorage.token}`
    }
    this.mockBindings = {
      pic: {
        name: 'testy mcPic',
        desc: 'image of the world',
        username: 'testyMcTest',
        _id: '5678'
      },
      gallery: {
        name: 'gallery one',
        desc: 'description one',
        _id: '1234'
      }
    }

    this.thumbnailCtrl = this.$componentController(
      'thumbnail',
      {
        // picService: this.picService,
        // galleryService: this.galleryService,
        $scope: this.scope
      },
      this.mockBindings
    )
    this.thumbnailCtrl.$onInit()

    done()
  })

  afterEach(done => {
    delete this.thumbnailCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('controller bindings', () => {
    it('should set a pic object from bindinds', done => {
      expect(this.thumbnailCtrl.pic).to.be.instanceOf(Object)
      done()
    })
    it('should have a pic.name value of `testy mcPic`', done => {
      expect(this.thumbnailCtrl.pic.name).to.equal('testy mcPic')
      done()
    })
    it('should set a gallery object from bindings', done => {
      expect(this.thumbnailCtrl.gallery).to.be.instanceOf(Object)
      done()
    })
  })

  describe('#thumbnailCtrl.deletePic', () => {
    it('should successfully invoke the delete method', done => {
      this.$httpBackend.expectDELETE(this.url, this.headers).respond(204)
      this.thumbnailCtrl.deletePic()

      this.$httpBackend.flush()
      this.$rootScope.$apply()

      done()
    })
  })
})
