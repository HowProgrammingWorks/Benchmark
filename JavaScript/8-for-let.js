'use strict';

const benchmark = require('./2-benchmark.js');

function testLetFor() {
  const a = Array(1000);
  let i;
  for (i = 0; i < 1000; i++) {
    a[i] = i;
  }
}

function testForLet() {
  const a = Array(1000);
  for (let i = 0; i < 1000; i++) {
    a[i] = i;
  }
}

benchmark.do(1000000, [
  testLetFor,
  testForLet
]);
