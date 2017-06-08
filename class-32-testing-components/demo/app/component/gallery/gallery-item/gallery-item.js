'use strict'

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {
      $log.debug('Gallery Item Controller')

      this.showEditGallery = false

      this.makeCurrentGallery = () => {
        $log.log('ran the thing!')
        $rootScope.$emit('updateCurrentGallery', this.gallery._id)
      }
    }
  }],
  bindings: {
    gallery: '<'
  }
}
