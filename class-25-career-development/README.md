![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Structure
====

## Daily Plan
* Notes:
* DS Challenge: Implement PrettyPrint()
* Review Tree Data Structure (Scott's implementation)
  * Tree, Node, Methods: preOrder, add, prune
* Whiteboarding challenges
  * Groups of 2 (interviewer / interviewee): 30 minute hard cap for each person, for each challenge
    * Use the Whiteboarding rubric to grade each other
  * Questions:
    * Implement remove method that accepts a val to identify a node
      * remove that node from the tree, while reassigning it's children, if any, to the parent node
    * Implement a method that returns the parent node with the most number of children in the tree
      * return value should look like:
      ```javascript
        {
          highCount: 1,
          highNode: Node { val: 1, children: [ [Object] ] }
        }
      ```

    **Stretch**
    * Implement a method to count the number of nodes in the tree
    * Implement a method to count the number of edges in the three
* Lab Review
