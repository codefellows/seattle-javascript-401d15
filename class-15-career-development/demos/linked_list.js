'use strict';

const Node = require('./node');

const LinkedList = module.exports = function(array) {
  this.head = null;
  // this.length = 0;

  if(array) array.forEach(val => this.insert(val));
}

// LinkedList.prototype.size = function() {
//   try {
//     if (this.length === 0) {
//       throw new RangeError('There are no nodes in the list.');
//     } else {
//       return this.length;
//     }
//   } catch (e) {
//     return e;
//   }
// };

LinkedList.prototype.insert = function(val) {
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else {
      this.head = new Node(val, this.head);
      // this.length += 1;
      return this;
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.remove = function(val) {
  let current;
  try {
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else if (this.search(val) === false){
      throw new ReferenceError('That node does not exist in the list.');
    } else {
      current = this.head;
      if (this.head.val === val) {
        this.head = current.next;
        current = null;
        // this.length -= 1;
        return this;
      } else {
        while (current.next) {
          if (current.next.val === val) {
            current.next = current.next.next;
            // this.length -= 1;
            return this;
          } else {
            current = current.next;
          }
        }
      }
    }
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.shift = function() {
  if(!this.head) throw new ReferenceError('The list is empty')
  try {
    let current = this.head;
    this.head = this.head.next;
    current.next = null
    // this.length -= 1;
    return current.val;
  } catch (e) {
    return e;
  }
};

LinkedList.prototype.search = function(val) {
  try {
    let current;
    if (typeof val === 'undefined') {
      throw new ReferenceError('Please enter a value for the node.');
    } else {
      current = this.head;
      while (current.next) {
        if (current.val === val) {
          return current.val;
        } else {
          current = current.next;
        }
      }
      return current.val === val ? current.val : false
      // if (current.val === val) {
      //   return current.val;
      // } else {
      //   return false;
      // }
    }
  } catch (e) {
    return e;
  }
};

// LinkedList.prototype.display = function() {
//   let nodes = [];
//   let current = this.head;
//   for (var i = this.length; i > 0; i--) {
//     nodes.push(current.val);
//     current = current.next;
//   }
//   return nodes.toString();
// };
