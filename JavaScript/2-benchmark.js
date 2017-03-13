'use strict';

const benchmark = {};
module.exports = benchmark;

benchmark.do = (count, retry, tests, testNames) => {

  let k;
  for (k = 0; k < retry; k++) {
    let counter = 0;  // Function index which is called
    tests.map((fn) => test(fn, counter++));
    console.log();
  }

  function test(fn, index) {
    const begin = process.hrtime();
    const a = [];
    let i;
    for (i = 0; i < count; i++) {
      a.push(fn());
    }
    const end = process.hrtime(begin);
    const diff = end[0] * 1e9 + end[1];

    const explicitName = testNames && testNames[index];
    const fnName = explicitName || fn.name || 'Anonymous';
    const prefix = '.'.repeat(35 - (diff + fnName).length);

    console.log(fnName + prefix + diff + ' nanoseconds');
  }
};
