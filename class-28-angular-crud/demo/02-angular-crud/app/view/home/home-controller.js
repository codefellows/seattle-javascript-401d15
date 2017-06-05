'use strict'

// require('./_home.scss')

module.exports = [
  '$log',
  '$rootScope',
  'galleryService',
  function($log, $rootScope, galleryService) {
  this.$onInit = () => {
    $log.debug('HomeController()')
    this.galleries = []

    this.fetchGalleries = () => {
      return galleryService.fetchGalleries()
      .then(galleries => this.galleries = galleries)
      .catch(err => $log.error(err))
    }

    $rootScope.$on('locationChangeSuccess', this.fetchGalleries)
    this.fetchGalleries()
  }
}]
