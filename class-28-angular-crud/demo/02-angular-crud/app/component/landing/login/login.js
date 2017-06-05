'use strict'

// require('./_login.scss')

module.exports = {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', '$location', 'authService', function($log, $location, authService) {
    this.$onInit = () => {
      $log.debug('LoginController')

      this.login = function() {
        $log.log('loginCtrl.login()')

        authService.login(this.user)
        .then(() => $location.url('/home'))
      }
    }
  }
]}
