'use strict';

module.exports = ['$log', '$http', '$q', authService];

function authService($log, $http, $q){
  let service = {};

  service.signup = (user) => {
    let options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    return $http.post(`${__API_URL__}/api/auth/signup`, user, options)
    .then(res => {
      $log.log('signup', res);
      return res.data;
    })
  };

  service.login = (user) => {
    let encoded = btoa(`${user.username}:${user.password}`);
    let options = {
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Basic ${encoded}`,
      },
    }

    return $http.get(`${__API_URL__}/api/auth/login`, options)
    .then(res => {
      $log.log('login', res);
      return res.data;
    });
  }

  return service;
}






