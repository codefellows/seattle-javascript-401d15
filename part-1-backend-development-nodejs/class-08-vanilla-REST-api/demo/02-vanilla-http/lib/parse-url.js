'use strict'

const debug = require('debug')('http:parse-url')
const parseUrl = require('url').parse
const parseQuery = require('querystring').parse

module.exports = function(req) {
  debug('#parse-url')
  req.url = parseUrl(req.url)
  req.url.query = parseQuery(req.url.query)
  return Promise.resolve(req)
}
