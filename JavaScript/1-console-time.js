'use strict';

const LOOP_COUNT = 50000;

function fn() {
  const a = [];
  let i;
  for (i = 0; i < LOOP_COUNT; i++) {
    a.push(Array(i).join('A').length);
  }
  return a;
}

console.time('experiment');
const res1 = fn();
console.log(res1.length);
console.timeEnd('experiment');

const begin = process.hrtime();
const res2 = fn();
console.log(res2.length);
const end = process.hrtime(begin);
const diff = end[0] * 1e9 + end[1];
console.log(diff + ' nanoseconds');
