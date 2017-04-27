'use strict'

const http = require('http')
const Router = require('./lib/router')
const storage = require('./lib/storage')
const KidToy = require('./model/kid-toys')
const debug = require('debug')('http:server')
const PORT = process.env.PORT || 3000

const router = new Router()
const server = module.exports = http.createServer(router.route())

router.get('/api/toy', function(req, res) {
  debug('GET /api/toy')
  if(req.url.query.id) {
    storage.fetchItem('toy', req.url.query.id)
    .then(toy => {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(toy))
      res.end()
    })
    .catch(err => {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('not found')
      res.end()
    })
    return
  }

  res.writeHead(400, {'Content-Type': 'text/plain'})
  res.write('bad request')
  res.end()
})

router.post('/api/toy', function(req, res) {
  debug('POST /api/toy')
  console.log(req.body);
  try {
    let toy = new KidToy(req.body.name, req.body.type, req.body.hazard)
    storage.createItem('toy', toy)
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(toy))
    res.end()
  } catch(e) {
    console.error(e)
    res.writeHead(400, {'Content-Type': 'text/plain'})
    res.write('bad request')
    res.end()
  }
})

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
