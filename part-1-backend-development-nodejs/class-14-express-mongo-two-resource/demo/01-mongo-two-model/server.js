'use strict'

// Module dependencies
const express = require('express')
const mongoose = require('mongoose')
const Promise = require('bluebird')
const bodyParser = require('body-parser').json()

// server instance refs
const app = module.exports = express()
const router = express.Router()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/list-dev'

// routes
const noteRoutes = require('./routes/note-routes')(router)
const listRoutes = require('./routes/list-routes')(router)

// mongodb
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI)

// middleware / plugins
app.use(bodyParser)
app.use('/api', noteRoutes)
app.use('/api', listRoutes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
