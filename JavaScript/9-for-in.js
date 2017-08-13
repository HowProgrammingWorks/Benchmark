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

function testForKeys() {
  const a = Array(7);
  let i, key;
  const keys = Object.keys(data);
  const len = keys.length;
  for (i = 0; i < len; i++) {
    key = keys[i];
    a[i] = data[key];
  }
}

function testForIn() {
  const a = Array(7);
  let i = 0;
  for (let key in data) {
    a[i++] = data[key];
  }
}

function testForInLet() {
  const a = Array(7);
  let i = 0;
  let key;
  for (key in data) {
    a[i++] = data[key];
  }
}

function testForOf() {
  const a = Array(7);
  let i = 0;
  let key, val;
  const keys = Object.keys(data);
  const len = keys.length;
  for (key of keys) {
    val = data[key];
    a[i++] = val;
  }
}

function testForOfLet() {
  const a = Array(7);
  let i = 0;
  let key, val;
  const keys = Object.keys(data);
  const len = keys.length;
  for (let key of keys) {
    val = data[key];
    a[i++] = val;
  }
}

benchmark.do(1000000, [
  testForKeys,
  testForIn,
  testForInLet,
  testForOf,
  testForOfLet
]);
