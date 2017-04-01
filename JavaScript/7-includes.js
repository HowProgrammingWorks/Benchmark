'use strict';

const benchmark = require('./2-benchmark.js');

const data = ['abc', 'defg', 'hijklmn', 'opqrst', 'u', 'v', 'xyz'];

function testIndexOf() {
  return [
    data.indexOf('opqrst') !== -1,
    data.indexOf('qwerty') !== -1,
    data.indexOf('v') !== -1
  ];
}

function testIncludes() {
  return [
    data.includes('opqrst'),
    data.includes('qwerty'),
    data.includes('v')
  ];
}

benchmark.do(10000000, [
  testIncludes,
  testIndexOf
]);
