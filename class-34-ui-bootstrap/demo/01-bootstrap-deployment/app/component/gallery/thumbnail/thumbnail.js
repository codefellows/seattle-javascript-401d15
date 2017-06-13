'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  },
  controller: ['$q', '$log', 'picService', 'galleryService', function($q, $log, picService, galleryService) {
    this.$onInit = () => {
      $log.debug('ThumbnailController')

      this.deletePic = function() {
        $log.debug('thumbnailCtrl.deletePic')
        return picService.deletePic(this.gallery, this.pic)
        .then(
          galleryService.fetchGalleries,
          err => $log.error(err)
        )
        .catch($q.reject)
      }
    }
  }]
}
