'use strict'

require('angular')
.module('ngAdventure')
.factory('playerService', ['$q', '$log', 'mapService', function($q, $log, mapService) {
  $log.debug('Player Service')

  let service = {}
  let turn = 0
  let player = service.player = {
    name: 'Thomas',
    location: 'cabin',
    hp: 2
  }

  let history = service.history = [
    {
      turn,
      desc: 'welcome to ngAdventure',
      location: 'cabin',
      hp: player.hp
    }
  ]

  service.movePlayer = function(direction) {
    return new $q((resolve, reject) => {
      turn++

      let current = player.location
      let newLocation = mapService.mapData[current][direction]

      if(!newLocation) {
        history.unshift({
          turn,
          desc: 'you have run into a wall',
          location: player.location,
          hp: --player.hp
        })
        return reject('no room in that direction')
      }

      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        hp: ++player.hp
      })

      player.location = newLocation
      return resolve(player.location)
    })
  }

  return service
}])
