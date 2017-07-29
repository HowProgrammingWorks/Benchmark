'use strict';

const benchmark = require('./2-benchmark.js');

// Prepare data

const arr = [];
for (let i = 0; i < 100; i++) {
  arr[i] = { name: 'item' + ((i - 50) * i) };
}

// Different implementations

function testSlice() {
  return arr.slice();
}

function testSlice0() {
  return arr.slice(0);
}

function testConcat() {
  return [].concat(arr);
}

function testFor() {
  const result = [];
  let len = arr.length;
  let i;
  for (i = 0; i < len; i++) {
    result.push(arr[i]);
  }
  return result;
}

function testForNew() {
  let len = arr.length;
  const result = new Array(len);
  let i;
  for (i = 0; i < len; i++) {
    result[i] = arr[i];
  }
  return result;
}

function testForNewLet() {
  let len = arr.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    result[i] = arr[i];
  }
  return result;
}

// Run tests

benchmark.do(500000, [
  testSlice,
  testSlice0,
  testConcat,
  testFor,
  testForNew,
  testForNewLet
]);
