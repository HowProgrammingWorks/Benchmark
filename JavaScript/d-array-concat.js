'use strict';

const benchmark = require('./2-benchmark.js');

function testConcat() {
  let arr1 = [1, 2, 3],  arr2 = [4, 5, 6];
  arr1 = arr1.concat(arr2);
  return arr1;
}

function testPushApply() {
  let arr1 = [1, 2, 3],  arr2 = [4, 5, 6];
  [].push.apply(arr1, arr2);
  return arr1;
}

function testPushSpread() {
  let arr1 = [1, 2, 3],  arr2 = [4, 5, 6];
  arr1.push(...arr2);
  return arr1;
}

function testSpread() {
  let arr1 = [1, 2, 3],  arr2 = [4, 5, 6];
  arr1 = [...arr1, ...arr2];
  return arr1;
}

benchmark.do(1000000, 3, [
  testConcat,
  testPushApply,
  testPushSpread,
  testSpread
]);
