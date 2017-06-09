![cf](http://i.imgur.com/7v5ASc8.png) lab 35 - Hash Table Data Structure
====

## Daily Plan
* Notes: Project week classroom space (1/2 day at most in a classroom)
* Hash Table Review
* Whiteboarding


## Whiteboarding
* Questions:
  * Explain how you would design a chat server. In particular, provide details about the various backend components and methods. What would be the hardest problems to solve?
  Explain the data structures and algorithms you would use to design an in-memory file system. Illustrate with an example in code where possible.
  * Implement Breadth First Traversal of a tree
  * Write a method to decide if two strings are anagrams
  * Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents
  * How would you test a pen? (yes, one that writes on paper)
  * Write a step by step execution of things that happen after a user presses a key on the keyboard. Use as much detail as possible.
  * Write a function that finds the first duplicate letter in a string (using a hash table)
  * Write a function that will return the max depth of a binary tree

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
