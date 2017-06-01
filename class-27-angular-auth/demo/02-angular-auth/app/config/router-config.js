'use strict'

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig]

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home')
  $urlRouterProvider.when('/', '/join#signup')
  $urlRouterProvider.when('/signup', '/join#signup')
  $urlRouterProvider.when('/login', '/join#login')

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    }
  ]

  routes.forEach($stateProvider.state)
}
