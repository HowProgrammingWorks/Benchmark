'use strict';

function fn() {
  const a = [];
  for (let i = 0; i < 10000; i++) {
    a.push(Array(i).join('A'));
  }
  return a;
}

console.time('experiment');
fn();
console.timeEnd('experiment');

const begin = process.hrtime();
fn();
const end = process.hrtime(begin);
const diff = end[0] * 1e9 + end[1];
console.log(diff + ' nanoseconds');
