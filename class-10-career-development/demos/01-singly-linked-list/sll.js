'use strict'

const Node = require('./list-node')

// [val, next]

// (HEAD)[val, next] The list is empty, so we just point the head at the new node

// (HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
// Prepend() adds a new node at the HEAD             Append() adds a new node after last node

const SLL = module.exports = function() {
  this.head = null
}

SLL.prototype.prepend = function(value) {
  let node = new Node(value)
  if(!this.head) {
    this.head = node
    return this
  }

  node.next = this.head
  this.head = node
  return this
}

SLL.prototype.append = function(value) {
  let node = new Node(value)
  let lastNode = null

  if(!this.head) {
    this.head = node
    return this
  }

  _setLastNode(this.head)
  lastNode.next = node
  return this

  function _setLastNode(node) {
    if(!node) return
    lastNode = node
    _setLastNode(node.next)
  }
}
