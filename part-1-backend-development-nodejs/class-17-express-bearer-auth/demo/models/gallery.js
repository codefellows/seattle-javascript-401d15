'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallerySchema = Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  created: {type: Date, default: Date.now, required: true},
  userId: {type: Schema.Types.ObjectId, required: true}
})

module.exports = mongoose.model('gallery', gallerySchema)
