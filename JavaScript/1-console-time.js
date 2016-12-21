'use strict';

function fn() {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a.push(Array(i).join('A'));
  }
  return a;
}

console.time('experiment');
fn();
console.timeEnd('experiment');

let begin = process.hrtime();
fn();
let end = process.hrtime(begin);
let diff = end[0] * 1e9 + end[1];
console.log(diff + ' nanoseconds');
