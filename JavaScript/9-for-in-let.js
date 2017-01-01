'use strict';

const benchmark = require('./2-benchmark.js');

const data = {
  a: 'abc',
  bcd: 'defg',
  efgh: 'hijklmn',
  ijk: 'opqrst',
  lmnopqrs: 'u',
  tvuwx: 'v',
  yz: 'xyz'
};

function testLetForIn() {
  const a = Array(7);
  let i = 0;
  let key;
  for (key in data) {
    a[i++] = key;
  }
}

function testForInLet() {
  const a = Array(7);
  let i = 0;
  for (let key in data) {
    a[i++] = key;
  }
}

benchmark.do(10000000, 5, [
  testLetForIn,
  testForInLet,
]);
