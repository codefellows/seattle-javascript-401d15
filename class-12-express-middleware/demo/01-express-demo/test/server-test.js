'use strict'

const server = require('../server')
const chai = require('chai')
const http = require('chai-http')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})
const expect = chai.expect

chai.use(http)

describe('server module', function() {
  let app
  describe('GET', function() {
    // all the tests
  })
  describe('POST', function() {
    // all the tests
  })
  describe('PUT', function() {
    let notes = []
    before(done => {
      chai.request(server)
      .post('/api/note')
      .send({name: 'hello', details: 'foobar'})
      .end((err, res) => {
        let note = JSON.parse(res.body)
        notes.push(note)
        done()
      })
    })
    after(done => {
      notes.forEach(note => {
        fs.unlinkProm(`${__dirname}/../data/note/${note.id}.json`)
      })
      done()
    })
    describe('requests made to /api/note', function() {
      it('should have a response status of 200', done => {
        chai.request(server)
        .put('/api/note')
        .send({id: notes[0].id, name: notes[0].name, details: notes[0].details})
        .end((err, res) => {
          expect(res).to.have.status(200)
          done()
        })
      })
      it('should have a response status of 404 given no id', done => {
        done()
      })
      it('modify a specific record given the correct inputs', done => {
        console.log('ran the it');
        chai.request(server)
        .put('/api/note')
        .send({id: notes[0].id, name: 'foobar', details: notes[0].details})
        .end((err, res) => {
          expect(res.body.name).to.equal('foobar')
          done()
        })
      })
      it('should have a response status of 404 given bad schema', done => {
        done()
      })
    })
    describe('requests made to invalid route', function() {

    })
  })
  describe('DELETE', function() {

  })
})
