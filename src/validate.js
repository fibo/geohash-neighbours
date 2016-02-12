/**
 * Checks if given geoHash has a valid format
 *
 * @api private
 *
 * @params {String} geoHash
 *
 * @throws {TypeError}
 */

function validate (geoHash) {
  if (typeof geoHash !== 'string') {
    throw new TypeError('geoHash must be a string: ' + geoHash)
  }
}

module.exports = validate
