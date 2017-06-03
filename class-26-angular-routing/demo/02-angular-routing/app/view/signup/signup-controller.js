'use strict'

module.exports = ['$log', function($log) {
  this.$onInit = () => {
    $log.debug('SignupController')
    this.title = 'Welcome to the Signup Page'
  }
}]
