'use strict'

require('./_gallery-item.scss')

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: { gallery: '<' },
  controller: [
    '$log',
    '$rootScope',
    'galleryService',
    function($log, $rootScope, galleryService) {
      this.$onInit = () => {
        $log.debug('Gallery Item Controller')
        this.showEditGallery = false
        this.daysSince = new Date() - new Date(this.gallery.created)
        this.cost = 123.567

        

        console.log(this.gallery);

        this.deleteGallery = () => {
          return galleryService.deleteGallery(this.gallery._id)
        }
      }
    }
  ]
}
