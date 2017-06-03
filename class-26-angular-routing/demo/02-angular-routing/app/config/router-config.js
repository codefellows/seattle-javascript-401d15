'use strict'

module.exports = [
  '$stateProvider',
  '$urlServiceProvider',
  function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.when('', '/home')
    let routes = [
      {
        name: 'home',
        url: '/home',
        template: require('../view/home/home.html'),
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      },
      {
        name: 'signup',
        url: '/signup',
        template: require('../view/signup/signup.html'),
        controller: 'SignupController',
        controllerAs: 'signupCtrl'
      }
    ]

    routes.forEach(route => $stateProvider.state(route))
  }]
