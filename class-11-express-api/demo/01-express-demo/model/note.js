'use strict'

const uuid = require('uuid/v4')

module.exports = function(name, details, owner, date) {
  this.name = name
  this.details = details
  this.owner = owner
  this.date = date || new Date()
  this.id = uuid()
}
