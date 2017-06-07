'use strict'

module.exports = ['$logProvider', function($logProvider) {
  $logProvider.debugEnabled(__DEBUG__)
}]
