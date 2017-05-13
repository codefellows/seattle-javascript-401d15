'use strict'

const debug = require('debug')('http:kid-toy')
const uuid = require('uuid/v4')

module.exports = function(name, type, hazard) {
  if(!name || !type) throw new Error('Invalid arguments')
  this.name = name
  this.type = type
  this.hazard = hazard
  this.id = uuid()
}
