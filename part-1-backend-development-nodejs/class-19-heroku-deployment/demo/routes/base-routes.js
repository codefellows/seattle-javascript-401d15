'use strict'

module.exports = function(router) {
  router.get('/*', (req, res) => {
    res.status(404).send('You gone done a jooked it up now...')
  })
  return router
}
