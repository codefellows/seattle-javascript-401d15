![cf](http://i.imgur.com/7v5ASc8.png) 27: Client Side Auth
=====================================

## Auth Service
  * **Overview**
    * using a service, we can create a library for client side authentication
    * this will rely on the `$http` service which will allow us to create AJAX requests
    * for `window` properties and methods, we can use the `$window` object - this gives us the ability test properties and methods that we assign to it
    * we'll be using a few common `$window` methods in our cfgram application build
      * `$window.locationStorage` - allows us to test saved tokens in our auth service
      * `$window.btoa` - let's us base 64 encode our username and password for basic authorization

## Webpack Constants
  * **Overview**
    * constants are configured in our `webpack.config.js` file and can be used throughout our application
    * they are useful for information that we should keep unexposed to the user, such as an secret key or staging/production logging

  * **Example**
  ``` javascript
  let plugins = [
    new ExtractTextPlugin('bundle.css'),
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new webpack.DefinePlugin({
      // __API_URL__ is a webpack constant that is used to point our client at the right API, depending on the environment
      __API_URL__: JSON.stringify(process.env.API_URL),
      // __DEBUG__ is a webpack constant that is used to turn off logging in production
      __DEBUG__: JSON.stringify(!production),
    }),
  ];
  ```
