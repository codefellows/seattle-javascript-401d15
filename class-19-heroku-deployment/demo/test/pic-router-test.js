'use strict'

const expect = require('chai').expect
const request = require('superagent')
const debug = require('debug')('cfgram:pic-router-test')
const awsMocks = require('./lib/aws-mocks')

const Pic = require('../models/pic')
const User = require('../models/user')
const Gallery = require('../models/gallery')

const serverToggle = require('./lib/server-toggle')
const server = require('../server')

const url = `http://localhost:${process.env.PORT}`

const exampleUser = {
  username: 'exampleuser',
  password: '1234',
  email: 'exampleuser@test.com'
}

const exampleGallery = {
  name: 'test gallery',
  desc: 'test gallery description'
}

const examplePic = {
  name: 'example pic',
  desc: 'example pic description',
  image: `${__dirname}/data/tester.png`
}

const examplePicModel = {
  name: 'example pic model',
  desc: 'example pic model description',
  imageURI: awsMocks.uploadMock.Location,
  filename: awsMocks.uploadMock.Key,
  created: new Date()
}

describe('Pic Routes', function() {
  before( done => {
    serverToggle.serverOn(server, done)
  })

  after( done => {
    serverToggle.serverOff(server, done)
  })

  afterEach( done => {
    Promise.all([
      Pic.remove({}),
      User.remove({}),
      Gallery.remove({})
    ])
    .then( () => done())
    .catch(done)
  })

  describe('POST: /api/gallery/:id/pic', function() {
    describe('with a valid token and valid data', function() {
      before( done => {
        new User(exampleUser)
        .generatePasswordHash(exampleUser.password)
        .then( user => user.save())
        .then( user => {
          this.tempUser = user
          return user.generateToken()
        })
        .then( token => {
          this.tempToken = token
          done()
        })
        .catch(done)
      })

      before( done => {
        exampleGallery.userId = this.tempUser._id.toString()
        new Gallery(exampleGallery).save()
        .then( gallery => {
          this.tempGallery = gallery
          done()
        })
        .catch(done)
      })

      after( done => {
        delete exampleGallery.userId
        done()
      })

      it('should return a pic', done => {
        request.post(`${url}/api/gallery/${this.tempGallery._id}/pic`)
        .set({
          Authorization: `Bearer ${this.tempToken}`
        })
        .field('name', examplePic.name)
        .field('desc', examplePic.desc)
        .attach('image', examplePic.image)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body.name).to.equal(examplePic.name)
          expect(res.body.desc).to.equal(examplePic.desc)
          expect(res.body.galleryID).to.equal(this.tempGallery._id.toString())
          expect(res.body.imageURI).to.equal(awsMocks.uploadMock.Location)
          done()
        })
      })
    })
  })
})
