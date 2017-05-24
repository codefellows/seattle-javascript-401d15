'use strict';

TreeNode = module.exports = function(value){
  this.value = value;
  this.children = [];
};

TreeNode.prototype.appendChild = function(node){
  if(!(node instanceof TreeNode))
    throw new Error('node must be of type TreeNode');
  this.children.push(node);
}

TreeNode.prototype.prettyPrint = function(){
  let result = '';
  let queue = [this];
  let breadthFirstTraversal = () => {
    let next = queue.pop()
    if(!next) return // stop looping if the queue is empty
    result += next.value + ' '
    next.children.forEach(child => queue.unshift(child))
    breadthFirstTraversal()
  }
  breadthFirstTraversal();
  console.log(result);
  return result;
}

treeRoot = new TreeNode(3)

treeRoot

treeRoot.appendChild(new TreeNode(46))

treeRoot.children[0].appendChild(new TreeNode(7))

treeRoot.children.forEach(child => {
  child.appendChild(new TreeNode(Math.random()))
  child.appendChild(new TreeNode(Math.random()))
  child.appendChild(new TreeNode(Math.random()))
})

treeRoot.prettyPrint();

treeRoot

