'use strict'

const expect = require('chai').expect

describe('Gallery Item Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, galleryService) => {
      this.$rootScope = $rootScope
      this.scope = this.$rootScope.$new()
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.galleryService = galleryService
      this.galleryItemCtrl = $componentController('galleryItem', {scope: this.scope, galleryService: this.galleryService})
      done()
    })
  })
  beforeEach(done => {
    this.$window.localStorage.token = 'test token'
    this.galleryItemCtrl.$onInit()
    done()
  })
  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    done()
  })

  describe('galleryItemCtrl Default Props', () => {
    it('should have a property of showEditGallery set to false', done => {
      expect(this.galleryItemCtrl.showEditGallery).to.be.false
      done()
    })
  })

  describe('delete gallery', () => {
    // NOTE this is providing a false positive
    it('should remove a gallery from the app', done => {
      let expectUrl = 'http://localhost:3000/gallery/1234'
      let expectHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      this.galleryService.galleries = [
        {name: 'one', desc: 'one', _id: '1234'},
        {name: 'two', desc: 'two', _id: '4567'}
      ]
      this.$httpBackend.expectDELETE(expectUrl, expectHeaders)
      .respond(204)
      this.galleryItemCtrl.gallery = {name: 'one', desc: 'one', _id: '1234'}

      this.galleryItemCtrl.deleteGallery().then(() => {
        console.log(this.galleryService.galleries);
        this.$httpBackend.flush()
        this.$rootScope.$apply()
      })

      done()
    })
  })
})
