'use strict';

require('angular');
require('angular-mocks');

describe('testing authSignupForm', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($rootScope, $componentController, $httpBackend) => {
      this.$rootScope = $rootScope;

      this.$httpBackend = $httpBackend;
      this.authSignupFormCtrl = $componentController('authSignupForm');
      this.authSignupFormCtrl.$onInit();
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  afterEach(() => this.$rootScope.$apply());


  it('should send user data to the server', () => {
    //first define what we expext the client to send
    let expectUrl = 'http://localhost:3000/api/auth/signup';
    let expectBody = {
      username: 'coolbeans',
      email: 'slay@it.lit',
      password: 'password',
    }
    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    //make the request
    this.authSignupFormCtrl.user = {
      username: 'coolbeans',
      email: 'slay@it.lit',
      password: 'password',
    };

    this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
    .respond(200, 'exampletoken1234');

    console.log('authSignupFormCtrl', this.authSignupFormCtrl.handleSubmit);
    this.authSignupFormCtrl.handleSubmit()

    //flush backend 
    this.$httpBackend.flush();
    //test the ctrl state if need be
  });

});












