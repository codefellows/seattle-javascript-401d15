'use strict'

require('./_login.scss')

module.exports = {
  template: require('./login.html'),
  controller: ['$log', '$location', 'authService', LoginController],
  controllerAs: 'loginCtrl'
}

function LoginController($log, $location, authService) {
  $log.debug('LoginController')

  authService.getToken().then(() => $location.url('/home'))

  this.login = function() {
    $log.log('loginCtrl.login()')

    authService.login(this.user).then(() => $location.url('/home'))
  }
}
