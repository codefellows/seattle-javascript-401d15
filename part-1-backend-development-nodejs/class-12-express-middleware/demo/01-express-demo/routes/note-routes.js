'use strict'

const Note = require('../model/note')
const noteCtrl = require('../controller/note-controller')


module.exports = function(router) {
  router.post('/api/note', (req, res) => {
    let note = new Note(req.body.name, req.body.details, req.body.date)

    noteCtrl.createItem('note', note)
    .then(() => res.json(JSON.stringify(note)))
    .catch(err => {
      console.error(err)
      res.status(400).send(err.message)
    })
  })

  // http GET :3000/api/note/1239pijqefsp98jasdfjpoi
  // req.params = {id: 1239pijqefsp98jasdfjpoi}
  router.get('/api/note/:id', (req, res) => {
    noteCtrl.fetchItem('note', req.params.id)
    .then(data => res.json(data.toString()))
    .catch(err => res.status(404).send(err.message))
  })

  router.put('/api/note', (req, res) => {
    noteCtrl.updateItem('note', req.body)
    .then(data => res.json(data))
    .catch(err => res.status(404).send(err.message))
  })
}
