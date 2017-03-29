![cf](http://i.imgur.com/7v5ASc8.png) 11: Single Resource Express API
=====================================

## Express
  * **Overview**
    * `express.js` is a web application framework that provides us with a series of tools that are used to simplify the development process
    * it is excellent at handling much of the heavy lifting that a modern REST API requires
    * it also provides us with useful helpers to manage requests, routes, and even views
    * in addition to managing requests and routes, it provides us with the ability to create our own middleware components
      * middleware provides us with access to the `req` and `res` objects
      * middleware also provides us with the ability to access the `next` middleware function in the `req` and `res` cycle

  * **Route Methods**
    * `express.js` provides us with simple to use route methods and parameters
    * example route methods and usage:
    ```javascript
      const express = require('express');
      const app = express();

      // get notes from the /api/note endpoint
      app.get('/api/note', function(req, res, next) { ... });

      // get a specific note from the /api/note/:id endpoint
      app.get('/api/note/:id', function(req, res, next) { ... });

      // post a new note to the /api/note endpoint
      app.post('/api/note', function(req, res, next) { ... });
    ```

## **Useful Commands**
  * **Commands**
    * `npm run start` - this maps back to the `scripts.start` section of a `package.json` file
      * in our application, this is used to debug modules and start the server
      * in our application, the command for this would normally be: `DEBUG='note*' node server.js`
    * `nodemon server.js` - this will run the `nodemon` application, which is used to monitor our application for changes and restart the server if a change is made
