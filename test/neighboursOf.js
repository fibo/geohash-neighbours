const neighboursOf = require('geohash-neighbours').neighboursOf
const should = require('should')

describe('neighboursOf', () => {
  it('works when n=1', () => {
    should.deepEqual(neighboursOf('0'), ['1'])
    should.deepEqual(neighboursOf('1'), ['0'])
  })
})
