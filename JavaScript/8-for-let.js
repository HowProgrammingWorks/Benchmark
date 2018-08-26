'use strict';

const benchmark = require('./2-benchmark.js');

function testLetBeforeLoop() {
  const a = Array(1000);
  let i;
  for (i = 0; i < 1000; i++) {
    a[i] = i;
  }
}

function testLetInLoop() {
  const a = Array(1000);
  for (let i = 0; i < 1000; i++) {
    a[i] = i;
  }
}

benchmark.do(1000000, [
  testLetInLoop,
  testLetBeforeLoop
]);
