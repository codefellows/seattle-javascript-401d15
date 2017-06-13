
'use strict'

module.exports = {
  template: require('./edit-gallery.html'),
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  },
  controller: ['$log', 'galleryService',
    function($log, galleryService) {
      this.$onInit = () => {
        $log.debug('EditGalleryController')

        this.updateGallery = function() {
          galleryService.updateGallery(this.gallery._id, this.gallery)
        }
      }
    }
  ]
}
