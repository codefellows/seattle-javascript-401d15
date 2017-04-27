'use strict'

const server = require('../server')
const cowsay = require('cowsay')
const chai = require('chai')
const http = require('chai-http')
const expect = chai.expect

chai.use(http)

describe('Server module', function() {
  before(done => {
    server.listen(3000)
    done()
  })

  describe('POST method', function() {
    describe('/ endpoint', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .post('/')
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})
          expect(res.text.toString()).to.equal(cowsay)
          // expect(res.status).to.equal(400)
          expect(res).to.have.status(400)
          done()
        })
      })
    })
    describe('/cowsay endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .post('/cowsay')
        .send({text: 'hello world'})
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'hello world'})
          expect(res.text.toString()).to.equal(cowsay)
          expect(res.status).to.equal(200)
          done()
        })
      })
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .post('/cowsay')
        .send({})
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})
          expect(res.text.toString()).to.equal(cowsay)
          expect(res.status).to.equal(400)
          done()
        })
      })
    })
  })

  describe('GET method', function() {
    describe('/ endpoint', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})
          expect(res.text.toString()).to.equal(cowsay)
          expect(res.status).to.equal(400)
          done()
        })
      })
    })
    describe('/cowsay endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .get('/cowsay') // .get('/cowsay?text=hello+world&T=U+&f=dragon')
        .query({
          text: 'hello world',
          T: 'U ',
          f: 'dragon'
        })
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'hello world'})
          expect(res.text.toString()).to.equal(cowsay)
          // expect(res.status).to.equal(200)
          expect(res).to.be.status(200)
          done()
        })
      })
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .get('/cowsay/')
        .end((err, res) => {
          let cowsay = cowsay.say({text: 'bad request\ntry: localhost:3000/cowsay?text=howdy'})
          expect(res.text.toString()).to.equal(cowsay)
          expect(res.status).to.equal(400)
          done()
        })
      })
    })
  })

  after(done => {
    server.close()
    done()
  })
})
