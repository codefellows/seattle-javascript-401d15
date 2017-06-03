
'use strict'

require('./lib/test-setup')
const expect = require('chai').expect

describe('Home Controller', function () {

  beforeEach(done => {
    angular.mock.module('routesApp')
    angular.mock.inject(($controller) => {
      this.homeCtrl = new $controller('HomeController')
      done()
    })
  })

  beforeEach(done => {
    this.homeCtrl.$onInit()
    done()
  })

  describe('Default Properties', () => {
    it('title is set correctly', done => {
      console.log(this.homeCtrl);
      expect(this.homeCtrl.title).to.equal('Welcome to the homepage')
      done()
    })
  })
})
