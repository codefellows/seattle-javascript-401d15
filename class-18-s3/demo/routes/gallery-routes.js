'use strict'

const createError = require('http-errors')
const Gallery = require('../models/gallery')
const debug = require('debug')('cfgram:gallery-routes')
const bearerAuth = require('../lib/bearer-auth-middleware')

module.exports = function(router) {
  router.post('/gallery', bearerAuth, (req, res) => {
    debug('#POST /api/gallery')

    req.body.userId = req.user._id
    new Gallery(req.body).save()
    .then(gallery => res.json(gallery))
    .catch(err => {
      console.log(err);
      res.status(err.status).send(err.message)
    })
  })

  router.get('/gallery/:id', bearerAuth, (req, res) => {
    debug('#GET /api/gallery/:id')

    Gallery.findById(req.params.id)
    .then(gallery => {
      if(gallery.userId.toString() !== req.user._id.toString()) {
        return createError(401, 'Invalid user')
      }
      res.json(gallery)
    })
    .catch(err => res.status(err.status).send(err.message))
  })

  return router
}
