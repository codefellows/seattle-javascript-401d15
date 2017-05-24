'use strict';

require('angular');
require('angular-mocks');

describe('testing IpsumController', function(){
  beforeEach(() => {
    angular.mock.module('ipsumApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.ipsumCtrl = new $controller('IpsumController');
      this.ipsumCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  })

  it('inital state should be correct', () => {
    expect(this.ipsumCtrl.selected).toEqual('hacker');
    expect(this.ipsumCtrl.content).toEqual('');
  })

  it('handleSubmit should gen ipsum', () => {
    expect(this.ipsumCtrl.content).toEqual('');
    this.ipsumCtrl.handleSubmit();
    expect(this.ipsumCtrl.content.length).toBeGreaterThan(0);
  })



});
