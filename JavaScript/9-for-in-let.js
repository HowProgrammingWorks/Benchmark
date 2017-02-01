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
  for (const key in data) {
    a[i++] = key;
  }
}

function testLetForOf() {
  const a = Array(7);
  let i = 0;
  let val;
  for (val of data) {
    a[i++] = val;
  }
}

function testForOfLet() {
  const a = Array(7);
  let i = 0;
  for (const val of data) {
    a[i++] = val;
  }
}

benchmark.do(10000000, 5, [
  testLetForIn,
  testForInLet,
  testLetForOf,
  testForOfLet,
]);
