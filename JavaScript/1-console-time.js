'use strict';

const LOOP_COUNT = 50000;

const fn = () => {
  const a = [];
  for (let i = 0; i < LOOP_COUNT; i++) {
    a.push(Array(i).join('A').length);
  }
  return a;
};

console.log();

console.time('experiment');
const res1 = fn();
console.log('res1.length', res1.length);
console.timeEnd('experiment');

console.log();

const begin2 = new Date().getTime();
const res2 = fn();
const end2 = new Date().getTime();
const diff2 = end2 - begin2;
console.dir({ length: res2.length, diff: diff2 });

console.log();

const begin3 = process.hrtime();
const res3 = fn();
const end3 = process.hrtime(begin3);
const diff3 = end3[0] * 1e9 + end3[1];
const sec3 = diff3 / 1e9;
console.dir({ length: res3.length, msec: diff3, sec: sec3 });
