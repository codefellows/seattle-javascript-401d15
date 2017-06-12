'use strict'

const expect = require('chai').expect

describe('Edit Gallery Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $httpBackend, $controller, $componentController) => {
      this.$rootScope = $rootScope
      this.scope = this.$rootScope.$new()
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.editGalleryCtrl = $componentController('editGallery')
      this.homeCtrl = $controller('HomeController')
      done()
    })
  })
  beforeEach(done => {
    this.$window.localStorage.token = 'test token'
    this.editGalleryCtrl.$onInit()
    done()
  })

  describe('editGalleryCtrl Default Props', () => {
    it('should have a thing', done => {
      this.homeCtrl.galleries = [
        {name: 'one', desc: 'dOne'},
        {name: 'two', desc: 'dTwo'}
      ]

      let expectUrl = 'http://localhost:3000/api/gallery/1234'
      let expectHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectUpdate = {name: 'beep', desc: 'boop', _id: '1234'}
      this.$httpBackend.expectPUT(expectUrl, expectUpdate, expectHeaders)
        .respond(200, expectUpdate)


      this.editGalleryCtrl.gallery = {name: 'beep', desc: 'boop', _id: '1234'}
      this.editGalleryCtrl.updateGallery()
      this.$httpBackend.flush()
      this.$rootScope.$apply()

      done()
    })
  })
})
