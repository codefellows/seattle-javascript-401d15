'use strict'

const server = require('../server')
const expect = require('chai').expect
const net = require('net')

describe('Server instance', function() {
  before(done => {
    server.listen(3000)
    done()
  })

  after(done => {
    server.close()
    done()
  })

  describe('new client joins chat', function() {
    it('should notify other users that a new user has joined', done => {
      let client = net.connect({port: 3000}, () => {
        client.once('data', function(data) {
          expect(data.toString()).to.include('has joined the channel')
        })
        client.end()
        done()
      })
    })
  })

  describe('client leaves the chat', function() {
    it('should notify other users that a user has left the chat', done => {

      done()
    })
  })

  describe('bad whack command', function() {
    it('should respond with an invalid command statement', done => {

      done()
    })
  })

  describe('/nick command', function() {
    it('should change the client nickname', done => {

      done()
    })
  })

  describe('/dm command', function() {
    it('should direct message a specific user', done => {

    done()
  });
})
