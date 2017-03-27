401JS -- Linked Lists
================================

## Abstract Data Type Resources
* Skim [ADT Wiki]

## Linked List Resources
* Watch [linked lists]
* Skim [linked list wiki]

# Learning Objectives
* The students will be able to implement a linked list
* The students will be able to implement a doubly linked list
* The students will be able to identify use cases for linked lists

# Overview
#### Singly Linked List
* There are no FILO/FIFO-style constraints on Lists.
* Singly linked lists contain nodes which have a data field as well as a 'next' field, which points to the next node in line of nodes.
* Operations that can be performed on singly linked lists include:
  * Insertion (Beginning, End, AfterNode(x), BeforeNode(x))
  * Deletion (Beginning, End, SpecificNode(x))
  * Traversal (Done from the head of the list)
* Singly Linked Lists can store both the Head and Tail pointers, though not a common implementation.

#### Doubly Linked List
* There are no FILO/FIFO-style constraints on Lists.
* Doubly linked lists contain nodes which have a data field as well as a 'next' AND 'prev' field, which points to the next and previous nodes in line of nodes.
* Operations that can be performed on singly linked lists include:
  * Insertion (Beginning, End, AfterNode(x), BeforeNode(x))
  * Deletion (Beginning, End, SpecificNode(x))
  * Traversal (Done from the head or the tail of the list)
* Doubly Linked Lists commonly store both the Head and Tail pointers.

#### Whiteboard Exercise (Group of 3)
* implement `reverse()` as a pure method
* (stretch) find the nth node from the end of the list (offsets)
* (stretch) find the middle of the list


[linked lists]: https://www.youtube.com/watch?v=njTh_OwMljA
[linked list wiki]: https://en.wikipedia.org/wiki/Linked_list
[ADT Wiki]: https://en.wikipedia.org/wiki/Abstract_data_type
