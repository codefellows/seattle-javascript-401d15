'use strict'

const debug = require('debug')('cfgram:basic-auth-middleware')
const createError = require('http-errors')

module.exports = function(req, res, next) {
  debug('#basic-auth-middleware')

  let authHeaders = req.headers.authorization
  if(!authHeaders) return next(createError(401, 'Authorization headers required'))

  let base64Str = authHeaders.split('Basic ')[1]
  if(!base64Str) return next(createError(401, 'Username and Password required'))

  let [username, password] = new Buffer(base64Str, 'base64').toString().split(':')
  req.auth = {username, password}

  if(!req.auth.username) return next(createError(401, 'Username required'))
  if(!req.auth.password) return next(createError(401, 'Password required'))

  next()
}
