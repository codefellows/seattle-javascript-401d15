![cf](http://i.imgur.com/7v5ASc8.png) lab 35 - Hash Table Data Structure
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
  your lab directory must include  
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
* create a `HashTable` constructor
  * the buckets should be implemented as an array of DoubleLinkedLists
* implement the following prototype methods
* `.hash(key)` converts a string into a number that will index your buckets
* `.set(key, value) stores a value in the hashed keys bucket
* `.get(key) looks in the hashed keys bucket and returns the value of the node containing the key, or null if not found
* `.remove(key) removes the dll node node containing the key

## Bonus Points
* 2pts refactor you hash table to used BSTNodes for you buckets instead of Doubly Linked List

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 3pts
  * Completed FP methods: 2pts
  * Big-O notation: 2pts
