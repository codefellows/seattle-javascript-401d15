'use strict'

let Node = function(val) {
  this.val = val
  this.children = []
}

let Tree = module.exports = function() {
  this.root = null
}

Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk)
  }
}

Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('Val required')
  if(!this.root) {
    this.root = new Node(val)
    return
  }

  this.preOrder(node => {
    if(node.val === parentVal) {
      node.children.push(new Node(val))
      return
    }
  })
}

Tree.prototype.prune = function(val) {
  if(!val) return new Error('must pass val')
  if(!root) return
  let current = this.root
  let parent, index

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.val === val) {
        index = idx
        parent = current
        return
      }
      current = node
    })
  })

  if(!parent) return new Error('blah')
  parent.children.splice(index, 1)
}
