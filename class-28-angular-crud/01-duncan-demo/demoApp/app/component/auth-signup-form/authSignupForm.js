'use strict';

module.exports = {
  template: require('./auth-signup-form.html'),
  controllerAs: 'authSignupFormCtrl',
  controller: ['$log', '$location', 'authService', AuthSignupFormController],
};

function AuthSignupFormController($log, $location, authService){
  this.$onInit = () => {
    this.user = {
      username: '',
      password: '',
      email: '',
    }

    this.handleSubmit = () => {
      console.log('this.user', this.user);
      return authService.signup(this.user)
      .then(token => {
        $log.log('token', token);
        // $location.path('/home')
      })
      .catch($log.error)
    }
  }
}
