![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Struture
====

## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies
  * **lib/** -- directory for holding your programs helper modules
  * **test/** -- directory for holding your programs unit and integration tests

#### Testing  
  * write at least three test assertions for each constructor method
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation  
  * in your README, write documentation for you data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

#### Feature Tasks  
* implement a TreeNode constructor
  * implement the TreeNode's children using your SinglyLinkedList constructor
* implement the following prototype methods
  * `appendChild(node)` append an instance of a TreeNode to the list
  * `removeChild(node)` should take a reference to node as an argument and remove any child that is a reference to that node and  should return a boolean success value
  * `find(value)` should iterate over all child nodes using a breadth first traversal and return the first node that has that value, it should return null if a node with the value is not found
  * `toString()` should iterate over all child nodes using a depth first traversal and concatenate their values separated by newlines in to a string

## Bonus Points:
  * 2pts
  * implement a `.map(cb)` that clones the tree and uses the callback to alter each value
  * implement a `.copy()` that uses map to clone the tree with no modification

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Completed FP methods: 2pts
  * Big-O notation: 2pts
