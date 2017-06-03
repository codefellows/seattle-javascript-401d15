![cf](http://i.imgur.com/7v5ASc8.png) lab 30 - Binary Search Tree Data Structures
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
* implement a `BSTNode` constructor, including all of the methods we've covered in lecture
* implement the following static methods
  * `BSTNode.fromArray()` should create BST from items in an array
    * Ensure that your bst is validating unique values, and disallowing duplicates
* implement the following prototype methods
  * `node.min()` should return the min value in the bst
  * `node.max()` should return the min value in the bst
  * `node.maxDepth()` should return the total depth in the bst

## Bonus Points:
  * 2pts
  * write a `node.balance()` that will balance the tree

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 5pts
  * Big-O notation: 2pts
