'use strict'

const expect = require('chai').expect

describe('Thumbnail Container Controller', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')
    angular.mock.inject(($rootScope, $window, $componentController) => {
      this.$rootScope = $rootScope
      this.$window =  $window

      this.scope = this.$rootScope.$new()
      this.$window.localStorage.token = 'test token'
      this.mockBindings = {
        gallery: {
          name: 'gallery one',
          desc: 'description one',
          _id: '1234'
        }
      }
      this.thumbnailContainerCtrl = $componentController(
        'thumbnailContainer',
        { scope: this.scope },
        this.mockBindings
      )

      done()
    })
  })

  afterEach(done => {
    delete this.thumbnailContainerCtrl
    delete this.$window.localStorage.token
    done()
  })

  describe('default bindings', () => {
    it('should have a gallery object', done => {
      expect(this.thumbnailContainerCtrl.gallery).to.be.instanceOf(Object)
      done()
    })
    it('should have a gallery.name value of `one`', done => {
      expect(this.thumbnailContainerCtrl.gallery.name).to.equal('gallery one')
      done()
    })
    it('should have a gallery.desc value of `one`', done => {
      expect(this.thumbnailContainerCtrl.gallery.desc).to.equal('description one')
      done()
    })
    it('should have a gallery._id value of `1234`', done => {
      expect(this.thumbnailContainerCtrl.gallery._id).to.equal('1234')
      done()
    })
    it('should NOT have a pic object', done => {
      expect(this.thumbnailContainerCtrl.pic).to.be.undefined
      done()
    })
  })
})
