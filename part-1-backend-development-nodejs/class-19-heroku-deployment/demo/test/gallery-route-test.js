'use strict'

const awsMocks = require('./lib/aws-mocks')
const expect = require('chai').expect
const request = require('superagent')
const mongoose = require('mongoose')
const Promise = require('bluebird')

const serverToggle = require('./lib/server-toggle')
const User = require('../models/user')
const Gallery = require('../models/gallery')

const server = require('../server')
const url = `http://localhost:${process.env.PORT}`

mongoose.Promise = Promise

const exampleUser = {
  username: 'exampleuser',
  password: '1234',
  email: 'exampleuser@test.com'
}

const exampleGallery = {
  name: 'test gallery',
  desc: 'test gallery description'
}

describe('Gallery Routes', function() {
  before(done => {
    serverToggle.serverOn(server, done)
  })

  after(done => {
    serverToggle.serverOff(server, done)
  })

  afterEach(done => {
    Promise.all([
      User.remove({}),
      Gallery.remove({})
    ])
    .then(() => done())
    .catch(done)
  })

  describe('POST: /api/gallery', () => {
    before(done => {
      new User(exampleUser)
      .generatePasswordHash(exampleUser.password)
      .then(user => user.save())
      .then(user => {
        this.tempUser = user
        return user.generateToken()
      })
      .then(token => {
        this.tempToken = token
        done()
      })
      .catch(done)
    })

    it('should return a gallery', done => {
      request.post(`${url}/api/gallery`)
      .send(exampleGallery)
      .set({
        Authorization: `Bearer ${this.tempToken}`
      })
      .end((err, res) => {
        if (err) return done(err)
        let date = new Date(res.body.created).toString()
        expect(res.body.name).to.equal(exampleGallery.name)
        expect(res.body.desc).to.equal(exampleGallery.desc)
        expect(res.body.userId).to.equal(this.tempUser._id.toString())
        expect(date).to.not.equal('Invalid Date')
        done()
      })
    })
  })

  describe('GET: /api/gallery/:id', () => {
    before(done => {
      new User(exampleUser)
      .generatePasswordHash(exampleUser.password)
      .then(user => user.save())
      .then(user => {
        this.tempUser = user
        return user.generateToken()
      })
      .then(token => {
        this.tempToken = token
        done()
      })
      .catch(done)
    })

    before(done => {
      exampleGallery.userId = this.tempUser._id.toString()
      new Gallery(exampleGallery).save()
      .then(gallery => {
        this.tempGallery = gallery
        done()
      })
      .catch(done)
    })

    after(done  => {
      delete exampleGallery.userId
      done()
    })

    it('should return a gallery', done => {
      request.get(`${url}/api/gallery/${this.tempGallery._id}`)
      .set({
        Authorization: `Bearer ${this.tempToken}`
      })
      .end((err, res) => {
        if (err) return done(err)
        let date = new Date(res.body.created).toString()
        expect(res.body.name).to.equal(exampleGallery.name)
        expect(res.body.desc).to.equal(exampleGallery.desc)
        expect(res.body.userId).to.equal(this.tempUser._id.toString())
        expect(date).to.not.equal('Invalid Date')
        done()
      })
    })
  })
})
