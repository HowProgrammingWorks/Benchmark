'use strict';

const benchmark = {};
module.exports = benchmark;

const PRE_COUNT = 10000;

const OPT_STATUS = [
  /* 0 */ 'unknown',
  /* 1 */ 'opt',
  /* 2 */ 'not opt',
  /* 3 */ 'always opt',
  /* 4 */ 'never opt',
  /* 5 */ 'unknown',
  /* 6 */ 'maybe deopt',
  /* 7 */ 'turbofan opt'
];

const OPT_BITS = [
  /*  1 */ 'function',
  /*  2 */ 'never',
  /*  4 */ 'always',
  /*  8 */ 'maybe',
  /* 16 */ 'opt',
  /* 32 */ 'turbofan',
  /* 64 */ 'interp'
];

const status = fn => %GetOptimizationStatus(fn);

const opt = fn => {
  const optStatus = status(fn);
  const results = [];
  OPT_BITS.forEach((name, n) => {
    if (n === 0) return;
    if (Math.pow(2, n) & optStatus) results.push(name);
  });
  return results.length ? results.join(', ') : 'no preopt,';
}

const optimize = fn => %OptimizeFunctionOnNextCall(fn);

const rpad = (s, char, count) => (s + char.repeat(count - s.length));
const lpad = (s, char, count) => (char.repeat(count - s.length) + s);

const relativePercent = (best, time) => (time * 100n / best) - 100n;

console.log('\nname time (nanoseconds) status: begin opt heat loop\n');

benchmark.do = (count, tests) => {
  const times = tests.map(fn => {
    if (global.gc) gc();
    const result = [];
    const optBefore = opt(fn);
    optimize(fn);
    fn();
    const optAfter = opt(fn);
    for (let i = 0; i < PRE_COUNT; i++) result.push(fn());
    const optAfterHeat = opt(fn);
    const begin = process.hrtime.bigint();
    for (let i = 0; i < count; i++) result.push(fn());
    const end = process.hrtime.bigint();
    const optAfterLoop = opt(fn);
    const diff = end - begin;
    const name = rpad(fn.name, '.', 22);
    const iterations = result.length - PRE_COUNT;
    const log = [
      name, diff, optBefore, optAfter, optAfterHeat, optAfterLoop
    ];
    console.log(log.join(' '));
    return { name, time: diff };
  });
  console.log();
  console.log(times);
  const top = times.sort((t1, t2) => t1.time > t2.time ? 1 : -1);
  const best = top[0].time;
  times.forEach(test => {
    test.percent = relativePercent(best, test.time);
    const time = lpad(test.time.toString(), '.', 10);
    const percent = test.percent === 0 ? 'min' : test.percent + '%';
    const line = lpad(percent, '.', 10);
    console.log(test.name + time + line);
  });
};
