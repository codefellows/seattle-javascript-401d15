'use strict';

const createError = require('http-errors')
const debug = require('debug')('cfgram:basic-auth-middleware')

module.exports = function(req, res, next) {
  debug('#basic-auth')

  let authHeader = req.headers.authorization
  if(!authHeader) return next(createError(401, 'Authorization headers required'))

  let base64Str = authHeader.split('Basic ')[1]
  if(!base64Str) return next(createError(401, 'username and password required'))

  let utf8Str = new Buffer(base64Str, 'base64').toString()
  let [username, password] = utf8Str.split(':')
  req.auth = {username, password}

  if(!req.auth.username) return next(createError(401, 'Username required'))
  if(!req.auth.password) return next(createError(401, 'Password required'))

  next()
}
