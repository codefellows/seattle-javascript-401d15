'use strict'

const expect = require('chai').expect

describe('Upload Pic Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, picService) => {
      this.$rootScope = $rootScope
      this.$window = $window
      this.$httpBackend = $httpBackend
      this.$componentController = $componentController
      this.picService = picService

      this.$window.localStorage.token = 'some token'
      this.scope = this.$rootScope.$new()
      this.mockBindings = {
        gallery: {
          name: 'some name',
          desc: 'some desc',
          _id: '1234'
        }
      }

      this.uploadPicCtrl = this.$componentController(
        'uploadPic',
        {
          scope: this.scope,
          // picService: this.picService
        },
        this.mockBindings
      )

      this.uploadPicCtrl.$onInit()
      done()
    })
  })

  afterEach(done => {
    delete this.uploadPicCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('default properties', () => {
    it('should have a pic object', done => {
      expect(this.uploadPicCtrl.pic).to.be.instanceOf(Object)
      done()
    })
    it('should have a gallery object', done => {
      expect(this.uploadPicCtrl.gallery).to.be.instanceOf(Object)
      done()
    })
  })

  describe('#picService.uploadPic', () => {
    it('should upload a pic on valid POST request', done => {
      let expectUrl = 'http://localhost:3000/api/gallery/1234/pic'
      let expectHeaders = {
        Accept: 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectPic = new FormData()
      expectPic.append('name', 'one')
      expectPic.append('desc', 'one')
      expectPic.append('_id', '5678')


      this.$httpBackend.expectPOST(expectUrl, expectPic, expectHeaders)
      .respond(200)

      this.uploadPicCtrl.pic = {
        name: 'one',
        desc: 'one'
      }
      this.uploadPicCtrl.uploadPic()

      this.$httpBackend.flush()
      this.$rootScope.$apply()

      done()
    })
  })
})
