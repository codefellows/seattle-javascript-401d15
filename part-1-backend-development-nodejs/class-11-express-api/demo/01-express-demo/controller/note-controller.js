'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})
const createError = require('http-errors')

module.exports = exports = {}

const DATA_URL = `${__dirname}/../data`

exports.createItem = function(schema, note) {
  if(!schema) return Promise.reject(createError(400, 'Schema required'))
  if(!note) return Promise.reject(createError(400, 'Note required'))

  let jsonNote = JSON.stringify(note)
  return fs.writeFileProm(`${DATA_URL}/${schema}/${note.id}.json`, jsonNote)
  .then(() => note)
  .catch(err => Promise.reject(createError(500, err.message)))
}

exports.fetchItem = function(schema, id) {
  if(!schema) return Promise.reject(createError(400, 'Schema required'))
  if(!id) return Promise.reject(createError(400, 'Id required'))

  return fs.readFileProm(`${DATA_URL}/${schema}/${id}.json`)
  .then(data => data)
  .catch(err => Promise.reject(createError(500, err.message)))
}
