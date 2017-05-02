'use strict'

const Note = require('../model/note')
const noteCtrl = require('../controller/note-controller')


module.exports = function(router) {
  router.post('/api/note', (req, res) => {
    console.log('I made it.')
    let note = new Note(req.body.name, req.body.details, req.body.date)

    noteCtrl.createItem('note', note)
    .then(() => res.json(JSON.stringify(note)))
    .catch(err => {
      console.error(err)
      res.send(err)
    })
  })

  router.get('/api/note/:id', (req, res) => {
    noteCtrl.fetchItem('note', req.params.id)
    .then(data => res.json(JSON.stringify(data.toString())))
    .catch(err => res.send(err))
  })
}
