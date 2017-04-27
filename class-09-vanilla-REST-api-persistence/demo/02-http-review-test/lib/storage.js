'use strict'

const debug = require('debug')('http:storage')
const storage = {}
// const storage = {
//   schemaOne: {
//     idOne: {},
//     idTwo: {},
//     // all the instances of schemaOne...
//   },
//   schemaTwo: {
//
//   }
// }

module.exports = exports = {}

exports.createItem = function(schema, item) {
  debug('#createItem')

  if(!schema) return Promise.reject(new Error('shema required'))
  if(!item) return Promise.reject(new Error('item required'))
  if(!storage[schema]) storage[schema] = {}
                      //  storage['kidToy'] = {}
                      //  storage.schema = {}

  storage[schema][item.id] = item

  return Promise.resolve(item)
}

exports.fetchItem = function(schema, id) {
  debug('#fetchItem')

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('shema required'))
    if(!id) return reject(new Error('id required'))

    let schemaName = storage[schema]
    if(!schemaName) return reject(new Error('schema not found'))

    let item = schemaName[id]
    if(!item) return reject(new Error('item not found'))

    resolve(item)
  })
}
