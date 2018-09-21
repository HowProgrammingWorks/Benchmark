'use strict';

const benchmark = require('./2-benchmark.js');

// Prepare data

const arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = { name: 'item' + ((i - 50) * i) };
}

// Different implementations

const testSlice = () => arr.slice();

const testSlice0 = () => arr.slice(0);

const testConcat = () => [].concat(arr);

const testFor = () => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

const testForNew = () => {
  const len = arr.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = arr[i];
  }
  return result;
};

// Run tests

benchmark.do(500000, [
  testSlice,
  testSlice0,
  testConcat,
  testFor,
  testForNew,
]);
