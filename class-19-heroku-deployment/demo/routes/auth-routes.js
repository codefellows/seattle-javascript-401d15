'use strict'

const basicAuth = require('../lib/basic-auth-middleware')
const authCtrl = require('../controllers/auth-controller')
const debug = require('debug')('cfgram:auth-routes')

module.exports = function(router) {
  router.post('/signup', (req, res) => {
    authCtrl.signup(req)
    .then(token => res.json(token))
    .catch(err => res.status(err.status).send(err.message))
  })

  router.get('/signin', basicAuth, (req, res) => {
    authCtrl.signin(req)
    .then(token => res.json(token))
    .catch(err => res.status(err.status).send(err.message))
  })
  return router
}
