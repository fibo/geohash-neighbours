# geohash-neighbours

> finds the cells near a given [geohash][1]

[![Node engine](https://img.shields.io/node/v/geohash-neighbours.svg)](https://nodejs.org/en/) [![NPM version](https://badge.fury.io/js/geohash-neighbours.svg)](http://badge.fury.io/js/geohash-neighbours) [![Build Status](https://travis-ci.org/fibo/geohash-neighbours.svg?branch=master)](https://travis-ci.org/fibo/geohash-neighbours?branch=master) [![Test page](https://img.shields.io/badge/test-page-blue.svg)](http://g14n.info/geohash-neighbours/test)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

**Table Of Contents:**

* [Installation](#installation)
* [GeoHash format](#geohash-format)
* [Api](http://g14n.info/dflow/api)
  - [neighboursOf](#neighboursofgeohash)
  - [eastOf](#eastofgeohash)
  - [northeastOf](#northeastofgeohash)
  - [northOf](#northofgeohash)
  - [northwestOf](#northwestofgeohash)
  - [westOf](#westofgeohash)
  - [southwestOf](#southwestofgeohash)
  - [southOf](#southofgeohash)
  - [southeastOf](#southeastofgeohash)

## Installation

### Client side

With [bower](http://bower.io/) do

```bash
bower install geohash-neighbours
```

or use a CDN adding this to your HTML page

```
<script src="https://cdn.rawgit.com/fibo/geohash-neighbours/master/dist/geohash-neighbours.min.js"></script>
```

### Server side

With [npm](https://www.npmjs.com/) do

```
npm install geohash-neighbours --save
```

## Status

Algorithm was written and implemented in few days: as a mathematician, I am
confident it is right. It needs more test cases as well as users that try it
and compare it to the method they are currently using.
So your feedback will be welcome.

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
1010 - 1011   1110 - 1111
```

See also [Geo hashing wiki][2].

## API

### `neighboursOf(geoHash)`

> computes the cells near a given geohash

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
* `@returns {Array}`: neighbours of given geohash, that are 8 geohashes in most cases, belonging to the same iteration step. Cells are in anticlockwise order.

### `eastOf(geoHash)`

> neighbour at east a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at east of given geohash.

```
const eastOf = require('geohash-neighbours').eastOf

console.log(eastOf('0000'))
```

### `northeastOf(geoHash)`

> neighbour at northeast a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at northeast of given geohash.

```
const northeastOf = require('geohash-neighbours').northeastOf

console.log(northeastOf('0000'))
```

### `northOf(geoHash)`

> neighbour at north a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at north of given geohash.

```
const northOf = require('geohash-neighbours').northOf

console.log(northOf('0000'))
```

### `northwestOf(geoHash)`

> neighbour at northwest a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at northwest of given geohash.

```
const northwestOf = require('geohash-neighbours').northwestOf

console.log(northwestOf('0000'))
```

### `westOf(geoHash)`

> neighbour at west a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at west of given geohash.

```
const westOf = require('geohash-neighbours').westOf

console.log(westOf('0000'))
```

### `southwestOf(geoHash)`

> neighbour at southwest a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at southwest of given geohash.

```
const southwestOf = require('geohash-neighbours').southwestOf

console.log(southwestOf('0000'))
```

### `southOf(geoHash)`

> neighbour at south a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at south of given geohash.

```
const southOf = require('geohash-neighbours').southOf

console.log(southOf('0000'))
```

### `southeastOf(geoHash)`

> neighbour at southeast a given geohash, if any

* `@param {String}`: geoHash given in [geoHash format](#geohash-format).
* `@returns {String}`: neighbour at southeast of given geohash.

```
const southeastOf = require('geohash-neighbours').southeastOf

console.log(southeastOf('0000'))
```

## License

[MIT](http://g14n.info/mit-license/)

[1]: https://en.wikipedia.org/wiki/Geohash "Geohash"
[2]: http://wiki.xkcd.com/geohashing/Main_Page "Geo hashing wiki"

