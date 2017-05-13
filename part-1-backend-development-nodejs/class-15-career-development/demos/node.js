'use strict';

function Node(val, next, prev) {
  this.val = val;
  this.next = next || null;
  this.prev = prev || null;
}

module.exports = Node;
