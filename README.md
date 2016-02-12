# geohash-neighbours

> finds the 8 cells near a given [geohash][1]

[![Node engine](https://img.shields.io/node/v/dflow.svg)](https://nodejs.org/en/) [![NPM version](https://badge.fury.io/js/dflow.svg)](http://badge.fury.io/js/dflow) [![Build Status](https://travis-ci.org/fibo/dflow.svg?branch=master)](https://travis-ci.org/fibo/dflow?branch=master)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Install

With [npm](https://www.npmjs.com/) do

```
npm install geohash-neighbours --save
```

## GeoHash format

The geoHash is given in binary format as a string of 0 1, so iterations look like the following

**n=1**

```
0 - 1
```

**n=2**

```
00 - 01
  ___/
 /
10 - 11
```

**n=3**

```
000 - 001 - 010 - 011
  _________________/
 /
100 - 101 - 110 - 111
```

**n=4**

```
0000 - 0001   0100 - 0101
   ____/    __/   ____/
  /        /     /
0010 - 0011   0110 - 0111
   ___________________/
  /
1000 - 1001   1100 - 1101
   ____/    __/   ____/
  /        /     /
1000 - 1011   1110 - 1111
```

## API

<a name="neighboursOf"></a>
### `neighboursOf(geoHash)`

> computes the 8 cells near a given geohash

```
const neighboursOf = require('geohash-neighbours').neighboursOf
const geoHash = '0011'

console.log(neighboursOf(geoHash)) // [
                                   //   '0000', '0001', '0100'
                                   //   '0010',         '0110'
                                   //   '1000', '1001', '1100'
                                   // ]
```

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {Array}`: neighbours of given geohash, that are 8 geohashes belonging to the same iteration step.

## License

[MIT](http://g14n.info/mit-license/)

[1]: https://en.wikipedia.org/wiki/Geohash "Geohash"

