'use strict'

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service')

  let service = {}

  service.mapData = {
    cabin: {
      desc: 'message from cabin',
      south: 'trail'
    },
    trail: {
      desc: 'message from trail',
      north: 'cabin',
      east: 'gate',
      south: 'pit'
    },
    pit: {
      desc: 'welcome to the pit',
      north: 'trail'
    },
    gate: {
      desc: 'message from the gate',
      west: 'trail',
      east: 'castle'
    },
    castle: {
      desc: 'message from the castle',
      west: 'gate',
      south: 'corridor'
    },
    corridor: {
      desc: 'welcome to the cor',
      north: 'castle',
      east: 'snackroom'
    },
    snackroom: {
      desc: 'welcome to the snackroom',
      west: 'corridor'
    }
  }
  return service
}])
