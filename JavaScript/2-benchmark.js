'use strict';

const benchmark = {};
module.exports = benchmark;

benchmark.do = (count, retry, tests, namesOfTests) => {

  let k;
  for (k = 0; k < retry; k++) {
    let counter = 0; // Order number of function that will be call
    tests.map((fn) => test(fn, counter++));
    console.log();
  }

  function test(fn, orderNumber) {
    const begin = process.hrtime();
    const a = [];
    let i;
    for (i = 0; i < count; i++) {
      a.push(fn());
    }
    const end = process.hrtime(begin);
    const diff = end[0] * 1e9 + end[1];

    const fromArray = namesOfTests && namesOfTests[orderNumber];
    const fnName = fromArray || fn.name || 'Anonymius';
    const prefix = '.'.repeat(35 - (diff + fnName).length);

    console.log(fnName + prefix + diff + ' nanoseconds');
  }
};