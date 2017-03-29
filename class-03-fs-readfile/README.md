![cf](http://i.imgur.com/7v5ASc8.png) 03: Parallel File Processing
=====================================

## JS Runtime Resources
* Watch [what the heck is the event loop anyway]

## fs Module Resources
* Read [fs module docs]

## Learning Objectives

## Overview
#### JS Runtime
In programing concurrency means that a program can run more than one thing at a time. The ability to do multiple things at a time can greatly increase the amount of things your program can do in a given moment in time. However, traditional means of handling concurrency are extremely complex, and often lead to bugs!

Javascript is a single threaded language. Which means that it can only do a single thing at a time. However, the javascript runtime is setup in such a way that your programs can still have some concurrent behavior, as long as the concurrent behavior is not implemented in javascript.
* Node Javascript/C++ APIs
 * the node C++ apis are written in such a way that they deal with all the complexities of concurrency for us!
   * this means things like we can read or write data from/to multiple files, or http requests at the same time :)
 * when a javascript function makes a call to node APIs it passes the node API a callback
   * the node api does it thing, then passes its results into the callback, and enqueues the callback onto the callback queue
* call stack
  * the call stack keeps track of each function that is currently running in javascript
  * each time a function gets invoked it gets pushed onto the call stack
  * each time a function returns it gets popped from the call stack
  * at any given point in time javascript is only running the function on top of the call stack
* event loop
  * the event loop constantly checks if the stack is empty
  * when the stack is empty it dequeues any functions on the callback queue and pushes them onto the stack
* callback queue
  * the callback queue holds completion handling functions from passed node APIs

#### Advanced JS & Asynchronous Programming in NodeJS
   * **Hoisting**
     * hoisting is JS default behavior of moving all declarations to the top of the current scope
     * only declarations are hoisted, not the initialization
       * declaring a variable is the actual creation of a variable, not the initialization
         * initialization refers to when a variable is assigned a value
     * hoisting example:
       ```
         adder(num1, num2);

         var num1 = 10;
         var num2 = 20;

         function adder(a, b) {
           return a + b;
         };
       ```
     * in the above example, we are still able to call our `adder` function as the function declaration has been hoisted to the top of the current scope
       * **note:** function declarations take precedence over variable declarations

   * **The Event Loop**
     * the NodeJS event loop operates under a single thread
       * it supports concurrency through the use of events and callbacks
     * NodeJS uses many threads "underneath the hood" (libuv)
       * we are programming at a higher abstraction - removing the need to deal with lower level threading
     * when NodeJS starts up, it processes the input script then begins processing the event loop
     * phases of the event loop:
       * **poll** - retrieve new I/O events
       * **check** - `setImmediate` callbacks are invoked
       * **close callbacks** - connections are closed (`socket.on('close', function(){...})`)
       * **timers** - scheduled callbacks are invoked
       * **I/O callbacks** - executes all callbacks (with the exception of close callbacks, callbacks scheduled by timers, and `setImmediate`)
       * **idle/prepare** - NodeJS sits in an idle state - only used internally

#### Node asynchronous callback pattern
* node functions that have asynchronous input or output take a callback as there last argument
* node functions that do not pass back data always have callback functions take the form `(err) => { }`
* node functions that do pass back data always have callback functions take the form `(err, data) => { }`

#### Working With Binary Data (Part 1)
  * **High Level Overview**
    * bits and bytes
      * a bit is the smallest unit of data in a computer
      * a bit contains a single binary value, 0 or 1
      * a byte is comprised of 8 bits
        * we often refer to a nibble as 4 bits (half of a byte)
    * endianness
      * refers to the order of bytes
      * little endian
        * bytes are written from left to right
      * big endian
        * bytes are written from right to left

  * **Working with Buffers**
    * buffers are an array of bytes
      * example:
        ```
          var buff = new Buffer('welcome to bufferville');
          console.log(buff);

          <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 62 75 66 66 65 72 76 69 6c 6c 65>
        ```
    * NodeJS [buffer documentation](https://nodejs.org/api/buffer.html#buffer_buffer)
    * common encoding types:
      * utf-8 (default)
        * `buff.toString()`
      * base64
        * `buff.toString('base64')`
      * hex
        * `buff.toString('hex')`

#### fs module
* the fs module is the node interface to the file system
* the fs module has synchronous and asynchronous methods
* if the method does not have sync in its name you can assume its synchronous
* in this class we will **NEVER** use the synchronous methods
* useful globals
  * `__dirname` - the absolute path to the directory the current file is in
  * `__filename` - the absolute path to the current file
* Create File
 * `fs.writeFile(filepath, data [, options], callback);`
 * the callback should take the form `(Error) => {}`

* Read File
  * `fs.readFile(filepath [, options], callback);`
  * the callback should take the form `(Error, Buffer) => {}`

* Delete File
  * `fs.unlink(filepath, callback);`
  * the callback should take the form `(Error) => {}`

* Other useful methods
  * `readdir` - reads the contents of a directory
  * `mkdir` - create a directory
  * `stat` - get information about a file/dir/link
  * `watch` - watch a file for changes

#### Asynchronous Testing with MochaJS
 * **Calling `done`**
   * MochaJS gives us 2 sec to call `done` before a timeout error occurs
     * be sure to call `done` in the appropriate location (usually, this in your internal logic)
     * calling `done` in the wrong block will likely cause a false positive test result

 * **demo:** testing file system I/O


<!--links -->
[what the heck is the event loop anyway]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[fs module docs]: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
