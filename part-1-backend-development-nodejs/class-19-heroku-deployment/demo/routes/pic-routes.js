'use strict'

const multer = require('multer')
const dataDir = `${__dirname}/../assets/image`
const upload = multer({ dest: dataDir })
const debug = require('debug')('cfgram:pic-router')
const picCtrl = require('../controllers/pic-controller')
const bearerAuth = require('../lib/bearer-auth-middleware')

module.exports = function(router) {
  router.post('/gallery/:galleryID/pic', bearerAuth, upload.single('image'), (req, res) => {
    debug('#POST /api/gallery/:galleryID/pic')

    picCtrl.create(req)
    .then(pic => res.json(pic))
    .catch(err => {
      console.log(err)
      res.status(err.status).send(err.message)
    })
  })

  router.get('/pic/:id', bearerAuth, (req, res) => {
    debug('#GET /api/pic/:id')

    picCtrl.fetch(req.params.id)
    .then(pic => res.json(pic))
    .catch(err => res.status(err.status).send(err.message))
  })

  router.get('/pic', bearerAuth, (req, res) => {
    debug('#GET /api/pic')

    picCtrl.fetchAll()
    .then(ids => res.json(ids))
    .catch(err => res.status(err.status).send(err.message))
  })

  router.delete('/pic/:id', bearerAuth, (req, res) => {
    debug('#DELETE /pic/:id')

    picCtrl.delete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(err.status).send(err.message))
  })

  return router
}
