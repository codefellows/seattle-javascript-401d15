![cf](http://i.imgur.com/7v5ASc8.png) 32: Testing Components
=====================================

## Unit Testing & Angular Mocks
  * **Overview**
    * we'll be using the `angular-mocks` npm module to allow for unit testing of our controllers, components, and services
    * unit testing refers to the testing of individual units of code
    * front end unit testing differs from how are backend was tested as we need to think about how we structured our logic, manipulated data, and created interactions for the user on the interface layer
    * in order to to inject dependencies into our tests, `angular-mocks` has provided us with an `inject` method that accepts a function with the dependencies as the parameters
    * we'll be using `$httpBackend` to mock requests

  * **Helper:** General Test Setup Guidelines
      * setup mocks
      * make the request
      * flush the server
