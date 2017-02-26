'use strict';

const benchmark = {};
module.exports = benchmark;

benchmark.do = (count, retry, tests) => {

  let k;
  for (k = 0; k < retry; k++) {
    tests.map(test);
    console.log();
  }

  function test(fn) {
    const begin = process.hrtime();
    const a = [];
    let i;
    for (i = 0; i < count; i++) {
      a.push(fn());
    }
    const end = process.hrtime(begin);
    const diff = end[0] * 1e9 + end[1];
    const prefix = Array(15 - (diff.toString()).length).join('.');
    const suffix = Array(20 - fn.name.length).join('.');
    console.log(fn.name + suffix + prefix + diff + ' nanoseconds');
  }

};
