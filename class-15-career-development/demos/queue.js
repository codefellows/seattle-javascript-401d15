'use strict'

const Queue = module.exports = require('./linked_list')

Queue.prototype.enqueue = function(val) {
  this.insert(val)
  return this
}

Queue.prototype.dequeue = function() {
  let current = null

  _setCurrent(this.head)
  current.next = null
  return this

  function _setCurrent(node) {
    if(!node.next) return
    current = node
    _setCurrent(node.next)
  }
}
