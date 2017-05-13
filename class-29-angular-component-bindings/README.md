![cf](http://i.imgur.com/7v5ASc8.png) 29: Component Bindings
=====================================

## Component Bindings
  * **Overview**
    * component bindings allow us to pass state into a component at initialization
    * bindings create properties on the `$scope` of the component's controller
    * the `$scope` of a components controller is bound to the context of the controller function
      * in short, this means that we can access binding properties within the controller by using the standard `this.propertyName` construct

  * **Types of Component Bindings**
    * `@` - used to pass a literal value into a component's state
    * `=` - used to pass a 2 way data binding reference to an object into a component's state
    * `<` - used to pass a one way data binding reference to an object into a component's state
    * `&` - used to pass a callback function into a component's state

  * **Example**
  ``` javascript

  // imageItem component declaration
  myApp.component('imageItem', {
    template: require('./image-item.html'),
    controllerAs: 'imageItemCtrl',
    bindings: {
      image: '<', // creates a one way data bound reference called "image" on the controller's context
    },
    controller: ['$log', 'heartService', function($log){
      this.heartImage = function(){
        heartService.heartImage(this.image)
        .then(() => this.image.totalHearts++)
        .catch(err => $log.error(err.message));
      };
    }],
  });
  ```
  ``` html

  <!-- using the component "image-item"                          -->
  <!--                                                           -->
  <!--  homeCtrl.image = {                                       -->
  <!--    name: 'cool beach photo',                              -->
  <!--    imageURL: /images/beach.png',                          -->
  <!--    totalHearts: 31,                                       -->
  <!--  }                                                        -->
  <!--                                                           -->

  <ul>
    <image-item image="homeCtrl.image"> </image-item>
  </ul>
  ```
  ``` html

  <!-- compiled markup-->
  <ul>
    <image-item>
      <li class="image-item">
        <h3>cool beach photo</h3>

        <div>
          <img src="/images/beach.png" alt="cool beach photo">
          <span>31</span>
        </div>

        <button ng-click="imageItemCtrl.heartImage()">3</button>
      </li>
    </image-item>
  </ul>
  ```
