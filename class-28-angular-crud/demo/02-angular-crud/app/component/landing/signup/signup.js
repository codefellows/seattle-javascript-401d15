'use strict'

// require('./_signup.scss')

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: ['$log', '$location', 'authService', function($log, $location, authService) {
    this.$onInit = () => {
      $log.debug('SignupController')

      this.title = 'Welcome to the signup page!'

      this.signup = function(user) {
        $log.debug('signupCtrl.signup()')

        authService.signup(user)
        .then(() => $location.url('/home'))
      }
    }
  }
]}
