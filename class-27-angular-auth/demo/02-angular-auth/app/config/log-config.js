'use strict';

module.exports = ['$logProvider', logConfig];

function logConfig($logProvider) {
  $logProvider.debugEnabled(__DEBUG__);
};
