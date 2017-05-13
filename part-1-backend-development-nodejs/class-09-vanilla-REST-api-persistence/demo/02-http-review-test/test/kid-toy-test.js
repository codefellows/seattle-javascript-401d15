'use strict'

const Toy = require('../model/kid-toys')
const expect = require('chai').expect

describe('kid-toy module', function() {
  describe('when creating a new toy object', function() {
    this.newToy = new Toy('music box', 'musical', true)
    it('should have a name of "music box"', done => {
      expect(this.newToy.name).to.equal('music box')
      done()
    })
    it('should have a type of "musical"', done => {
      expect(this.newToy.type).to.equal('musical')
      done()
    })
    it('should have a hazard of "true"', done => {
      expect(this.newToy.hazard).to.be.true
      done()
    })
    it('should have an id of a unique uuid value', done => {
      let pattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      expect(this.newToy.id).to.match(pattern)
      done()
    })
  })
})
