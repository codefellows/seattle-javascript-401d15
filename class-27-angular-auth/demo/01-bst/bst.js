'use strict'

const bstNode = module.exports = function(val) {
  this.val = val // unique id of the node
  this.data = null // optional
  this.parent = null
  this.left = null
  this.right = null
}

bstNode.prototype.insert = function(val) {
  if(!this) return
  if(val === this.val) throw new Error('val must be unique')
  // could also call .contains() or lookup() to validate unique value
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val)
      this.right.parent = this
    } else this.right.insert(val)
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val)
      this.left.parent = this
    } else this.left.insert(val)
  }
  return
}

bstNode.prototype.delete = function() {

}

bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false
    else return this.left.contains(val)
  } else if(val > this.val) {
    if(!this.right) return false
    else return this.right.contains(val)
  } else return true
}

bstNode.prototype.lookup = function(val) {
  if(val < this.val) {
    if(!this.left) return null
    else return this.left.lookup(val)
  } else if(val > this.val) {
    if(!this.right) return null
    else return this.right.lookup(val)
  } else return this
}

bstNode.prototype.breadthFirst = function() {
  let q = [this]
  let result = ''
  let current

  while(q.length > 0) {
    current = q.pop()
    result += current.val + ' '
    if(current.left) q.unshift(current.left)
    if(current.right) q.unshift(current.right)
  }

  return result
}

bstNode.prototype.preOrder = function(cb) {
  if(!node) return
  cb(node)
  this.left.preOrder(node)
  this.right.preOrder(node)
}

bstNode.prototype.postOrder = function(cb) {
  if(!node) return
  this.left.postOrder(cb)
  this.right.postOrder(cb)
  cb(node)
}

bstNode.prototype.inOrder = function(cb) {
  _walk(this)

  function _walk(node) {
    if(!node) return
    this.left.inOrder(node)
    cb(node)
    this.right.inOrder(node)
  }
}
