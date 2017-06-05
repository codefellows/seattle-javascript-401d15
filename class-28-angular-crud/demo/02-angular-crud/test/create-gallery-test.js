'use strict'

const expect = require('chai').expect

describe('Create Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.createGalleryCtrl = $componentController('createGalleryCtrl')
      done()
    })
  })

  beforeEach(done => {
    this.createGalleryCtrl.$onInit()
    this.$window.localStorage.setItem('token', 'test token')
    done()
  })

  afterEach(done => {
    this.$window.localStorage.removeItem('token')
    this.$httpBackend.flush()
    this.$rootScope.$apply()
    done()
  })

  describe('#createGalleryCtrl.createGallery()', () => {
    it('should make a valid POST request for all galleries', done => {
      let expectUrl = 'http://localhost:3000/api/gallery'
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectGallery = {
        name: 'gallery one',
        desc: 'description one'
      }

      this.$httpBackend.expectPOST(expectUrl, expectGallery, expectHeaders)
        .respond(200, expectGallery)
        this.createGalleryCtrl.gallery = expectGallery
        expect(this.createGalleryCtrl.createGallery).to.not.throw()

      done()
    })
  })
})
