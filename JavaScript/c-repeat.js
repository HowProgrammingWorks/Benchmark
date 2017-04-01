'use strict';

const benchmark = require('./2-benchmark.js');

function testArrayJoin() {
  return Array(20).join('.');
}

function testRepeat() {
  return '.'.repeat(20);
}

benchmark.do(1000000, [
  testArrayJoin,
  testRepeat,
]);
