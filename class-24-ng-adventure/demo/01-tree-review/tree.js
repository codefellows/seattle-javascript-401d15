'use strict'

const Node = function(val) {
  this.val = val
  this.children = []
}

const Tree = module.exports = function() {
  this.root = null
}

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val)

  if(!this.root) {
    this.root = newNode
    return
  }

  this.preOrder(_helper)

  function _helper(node) {
    if(node.val === parentVal) {
      node.children.push(newNode)
      return
    }
  }
}

Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk)
  }
}

Tree.prototype.prune = function(val) {

}

Tree.prototype.remove = function(val) {

}
