401JS -- Stacks and Queues
================================

## Abstract Data Type Resources
* Skim [ADT Wiki]

## Stacks and Queues Resources
* Watch [stacks and queues]
* Read [stack wiki]
* Skim [queue wiki]

# Learning Objectives
* The students will be able to implement a stack
* The students will be able to identify use cases for a stack
* The students will be able to implement a queue
* The students will be able to identify use cases for a queue

# Overview
#### Abstract Data Types (ADT)
In computer science, an abstract data type (ADT) is a mathematical model for data types where a data type is defined by its behavior (semantics) from the point of view of a user of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations. This contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user.

#### Stack
* Stacks are a first in first out data structure (FIFO)
* Stacks may have an optional `maxSize` property, which, when exceeded, instantiates a new Stack for overflow OR an overflow state  
* To add a value to the top of the stack a `push` method is used
* To retrieve and remove a value from the top of a stack a `pop` method is used
* Some stacks have a `peek` method that gets the value on top of the stack without removing it
* Stacks cannot access any values beneath the top value
* Each Node (also called Item or Value or Element) will have a property for a Value and one for a pointer to the previous Node
* Stacks are used for ...
 * Implementing history with undo
 * Memory management
 * Call stack management
* Implementation variants:
 * Linked List (You've not seen this data structure yet) (common)
 * Arrays (utilize the built-ins from Array.prototype...)

#### Queue
* Queues are a first in last out data structure (FILO)
* to add a value to the end of the queue a `enqueue` method is used
* to retrieve and remove a value from the beginning of the queue a `dequeue` method is used
* A Queue will keep track of the `head` and `tail` Nodes but does not need to explicitly track Nodes within the collection
* A Queue does not have a specific capacity
 * Exception: a 'Bounded Queue', which is limited to a fixed number of Nodes
* Queues are used for ...
 * Event listeners
 * Request Responders
 * Ensuring code runs in a specific order
* Implementation variants:
 * Doubly Linked List (common)
 * Linked List
 * Dequeue (Double ended queue)

# Whiteboard Exercise (Groups of 2)
* implement `pop()` and `peek()` methods on the Stack Data Structure
* implement a function to determine if a string has matching brackets "{}[]()" "[()]{}"
 * the string can have characters that are not brackets
 * this method should be a pure function, returning a new Stack

[stacks and queues]: https://www.youtube.com/watch?v=wjI1WNcIntg
[stack wiki]: https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
[queue wiki]: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[ADT Wiki]: https://en.wikipedia.org/wiki/Abstract_data_type
