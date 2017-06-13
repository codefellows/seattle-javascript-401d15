'use strict'

module.exports = [
  '$q',
  '$log',
  '$http',
  '$rootScope',
  'authService',
  function($q, $log, $http, $rootScope, authService) {
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
      .then(
        res => {
          $log.log('gallery created')
          let gallery = res.data
          service.galleries.push(gallery)
          return gallery
        },
        err => {
          $log.error(err.message)
          return $q.reject(err)
        }
      )
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
      .then(
        res => {
          $log.log('galleries retrieved')
          service.galleries = res.data
          return service.galleries
        },
        err => {
          $log.error(err.message)
          $q.reject(err)
        }
      )
    }

    service.updateGallery = (galleryId, galleryData) => {
      $log.debug('galleryService.updateGallery()')

      return authService.getToken()
      .then( token => {
        let config = {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }

        return $http.put(`${__API_URL__}/api/gallery/${galleryId}`, galleryData, config)
      })
      .then(
        res => {
          service.galleries.filter((ele, idx) => {
            if(ele._id === gallerId) service.galleries[idx] = res.data
          })
          return res.data
        },
        err => {
          $log.error(err.message)
          return $q.reject(err)
        }
      )
    }

    service.deleteGallery = (galleryId) => {
      $log.debug('galleryService.deleteGallery')

      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
        return $http.delete(`${__API_URL__}/api/gallery/${galleryId}`, config)
      })
      .then(
        res => {
          $log.log('delete successfull')
          let idx
          service.galleries.forEach((ele, i) => {
            if(ele._id === galleryId) idx = i
          })
          service.galleries.splice(idx, 1)
          $rootScope.$emit('refreshGalleries')
        },
        err => $log.error(err)
      )
    }

    return service
  }
]
