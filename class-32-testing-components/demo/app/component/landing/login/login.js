'use strict'

// require('./_login.scss')

module.exports = {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    function($log, $location, $window, authService) {
      this.$onInit = () => {
        $log.debug('LoginController')
        if(!$window.localStorage.token) {
          authService.getToken()
          .then(
            () => $location.url('/home'),
            () => $location.url('/signup')
          )
        }

        this.login = function() {
          $log.log('loginCtrl.login()')

          authService.login(this.user)
          .then(() => $location.url('/home'))
        }
      }
    }
  ]
}
