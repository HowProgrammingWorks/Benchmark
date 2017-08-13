'use strict';

const benchmark = {};
module.exports = benchmark;

const PRE_COUNT = 1000;

const OPT_STATUS = [
  /*0*/ '?', // unknown
  /*1*/ '+', // optimized
  /*2*/ '-', // not optimized
  /*3*/ 'a', // always optimized
  /*4*/ 'n', // never optimized
  /*5*/ '?', // unknown,
  /*6*/ 'm', // maybe deoptimized
  /*7*/ 't'  // turbofan optimized
];

const opt = fn => OPT_STATUS[%GetOptimizationStatus(fn)];
const optCount = fn => %GetOptimizationCount(fn);
const optimize = fn => %OptimizeFunctionOnNextCall(fn);

const rpad = (s, char, count) => (s + char.repeat(count - s.length));
const lpad = (s, char, count) => (char.repeat(count - s.length) + s);

console.log('\nname (heat) time opt after: define opt heat loop\n');

benchmark.do = (count, tests) => {
  const times = tests.map((fn) => {
    const result = [];
    let i;
    const optBefore = opt(fn);
    optimize(fn);
    fn();
    const optAfter = opt(fn);
    for (i = 0; i < PRE_COUNT; i++) result.push(fn());
    const optAfterHeat = opt(fn);
    const begin = process.hrtime();
    for (i = 0; i < count; i++) result.push(fn());
    const end = process.hrtime(begin);
    const optAfterLoop = opt(fn);
    const diff = end[0] * 1e9 + end[1];
    const time = lpad(diff.toString(), '.', 15);
    const name = rpad(fn.name, '.', 25);
    console.log(
      name + '(' + (result.length - PRE_COUNT) + ')' +
      time + ' nanoseconds ' + optCount(fn) + ' ' +
      optBefore + ' ' + optAfter + ' ' +
      optAfterHeat + ' ' + optAfterLoop
    );
    return { name, time: diff };
  });
  console.log();
  const top = times.sort((t1, t2) => (t1.time - t2.time));
  const best = top[0].time;
  const relative = (time) => (time * 100 / best);
  top.forEach((test) => {
    test.percent = Math.round(Math.round(relative(test.time) * 100) / 100) - 100;
    const time = lpad(test.time.toString(), '.', 15);
    const percent = lpad((
      test.percent === 0 ? 'min' : '+' + test.percent + '%'
    ), '.', 10);
    console.log(test.name + time + percent);
  });
};
