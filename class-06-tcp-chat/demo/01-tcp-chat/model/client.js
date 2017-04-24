'use strict'

const uuid = require('node-uuid')

module.exports = function(socket) {
  this.socket = socket
  this.nickName = uuid.v4()
  this.userName = `${Math.random()}`
}
