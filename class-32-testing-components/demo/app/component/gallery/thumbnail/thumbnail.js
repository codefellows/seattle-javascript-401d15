'use strict'

// require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<'
  },
  controller: [
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('thumbnailCtrl')

        this.deletePic = () => {
          $log.debug('#thumbnailCtrl.deletePic')

          picService.deletePic(this.gallery, this.pic)
        }
      }
    }
  ]
}
