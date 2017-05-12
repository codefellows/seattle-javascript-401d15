'use strict'

const fs = require('fs')
const path = require('path')
const del = require('del')
const AWS = require('aws-sdk')
const multer = require('multer')
const dataDir = `${__dirname}/../assets/image`
const upload = multer({ dest: dataDir })
const createError = require('http-errors')
const debug = require('debug')('cfgram:pic-router')

const Pic = require('../models/pic')
const Gallery = require('../models/gallery')

AWS.config.setPromisesDependency(require('bluebird'))

const s3 = new AWS.S3()

function s3uploadProm(params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, s3data) => {
      resolve(s3data)
    })
  })
}

function s3DeleteProm(params) {
  return new Promise((resolve, reject) => {
    s3.deleteObject(params, (err, s3data) => {
      if(err) return reject((err.stack))
      resolve(s3data)
    })
  })
}

const picCtrl = module.exports = {}

picCtrl.create = function(req) {
  debug('#create')
  if (!req.file) return next(createError(400, 'file not found'))
  if (!req.file.path) return next(createError(500, 'file not saved'))

  let ext = path.extname(req.file.originalname)
  let params = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET,
    Key: `${req.file.filename}${ext}`,
    Body: fs.createReadStream(req.file.path)
  }

  return Gallery.findById(req.params.galleryID)
  .then(() => s3uploadProm(params))
  .then(s3Data => {
    del([`${dataDir}/*`])
    let picData = {
      name: req.body.name,
      desc: req.body.desc,
      objectKey: s3Data.Key,
      imageURI: s3Data.Location,
      userID: req.user._id,
      galleryID: req.params.galleryID
    }
    return new Pic(picData).save()
  })
}

picCtrl.fetch = function(id) {
  debug('#fetch')

  return Pic.findById(id)
  .then(pic => pic)
  .catch(err => createError(404, err.message))
}

picCtrl.fetchAll = function() {
  debug('#fetchAll')

  return Pic.find()
  .then(pics => pics.map(p => p._id))
  .catch(err => createError(401, err.message))
}

picCtrl.delete = function(id) {
  debug('#delete')

  return Pic.findById(id)
  .then(pic => {
    pic.remove()
    return pic
  })
  .then(pic => {
    let params = {
      Bucket: process.env.AWS_BUCKET,
      Key: pic.objectKey
    }
    return params
  })
  .then(params => s3DeleteProm(params))
  .catch(err => createError(404, err.message))
}
