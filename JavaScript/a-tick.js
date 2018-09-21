'use strict';

const benchmark = require('./2-benchmark.js');

const testConcat = () => 'Hello user' + parseInt('5') * 10 + ' !';

const testTick = () => `Hello user${parseInt('5') * 10} !`;

benchmark.do(10000000, [
  testConcat,
  testTick,
]);
