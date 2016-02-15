require('strict-mode')(() => {
  exports.neighboursOf = require('./src/neighboursOf')

  exports.eastOf = require('./src/eastOf')
  exports.northeastOf = require('./src/northeastOf')
  exports.northOf = require('./src/northOf')
  exports.northwestOf = require('./src/northwestOf')
  exports.westOf = require('./src/westOf')
  exports.southwestOf = require('./src/southwestOf')
  exports.southOf = require('./src/southOf')
  exports.southeastOf = require('./src/southeastOf')
})
