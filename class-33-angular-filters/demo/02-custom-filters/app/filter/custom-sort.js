'use strict'

module.exports = function() {
  return function(galleries, limit=Infinity) {
    return galleries.sort((a, b) => b.name < a.name).slice(0, limit)
  }
}
