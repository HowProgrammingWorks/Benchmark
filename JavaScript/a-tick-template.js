'use strict';

const benchmark = require('./2-benchmark.js');

function testConcat() {
  return 'Hello user' + parseInt('5') * 10 + ' !';
}

function testTick() {
  return `Hello user${parseInt('5') * 10} !`;
}

benchmark.do(10000000, [
  testConcat,
  testTick
]);
