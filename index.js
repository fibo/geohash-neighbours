require('strict-mode')(() => {
  exports.neighboursOf = require('./src/neighboursOf')

  exports.eastOf = require('./src/eastOf')
  exports.northEastOf = require('./src/northEastOf')
  exports.northOf = require('./src/northOf')
  exports.northWestOf = require('./src/northWestOf')
  exports.westOf = require('./src/westOf')
  exports.southWestOf = require('./src/southWestOf')
  exports.southOf = require('./src/southOf')
  exports.southEastOf = require('./src/southEastOf')
})
