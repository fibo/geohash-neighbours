require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// In browserify context, *strict-mode* fall back to a no op.
module.exports = function (cb) { cb() }

},{}],2:[function(require,module,exports){
var validate = require('./validate');

function eastOf(geoHash) {
  validate(geoHash);

  // Number of iterations.
  var n = geoHash.length;

  var edgeCase = [
  // n = 0
  { '0': null },
  // n = 1
  { '0': '1', '1': '0' },
  // n = 2
  {
    '00': '01',
    '01': '00',
    '10': '11',
    '11': '10'
  },
  // n = 3
  {
    '000': '001',
    '001': '010',
    '010': '011',
    '011': '000',
    '100': '101',
    '101': '110',
    '110': '111',
    '111': '100'
  },
  // n = 4
  {
    '0000': '0001',
    '0001': '0100',
    '0010': '0011',
    '0011': '0110',
    '0100': '0101',
    '0101': '0000',
    '0110': '0111',
    '0111': '0010',
    '1000': '1001',
    '1001': '1100',
    '1010': '1011',
    '1011': '1110',
    '1100': '1101',
    '1101': '1000',
    '1110': '1111',
    '1111': '1010'
  }];

  if (n < 5) return edgeCase[n][geoHash];

  if (n % 2 === 0) {
    var parentSquare = geoHash.substr(0, n - 4);
    var last4Bits = geoHash.substr(n - 4, 4);
    var borderCells = ['0101', '0111', '1101', '1111'];

    var eastOfLast4Bits = eastOf(last4Bits);

    if (borderCells.indexOf(last4Bits) === -1) {
      return parentSquare + eastOfLast4Bits;
    } else {
      return eastOf(parentSquare) + eastOfLast4Bits;
    }
  } else {
    var container = geoHash.substr(0, n - 1);
    var lastBit = geoHash.substr(n - 1, 1);

    if (lastBit === '0') return container + '1';else return eastOf(container) + '0';
  }
}

module.exports = eastOf;

},{"./validate":10}],3:[function(require,module,exports){
var eastOf = require('./eastOf');
var northeastOf = require('./northeastOf');
var northOf = require('./northOf');
var northwestOf = require('./northwestOf');
var westOf = require('./westOf');
var southwestOf = require('./southwestOf');
var southOf = require('./southOf');
var southeastOf = require('./southeastOf');

var validate = require('./validate');

/**
 * Computes the cells near a given geohash.
 *
 * @param {String} geohash
 *
 * @returns {Array} neighbours in anticlockwise order
 */

function neighboursOf(geoHash) {
  validate(geoHash);

  var neighbours = [];

  // Number of iterations.
  var n = geoHash.length;

  // Edge cases first

  var edgeCase = [
  // n = 0
  { '0': null },
  // n = 1
  { '0': ['1'], '1': ['0'] },
  // n = 2
  {
    '00': ['01', '10', '11'],
    '01': ['00', '10', '11'],
    '10': ['11', '01', '00'],
    '11': ['10', '00', '01']
  },
  // n = 3
  {
    '000': ['001', '011', '111', '100', '101'],
    '001': ['010', '000', '100', '101', '110'],
    '010': ['011', '001', '101', '110', '111'],
    '011': ['000', '010', '110', '111', '100'],
    '100': ['101', '001', '000', '011', '111'],
    '101': ['110', '010', '001', '000', '100'],
    '110': ['111', '011', '010', '001', '101'],
    '111': ['100', '000', '011', '010', '110']
  }];

  if (n < 4) return edgeCase[n][geoHash];

  neighbours.push(eastOf(geoHash));

  var geoHashAtNorth = northOf(geoHash);

  if (geoHashAtNorth) {
    neighbours.push(northeastOf(geoHash));
    neighbours.push(geoHashAtNorth);
    neighbours.push(northwestOf(geoHash));
  }

  neighbours.push(westOf(geoHash));

  var geoHashAtSouth = southOf(geoHash);

  if (geoHashAtSouth) {
    neighbours.push(southwestOf(geoHash));
    neighbours.push(geoHashAtSouth);
    neighbours.push(southeastOf(geoHash));
  }

  return neighbours;
}

module.exports = neighboursOf;

},{"./eastOf":2,"./northOf":4,"./northeastOf":5,"./northwestOf":6,"./southOf":7,"./southeastOf":8,"./southwestOf":9,"./validate":10,"./westOf":11}],4:[function(require,module,exports){
var validate = require('./validate');

function northOf(geoHash) {
  validate(geoHash);

  // Number of iterations.
  var n = geoHash.length;

  var edgeCase = [
  // n = 0
  { '0': null },
  // n = 1
  { '0': null, '1': null },
  // n = 2
  {
    '00': null,
    '01': null,
    '10': '00',
    '11': '01'
  },
  // n = 3
  {
    '000': null,
    '001': null,
    '010': null,
    '011': null,
    '100': '000',
    '101': '001',
    '110': '010',
    '111': '011'
  },
  // n = 4
  {
    '0000': null,
    '0001': null,
    '0010': '0000',
    '0011': '0001',
    '0100': null,
    '0101': null,
    '0110': '0100',
    '0111': '0101',
    '1000': '0010',
    '1001': '0011',
    '1010': '1000',
    '1011': '1001',
    '1100': '0110',
    '1101': '0111',
    '1110': '1100',
    '1111': '1101'
  }];

  if (n < 5) return edgeCase[n][geoHash];

  if (n % 2 === 0) {
    var parentSquare = geoHash.substr(0, n - 4);
    var last4Bits = geoHash.substr(n - 4, 4);
    var northOfBorderCell = {
      '0000': '1010',
      '0001': '1011',
      '0100': '1110',
      '0101': '1111'
    };

    if (Object.keys(northOfBorderCell).indexOf(last4Bits) === -1) {
      return parentSquare + northOf(last4Bits);
    } else {
      var northOfParentSquare = northOf(parentSquare);

      if (northOfParentSquare) return northOfParentSquare + northOfBorderCell[last4Bits];else return null;
    }
  } else {
    var container = geoHash.substr(0, n - 1);
    var lastBit = geoHash.substr(n - 1, 1);

    var northOfContainer = northOf(container);

    if (northOfContainer) return northOfContainer + lastBit;else return null;
  }
}

module.exports = northOf;

},{"./validate":10}],5:[function(require,module,exports){
var eastOf = require('./eastOf');
var northOf = require('./northOf');
var validate = require('./validate');

function northeastOf(geoHash) {
  validate(geoHash);

  var geoHashAtNorth = northOf(geoHash);

  if (geoHashAtNorth) return eastOf(geoHashAtNorth);else return null;
}

module.exports = northeastOf;

},{"./eastOf":2,"./northOf":4,"./validate":10}],6:[function(require,module,exports){
var westOf = require('./westOf');
var northOf = require('./northOf');
var validate = require('./validate');

function northwestOf(geoHash) {
  validate(geoHash);

  var geoHashAtNorth = northOf(geoHash);

  if (geoHashAtNorth) return westOf(geoHashAtNorth);else return null;
}

module.exports = northwestOf;

},{"./northOf":4,"./validate":10,"./westOf":11}],7:[function(require,module,exports){
var validate = require('./validate');

function southOf(geoHash) {
  validate(geoHash);

  // Number of iterations.
  var n = geoHash.length;

  var edgeCase = [
  // n = 0
  { '0': null },
  // n = 1
  { '0': null, '1': null },
  // n = 2
  {
    '00': '10',
    '01': '11',
    '10': null,
    '11': null
  },
  // n = 3
  {
    '000': '001',
    '001': '010',
    '010': '011',
    '011': '000',
    '100': null,
    '101': null,
    '110': null,
    '111': null
  },
  // n = 4
  {
    '0000': '0010',
    '0001': '0011',
    '0010': '1000',
    '0011': '1001',
    '0100': '0110',
    '0101': '0111',
    '0110': '1100',
    '0111': '1101',
    '1000': '1010',
    '1001': '1011',
    '1010': null,
    '1011': null,
    '1100': '1110',
    '1101': '1111',
    '1110': null,
    '1111': null
  }];

  if (n < 5) return edgeCase[n][geoHash];

  if (n % 2 === 0) {
    var parentSquare = geoHash.substr(0, n - 4);
    var last4Bits = geoHash.substr(n - 4, 4);
    var southOfBorderCell = {
      '1010': '0000',
      '1011': '0001',
      '1110': '0100',
      '1111': '0101'
    };

    if (Object.keys(southOfBorderCell).indexOf(last4Bits) === -1) {
      return parentSquare + southOf(last4Bits);
    } else {
      var southOfParentSquare = southOf(parentSquare);

      if (southOfParentSquare) return southOfParentSquare + southOfBorderCell[last4Bits];else return null;
    }
  } else {
    var container = geoHash.substr(0, n - 1);
    var lastBit = geoHash.substr(n - 1, 1);

    var southOfContainer = southOf(container);

    if (southOfContainer) return southOfContainer + lastBit;else return null;
  }
}

module.exports = southOf;

},{"./validate":10}],8:[function(require,module,exports){
var eastOf = require('./eastOf');
var southOf = require('./southOf');
var validate = require('./validate');

function southeastOf(geoHash) {
  validate(geoHash);

  var geoHashAtSouth = southOf(geoHash);

  if (geoHashAtSouth) return eastOf(geoHashAtSouth);else return null;
}

module.exports = southeastOf;

},{"./eastOf":2,"./southOf":7,"./validate":10}],9:[function(require,module,exports){
var westOf = require('./westOf');
var southOf = require('./southOf');
var validate = require('./validate');

function southwestOf(geoHash) {
  validate(geoHash);

  var geoHashAtSouth = southOf(geoHash);

  if (geoHashAtSouth) return westOf(geoHashAtSouth);else return null;
}

module.exports = southwestOf;

},{"./southOf":7,"./validate":10,"./westOf":11}],10:[function(require,module,exports){
/**
 * Checks if given geoHash has a valid format
 *
 * @api private
 *
 * @params {String} geoHash
 *
 * @throws {TypeError}
 */

function validate(geoHash) {
  var onlyZeroAndOne = /^[01]+$/;

  if (typeof geoHash !== 'string') {
    throw new TypeError('geoHash must be a string: ' + geoHash);
  }

  if (!geoHash.match(onlyZeroAndOne)) {
    throw new TypeError('geoHash must contain only 0 or 1: ' + geoHash);
  }
}

module.exports = validate;

},{}],11:[function(require,module,exports){
var validate = require('./validate');

function westOf(geoHash) {
  validate(geoHash);

  // Number of iterations.
  var n = geoHash.length;

  var edgeCase = [
  // n = 0
  { '0': null },
  // n = 1
  { '0': '1', '1': '0' },
  // n = 2
  {
    '00': '01',
    '01': '00',
    '10': '11',
    '11': '10'
  },
  // n = 3
  {
    '000': '011',
    '001': '000',
    '010': '001',
    '011': '010',
    '100': '111',
    '101': '100',
    '110': '101',
    '111': '110'
  },
  // n = 4
  {
    '0000': '0101',
    '0001': '0000',
    '0010': '0111',
    '0011': '0010',
    '0100': '0001',
    '0101': '0100',
    '0110': '0011',
    '0111': '0110',
    '1000': '1101',
    '1001': '1000',
    '1010': '1111',
    '1011': '1010',
    '1100': '1001',
    '1101': '1100',
    '1110': '1011',
    '1111': '1110'
  }];

  if (n < 5) return edgeCase[n][geoHash];

  if (n % 2 === 0) {
    var parentSquare = geoHash.substr(0, n - 4);
    var last4Bits = geoHash.substr(n - 4, 4);
    var borderCells = ['0000', '0010', '1000', '1010'];

    var westOfLast4Bits = westOf(last4Bits);

    if (borderCells.indexOf(last4Bits) === -1) {
      return parentSquare + westOfLast4Bits;
    } else {
      return westOf(parentSquare) + westOfLast4Bits;
    }
  } else {
    var container = geoHash.substr(0, n - 1);
    var lastBit = geoHash.substr(n - 1, 1);

    if (lastBit === '1') return container + '0';else return westOf(container) + '1';
  }
}

module.exports = westOf;

},{"./validate":10}],"geohash-neighbours":[function(require,module,exports){
require('strict-mode')(function () {
  exports.neighboursOf = require('./src/neighboursOf');

  exports.eastOf = require('./src/eastOf');
  exports.northeastOf = require('./src/northeastOf');
  exports.northOf = require('./src/northOf');
  exports.northwestOf = require('./src/northwestOf');
  exports.westOf = require('./src/westOf');
  exports.southwestOf = require('./src/southwestOf');
  exports.southOf = require('./src/southOf');
  exports.southeastOf = require('./src/southeastOf');
});

},{"./src/eastOf":2,"./src/neighboursOf":3,"./src/northOf":4,"./src/northeastOf":5,"./src/northwestOf":6,"./src/southOf":7,"./src/southeastOf":8,"./src/southwestOf":9,"./src/westOf":11,"strict-mode":1}]},{},[]);
