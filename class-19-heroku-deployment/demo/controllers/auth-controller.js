'use strict'

const User = require('../models/user')
const createError = require('http-errors')
const debug = require('debug')('cfgram:auth-controller')

const authCtrl = module.exports = {}

authCtrl.signup = function(req) {
  debug('#signup')

  let password = req.body.password
  req.body.password = null

  let user = new User(req.body)
  return user.generatePasswordHash(password)
  .then(user => user.save())
  .then(user => user.generateToken())
  .then(token => token)
  .catch(err => Promise.reject(createError(400, 'Bad request')))
}

authCtrl.signin = function(req) {
  debug('#signin')

  return User.findOne({username: req.auth.username})
  .then(user => user.comparePasswordHash(req.auth.password))
  .then(user => user.generateToken())
  .then(token => token)
  .catch(err => Promise.reject(createError(401, 'Not authorized')))
}
