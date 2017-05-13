![cf](http://i.imgur.com/7v5ASc8.png) 26: Client Side Routing
=====================================

## Client Side Routing
  * **Overview**
    * client side routing follows the same concepts as server side routing except that it is ran in the browser
    * `angular-ui-router` is a library for implementing single page application routing
      * this gives us access to a `$stateProvider` object to configure routes
      * we are also provided with a `$urlRouterProvider` to configure redirects
    * `angular-ui-router` uses hash routes to delimit what view a page should display
      * ex: `/#/route-name`

## Angular Module Injection
  * **Overview**
    * a module can be injected into another module in order to expose all of it's assets
    * this provides us with useful features from a module - `angular-ui-router` is a great example of this

  * **Angular Service Providers**
    * service providers are used to configure service's within a module
    * service providers can be injected into a module's config method
    * `$logProvider` is used to enable/disable `$log`'s logging
    * `$httpProvider` is usd to configure default behaviors for `$http`
