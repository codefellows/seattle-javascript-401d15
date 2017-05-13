'use strict'

const uuid = require('uuid/v4')

module.exports = function(name, details, date) {
  // if(!name || !details || !date) throw new Error()

  this.name = name
  this.details = details
  this.date = date || new Date()
  this.id = uuid()
}
