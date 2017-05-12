'use strict'

const debug = require('debug')('cfgram:gallery-routes')
const bearerAuth = require('../lib/bearer-auth-middleware')
const galleryCtrl = require('../controllers/gallery-controller')

module.exports = function(router) {
  router.post('/gallery', bearerAuth, (req, res) => {
    debug('#POST /gallery')

    galleryCtrl.create(req.body, req.user)
    .then(gallery => res.json(gallery))
    .catch(err => res.status(err.status).send(err.message))
  })

  router.get('/gallery/:id', bearerAuth, (req, res) => {
    debug('#GET /gallery/:id')

    galleryCtrl.fetchGallery(req.params.id)
    .then(gallery => {
      debugger; // NOTE Debugger active
      if(gallery.userId.toString() !== req.user._id.toString()) {
        return res.status(401).send('Invalid user')
      }
      res.json(gallery)
    })
    .catch(err => res.status(err.status).send(err.message))
  })

  return router
}
