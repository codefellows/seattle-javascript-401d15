'use strict'

let BST = require('./bst')
let bst = new BST(4)
bst.insert(2)
bst.insert(5)
bst.insert(3)
bst.insert(100)

// console.log('bst', bst);
// console.log('lookup 100', bst.lookup(100));
// console.log('lookup 200', bst.lookup(200));
// console.log('contains 100', bst.contains(100));
// console.log('contains 200', bst.contains(200));
console.log('bft', bst.breadthFirst());
