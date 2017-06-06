'use strict'

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    $log.debug('Gallery Item Controller')

    this.showEditGallery = false

  }],
  bindings: {
    gallery: '<'
  }
}
