![cf](http://i.imgur.com/7v5ASc8.png) 22: Angular Controllers
=====================================

## Resources
* Read: [controller-as or scope]
* Read: [controllers with or without sugar]
* Skim: [angular docs scope]
* Skim: [angular docs ngController]
* Skim: [tree data structure wiki]
* Optional: [understanding scope]

## Getting Started with Controllers
  * **Overview**
    * controllers are constructor functions that are used to modify the angular **scope**
    * when a controller is attached to the **DOM**, using the `ng-controller` directive, Angular will instantiate a new controller object
      * this will create a new **child scope** that is made available as a parameter to a controller's constructor
    * **note:** controllers are used to setup and add behavior to the `$scope` object
    * **note:** controllers should not be used for DOM manipulation or formatting of input and output

  * **`Controller as` Syntax**
    * the `Controller as` syntax can be used to allow the use of `this` instead of `$scope` within our controllers
      * this removes the need for us to inject `$scope` into our controller's constructor function
    * **controller example:**
    ``` javascript

    // using the dependency injection system, we can inject dependencies
    // into our controller for additional modularity and functionality

    // here, we are injecting $log for advanced logging capabilities
    sampleApp.controller('SampleController', ['$log', SampleController]);

    // create a new controller and pass in $log for use in our controller's methods
    function SampleController($log) { ... }
    ```

    * **markup example:**
    ``` html

    <!-- using the ng-contoller directive, we can tell
         our application to use the Controller as syntax -->
    <nav ng-controller="SampleController as sampleCtrl">
      <ul>
        <li ng-repeat="item in sampleCtrl.items">...</li>
      </ul>
    </nav>
    ```

[controller-as or scope]: http://codetunnel.io/angularjs-controller-as-or-scope/
[controllers with or without sugar]: https://johnpapa.net/do-you-like-your-angular-controllers-with-or-without-sugar/
[angular docs scope]: https://docs.angularjs.org/guide/scope
[angular docs ngController]: https://docs.angularjs.org/api/ng/directive/ngController
[understanding scope]: https://github.com/angular/angular.js/wiki/Understanding-Scopes
[tree data structure wiki]: https://en.wikipedia.org/wiki/Tree_(data_structure)
