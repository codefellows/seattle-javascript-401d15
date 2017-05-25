![cf](http://i.imgur.com/7v5ASc8.png) 24: ng-Adventure
=====================================

## Daily Plan
* Notes:
  * Reminder: Monday is a holiday.
  
* Whiteboard Challenge
* Review testing - what did you learn yesterday?
* Review directives
* Angular Services & components

## Resources
* Read: [practical guide to angular directives]
* Skim: [mastering angular directives]
* Read: [Angular factory vs service vs provider]


## Directives
  * **Overview**
    * directives are a special form of markup that provide us with the ability to add special behavior to elements or attributes
    * directives come in the form of tag names (`<sidebar-nav></sidebar-nav>`), attribute properties (`<li ng-repeat="item in items"></li>`) and class names (`<span class="msg: success;"></span>`)
    * angular allows us to create our own directives and use a series of handy ones that are provided by the framework

  * **General Purpose Directives**
    * `ng-app` - binds an angular modules `$rootScope` to an element on the DOM
    * `ng-controller` - binds a controller and it's `$scope` to an element on the DOM
    * `ng-model` - binds the value of user input to a property on the `$scope`
    * `ng-init` - used to run an expression when the template is loaded
    * `ng-href` - same as an `href` but supports angulars template expressions
    * `ng-src` - same as a `src` but supports angulars template expression
    * `ng-cloak` - used to prevent angular from showing uncompiled templates during page load
    * `ng-repeat` - used to iterate over an array on the `$scope`

  * **Toggling Directives**
    * `ng-show` - used to toggle `display: block;` on a DOM element based on a condition
    * `ng-hide` - used to toggle `display: none;` on a DOM element based on a condition
    * `ng-if` - used to add or remove an element based on a condition
    * `ng-class` - used to add or remove class names based on a condition

  * **Event Directives**
    * `ng-click` - used to trigger an expression when a DOM element is clicked
    * `ng-submit` - used to trigger an expression wehn a `<form>`'s submit event has been fired

  * **Form Directives**
    * `<form>` - includes additional behavior such as dynamic validation and dynamic validation classes
    * `<input>` - includes additional behavior such as dynamic validation
    * `ng-required` - extra `required` validation on form submit
    * `ng-disabled` - disables a user input based on a condition

## Services
  * **Overview**
    * angular services are used to implement shared, often procedural, code
    * we use services to build libraries for handling things like state and AJAX requests
    * angular services can be injected into controllers and other services for added layers of modularity
    * we'll be using services in the `ngAdventure` application to manage our map and player procedural logic and state



[practical guide to angular directives]: http://www.sitepoint.com/practical-guide-angularjs-directives/
[mastering angular directives]: http://code.tutsplus.com/tutorials/mastering-angularjs-directives--cms-22511
[Angular factory vs service vs provider]: http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
