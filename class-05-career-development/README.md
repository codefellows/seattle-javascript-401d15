401 JS - List Data Structure and Big O w/ Functional Programming
===============================================

# Big O Resources
* Read [simple Wiki Big O]
* Watch [hacker Rank Big O video]
* Look at [Big O Cheat Sheet]

# Functional programming resources
* Watch [funfunfunction functional programming video series]
* Read [what is functional programming]
* Skim [functional programming jargon]
* After 401 [functional-Light JS Book]

# Learning Objectives
* students will be able to determine and describe the runtime complexity of an algorithm
* students will understand the difference between a constructor function and a factory function
* students will be able to identify and explain the qualities of imperative and functional code
* students will be able to determine whether or not a function is pure
* students will be able to implement a functional array-like list with map, filter, reduce, and forEach methods

# Overview
## Big O
* big-o is a way of describing the speed and memory usage of an algorithm.
* because algorithms can run faster or slower given a specific input, we only use big-o to describe the worst case.
* the letter "n" is used to describe the number of items/calculations an algorithm is operating on
* if an algorithm only makes single statements in the worst case, it is said that the algorithm runs with an "O(1)" runtime.
 * "O(1)" runtime is also called constant time
* if an algorithm runs through every item, it is said that the algorithm runs with an "O(n)" runtime.
 * "O(n)" runtime is also called linear time
* if an algorithm runs through a list of "n" items "n" times it is said that the algorithm runs with an "O(n^2)" runtime.
 * "O(n^2)" runtime is also called quadratic time
* if an algorithm recursively cuts its iteration in half from "n" until 1, it is said that the algorithm runs with an "O(log(n))" runtime


## Functional Programing
* In order to understand functional programing you must understand what a side-effect is.
 * A side effect is when a function alters state defined outside its scope.  
* A program with no side effects at all is not very useful
 * No side effects means no input or output from or to devices and the user

* Because a program with no-side effects is not useful, functional programers try two write their code as functional as possible
 * They do this by creating as few functions with side effects as possible
 * They also have design patterns for wrapping functions with side effects so they act like pure functions
* Functional programmers use a powerful technique called function composition that allows them to create functions out of function combinations
* Pros of functional programming
 * Easy to test
 * When done correctly it's more readable
 * By isolating the the code with the most potential for bugs (code with side effects) to as few places as possible, you reduce the time it takes to track down bugs
 * Encourages modularization
* Cons of functional programming
 * Looks more complex at first
 * Functions may have more arguments

### Imperative vs Functional example
#### Imperative alphabetical sort
Imperative code is hard to read because you have to figure out what is happening on each line. Loops are generally very hard to read.

#### Functional alphabetical sort
* Even though the following may seem complicated at first, it should be more readable at a glance than the imperative code above, which does the same thing.
* sortAlphabetically is an example of function composition. sortAlphabetically is created by composing slice, sort, and a callback to sort.
* One important thing to note is that the .sort() method on arrays will mutate the array, which is a side effect. because of this sortAlphabetically uses the .slice() method to create a copy of the original list before it runs sort(). This makes sortAlphabetically a pure function.


# Factory function
A factory function is a pure function that acts like a constructor but without the new keyword.


# Whiteboard Exercise (Groups of 4)
* Implement `forEach()` as a method of your List Data Structure
* Implement `filter()` as a method of your List Data Structure


[simple Wiki Big O]: https://simple.wikipedia.org/wiki/Big_O_notation
[hacker Rank Big O video]: https://www.youtube.com/watch?v=v4cd1O4zkGw
[funfunfunction functional programming video series]: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
[functional programming jagron]: https://github.com/hemanth/functional-programming-jargon#functional-programming-jargon
[what is functional programming]: http://blog.jenkster.com/2015/12/what-is-functional-programming.html
[functional-Light JS Book]: https://github.com/getify/Functional-Light-JS
[Big O Cheat Sheet]: http://bigocheatsheet.com/
