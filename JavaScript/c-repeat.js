'use strict';

const benchmark = require('./2-benchmark.js');

const testArrayJoin = () => Array(20).join('.');
const testRepeat = () => '.'.repeat(20);

benchmark.do(1000000, [
  testArrayJoin,
  testRepeat,
]);
