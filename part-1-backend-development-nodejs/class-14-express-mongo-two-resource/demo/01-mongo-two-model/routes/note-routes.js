'use strict'

const Note = require('../models/note')
const List = require('../models/list')

module.exports = function(router) {
  router.get('/note/:id', (req, res) => {

  })
  router.get('/note', (req, res) => {

  })
  router.post('/list/:id/note', (req, res) => {
    List.findByIdAndAddNote(req.params.id, req.body)
    .then(note => res.json(note))
    .catch(err => res.status(404).send(err.message))
  })
  router.put('/note', (req, res) => {

  })
  router.delete('/note/:id', (req, res) => {

  })

  return router
}
