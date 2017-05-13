'use strict'

const EE = require('events').EventEmitter
const ee = new EE()

ee.on('someevent', function() {
  console.log('I ran inside some event!!')
})

ee.emit('someevent')
