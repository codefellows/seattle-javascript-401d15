'use strict'

describe('Gallery Service', function() {
  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(( $rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window
      this.$rootScope = $rootScope
      this.authService = authService
      this.galleryService = galleryService
      this.$httpBackend = $httpBackend
    })
  })

  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      }

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      }

      this.$httpBackend.expectPOST('http://localhost:3000/api/gallery', galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      })

      this.galleryService.createGallery(galleryData)
      .then(() => {
        this.$httpBackend.flush()
        this.$rootScope.$apply()
      })
    })
  })

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryID = 'testid'
      let headers = {
        Authorization: 'Bearer test token',
        Accept: "application/json"
      }

      this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/testid', headers).respond(204)
      this.galleryService.deleteGallery(galleryID)
      .then(() => {
        this.$httpBackend.flush()
        this.$rootScope.$apply()
      })
    })
  })
})
