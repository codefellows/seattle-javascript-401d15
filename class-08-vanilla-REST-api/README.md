![cf](http://i.imgur.com/7v5ASc8.png) 08: Vanilla REST API
=====================================

## Promises
  * **Overview**
    * promises are used to solve the problem of nested callbacks (aka: "callback hell")
    * they provide us with a way to make asynchronous code easier to read and follow
    * a promise represents a value which can be available now, in the future, or never
    * basic usage: `new Promise(function(resolve, reject) { ... });`
    * one of the biggest benefits of promises is through the use of the `then()` and `catch()` methods
      * these methods are used to handle returned promises and can be chained as they are on the `Promise` prototype

  * **States**
    * **pending** - initial state - not fulfilled or rejected
    * **fulfilled** - the operation completed successfully
    * **rejected** - the operation failed

  * **Methods**
    * `Promise.all()` - returns a promise that fulfills when all of the promises in an provided array have fullfiled *or* returns a promise that rejects when one of the items in the array rejects
    * `Promise.reject()` - returns a `Promise` object that is rejected
    * `Promise.resolve()` - returns a `Promise` object that is resolved with a given value
    * `catch()` - returns a `Promise` that deals with rejected cases only
    * `then()` - returns a `Promise` that deals with fulfilled cases
    * **demo:** working with promises
      * [promise-demo](/08-vanilla_rest_api/demo/promise-demo.js)

## Vanilla REST API
  * **Overview**
    * we'll be creating a vanilla REST API, with a custom router, that uses custom built and native NodeJS modules (with the exception of `node-uuid`)
      * the router we will be creating will mimic the core functionality of the router supplied by `express.js`
    * in addition to the creation of our API, we'll be adding tests that check our API calls for the expected response data
      * this will be done through the use of `superagent` and ChaiJS (`expect`)
      * **remember:** include the server in your test file so that your server is running during the testing process
      * [superagent docs](https://visionmedia.github.io/superagent/)
    * **demo:** Vanilla REST API
      * [vanilla-rest-api](/08-vanilla_rest_api/demo/vanilla-rest-api)

  * **Helper Commands**
    * start the server: `node server.js`
    * quit the server (mac osx): `ctrl c`
    * get a note *(be sure to use your port number and note id)*:
      * `http localhost:8000/api/note?id=123456789` *or* `http localhost:8000/api/note id==123456789`
    * post a note *(be sure to use your port number)*:
      * `http POST localhost:8000/api/note name="name of the note" content="some content for the note"`
    * for more useful commands when using `httpie`, check out the docs: [httpie docs](https://httpie.org/doc)

  * **More ES6**
    * **`let`** - declares a block scope local variable (this limits it's usage to the block, statement, or expression in which it is used)
    * **arrow functions (aka fat arrow functions)** `() =>` offer a more concise syntax for writing function expressions and change the way that `this` binds in functions

## Vanilla REST API Visualization Map
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/vanilla-rest-api.png)
