'use strict';

// npm deps
const path = require('path');
// load angular
const angular = require('angular');
// load angular module depenencies
require('@uirouter/angularjs');

// create out angular module and inject dependeces
const demoApp = angular.module('demoApp', ['ui.router']);

demoApp.config([
  '$stateProvider', 
  '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/');

    let routes = [
      {
        name: 'landing',
        url: '/',
        template: '<landing-view></landing-view>',
      },
      {
        name: 'home',
        url: '/home',
        template: '<home-view></home-view>',
      },
    ];

    routes.forEach($stateProvider.state)
  }
])

// load services
let context = require.context('./service', true, /\.js$/)
context.keys().forEach(key => {
  console.log('service file', key)
  let serviceName = path.basename(key, '.js');
  demoApp.service(serviceName, context(key))
});

// load filters
// load views
context = require.context('./view', true, /\.js$/)
context.keys().forEach(key => {
  console.log('view file', key)
  let viewName = path.basename(key, '.js');
  demoApp.component(viewName, context(key))
});

// load components
context = require.context('./component', true, /\.js$/)
context.keys().forEach(key => {
  console.log('componentfile', key)
  let componentName = path.basename(key, '.js');
  demoApp.component(componentName, context(key))
});








