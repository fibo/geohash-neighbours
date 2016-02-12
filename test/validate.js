const should = require('should')
const validate = require('../src/validate')

describe('validate', () => {
  it('throws if geoHash is not a string', () => {
    ;(() => {
      validate({'not': 'a string'})
    }).should.throwError(/geoHash must be a string:/)
  })

  it('throws if geoHash is not a string of 0 1', () => {
    ;(() => {
      validate('not only 0 1')
    }).should.throwError(/geoHash must contain only 0 or 1:/)
  })

  it('does not throw if geoHash is a string of 0 1', () => {
    should.doesNotThrow(() => {
      validate('01')
      validate('101')
      validate('1010')
      validate('0010000000101')
    })
  })
})
