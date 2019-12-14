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

const testForKeys = () => {
  const a = Array(7);
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    a[i] = data[key];
  }
};

const testForIn = () => {
  const a = Array(7);
  let i = 0;
  for (const key in data) {
    a[i++] = data[key];
  }
};

const testForEach = () => {
  const a = Array(7);
  let i = 0;
  const keys = Object.keys(data);
  keys.forEach(key => {
    a[i++] = data[key];
  });
};

const testForOf = () => {
  const a = Array(7);
  let i = 0;
  const keys = Object.keys(data);
  for (const key of keys) {
    const val = data[key];
    a[i++] = val;
  }
};

benchmark.do(10000000, [
  testForKeys,
  testForIn,
  testForEach,
  testForOf,
]);
