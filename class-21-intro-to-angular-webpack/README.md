![cf](http://i.imgur.com/7v5ASc8.png) 21: Introduction to Angular & Webpack
=====================================

## Single Page Applications (SPAs)
  * **Overview**
    * single page applications (SPAs) are web applications that load a single HTML page who's surrounding content and functionality are often dynamically generated as the user interacts with the application
    * SPAs generally include the following layers:
      * routing
      * templating
      * DOM manipulation
      * AJAX
      * clearly defined client vs server architecture
    * examples of a few common SPA frameworks that adopt modern SPA principles:
      * **Angular.js** - www.angularjs.org
      * **React** - facebook.github.io/react/
      * **Ember.js** - www.emberjs.com

## Intro to Angular.js
  * **Overview**
    * **Angular.js** is a JS based front-end web application framework
    * it is built on top of the idea that declarative programming should be used to create UIs and connect functional components
      * imperative programming should be left to defining an application's buisness logic
    * **Angular.js** has a few key design constructs that should be considered when constructing your application
      * decouple DOM manipulation from application logic
      * decouple the client side from the server side
      * provide structure for the full application development life-cycle

  * **CRUD Application**
    * **Angular.js** is excellent at handling most common **CRUD** applications
    * CRUD applications refer to apps that require the use of "create, read, update, and delete" functionality
    * on the backend, we'll be using CRUD operations to interact with the resources in our database
    * on the front-end, we'll use CRUD operations to interact with components in the DOM
      * this provides users with an interface to communicate with the backend

  * **Data Binding**
    * **Angular.js** provides us with out-of-the-box, simple to use, **2 way** data binding that allows for quick, dynamic, transfer of data from the frontend to the backend
    * **Angular.js** uses a `$rootScope` object that will re-render templates on the DOM when values have changed
    * **Angular.js** provides us with an `ng-model` directive that allows you to dynamically set the state of a property on the `$rootScope` - this is automatically handled when applied to an `input` tag
    * when using an `input` tag that controls the state, you can view the effect of template rendering in real time

## Intro to Webpack
  * **Overview**
    * **webpack.js** is a **module bundler**
    * it is used to handle modules with dependencies and, in turn, will generate static assets representing those modules
    * **webpack.js** has a few key benefits - it allows us to:
      * split an application's dependency tree into "chunks" that can be loaded on demand
      * keep our application performant by promoting shorter load times
      * easily convert static assets into associated modules
      * customize the bundler to conform to our applications needs

  * **Sample `.webpack.config.js`**
    ``` javascript

    'use strict';

    const HTMLPlugin = require('html-webpack-plugin')

    module.exports = {
      entry: `${__dirname}/app/entry.js`,
      output: {
        filename: 'bundle.js',
        path: `${__dirname}/build`
      },
      plugins: [
        new HTMLPlugin({
          template: `${__dirname}/app/index.html`
        })
      ],
      module: {
        loaders: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
    }


    ```
