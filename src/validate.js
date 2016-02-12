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
  const onlyZeroAndOne = /^[01]+$/

  if (typeof geoHash !== 'string') {
    throw new TypeError('geoHash must be a string: ' + geoHash)
  }

  if (!geoHash.match(onlyZeroAndOne)) {
    throw new TypeError('geoHash must contain only 0 or 1: ' + geoHash)
  }
}

module.exports = validate
