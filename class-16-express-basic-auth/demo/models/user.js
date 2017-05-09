'use strict'

const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
const createError = require('http-errors')
const debug = require('debug')('cfgram:user-model')

const Schema = mongoose.Schema

const userSchema = Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  findhash: {type: String, unique: true}
})

userSchema.methods.generatePasswordHash = function(password) {
  debug('#generatePasswordHash')

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if(err) return reject(createError(401, 'Password hashing failed'))
      this.password = hash
      resolve(this)
    })
  })
}

userSchema.methods.comparePasswordHash = function(password) {
  debug('#comparePasswordHash')

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, valid) => {
      if(err) return reject(createError(401, 'Password validation failed'))
      if(!valid) return reject(createError(401, 'Wrong password'))

      resolve(this)
    })
  })
}

userSchema.methods.generateFindHash = function() {
  debug('#generateFindHash')

  return new Promise((resolve, reject) => {
    let tries = 0
    let _generateFindHash = () => {
      this.findHash = crypto.randomBytes(32).toString('hex')
      this.save()
      .then(() => resolve(this.findHash))
      .catch(err => {
        if(tries > 3) return reject(createError(401, 'Generate findhash failed'))
        tries++
        _generateFindHash()
      })
    }

    _generateFindHash()
  })
}

userSchema.methods.generateToken = function() {
  debug('#generateToken')
  return new Promise((resolve, reject) => {
    this.generateFindHash()
    .then(findHash => resolve(jwt.sign({token: findHash}, process.env.APP_SECRET)))
    .catch(err => {
      console.log(err);
      reject(createError(401, 'Generate token failed'))
    })
  })
}

module.exports = mongoose.model('user', userSchema)
