const validate = require('../src/validate')

describe('validate', () => {
  it('throws if geoHash is not a string', () => {
    ;(() => {
      validate({'not': 'a string'})
    }).should.throwError(/geoHash must be a string:/)
  })
})
