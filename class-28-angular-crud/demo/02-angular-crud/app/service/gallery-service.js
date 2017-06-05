'use strict'

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('Gallery Service')

    let service = {}
    service.galleries = []

    service.createGallery = (gallery) => {
      $log.debug('service.createGallery')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }

        return $http.post(`${__API_URL__}/api/gallery`, gallery, config)
      })
      .then(res => {
        $log.log('gallery created')
        let gallery = res.data
        service.galleries.unshift(gallery)
        return gallery
      })
      .catch(err => {
        $log.error(err.message)
        return $q.reject(err)
      })
    }

    service.fetchGalleries = () => {
      $log.debug('#service.fetchGalleries')
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.get(`${__API_URL__}/api/gallery`, config)
      })
      .then(res => {
        $log.log('galleries retrieved')
        service.galleries = res.data
        return res.data
      })
      .catch(err => {
        $log.error(err.message)
        $q.reject(err)
      })
    }

    return service
  }
]
