'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema // an optional alias to cut down on typing

const noteItem = Schema({
  name: {type: String, required: true},
  details: {type: String, max: 1048, required: true},
  date: {type: Date, default: Date.now} // implied required: false
})

module.exports = mongoose.model('note', noteItem)
