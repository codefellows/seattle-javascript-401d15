'use strict'

module.exports = [
  '$q',
  '$log',
  '$http',
  'Upload',
  'authService',
  function($q, $log, $http, Upload, authService) {
    $log.debug('picService')

    $log.log(Upload)
    let service = {}

    service.uploadPic = (galleryData, picData) => {
      $log.debug('#picService.uploadPic')

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`
        let headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }

        return Upload.upload({
          url,
          headers,
          method: 'POST',
          data: {
            name: picData.name,
            desc: picData.desc,
            file: picData.file
          }
        })
      })
      .then(res => {
        galleryData.pics.push(res.data)
        return res.data
      })
      .catch($q.reject)
    }

    service.deletePic = (galleryData, pic) => {
      $log.debug('#picService.deletePic')

      return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic/${pic._id}`
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        }
        return $http.delete(url, config)
      })
      .then(
        res => {
          $log.log('delete successful')
          for(let i = 0; i < galleryData.pics.length; i++) {
            let curr = galleryData.pics[i];

            if(curr._id === pic._id) {
              galleryData.pics.splice(i, 1);
              break;
            }
          }
        },
        err => {
          $log.error(err.message)
          $q.reject(err)
        }
      )
      .catch($q.reject)
    }

    return service
  }
]
