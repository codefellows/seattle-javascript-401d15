'use strict'

const bodyParser = require('./lib/body-parser')
const http = require('http')
const url = require('url')
const queryString = require('querystring')
const cowsay = require('cowsay')
const PORT = process.env.PORT || 3000

const server = module.exports = http.createServer(function(req, res) {
  // console.log(req.url)
  req.url = url.parse(req.url)
  req.url.query = queryString.parse(req.url.query)

  if(req.method === 'POST') {
    // NOTE: below is a cURL command that can be run from the terminal when your server is running
    // curl -H "Content-Type: application/json" -X POST -d '{"text": "moo!"}' http://localhost:3000/cowsay

    // curl (primary command)
    // -H "Content-Type: application/json" (sets the headers)
    // -X POST (sets the POST method)
    // -d {"text": "moo!"} (sets the req.body data)
    // http://localhost:3000/cowsay (url for the request)
    
    if(req.url.pathname === '/cowsay') {
      bodyParser(req, function(err) {
        if(err) console.error(err)
        let message = cowsay.say({text: req.body.text})
        console.log(req.body)
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write(message)
        res.end()
      })
    } else {
      let message = cowsay.say(
        {text: 'bad request\ntry localhost:3000/cowsay with a proper body'}
      )
      res.writeHead(400, {'Content-Type': 'text/plain'})
      res.write(message)
      res.end()
    }
  }

  if(req.method === 'GET') {

  }


})

server.listen(PORT, () => console.log(`Listening on port, ${PORT}`))
