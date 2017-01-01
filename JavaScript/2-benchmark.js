'use strict';

let benchmark = {};
module.exports = benchmark;

benchmark.do = (count, retry, tests) => {

  for (let k = 0; k < retry; k++) {
    //tests.sort(() => {
    //  return Math.random() - 0.5;
    //});
    tests.map(test);
    console.log();
  }

  function test(fn) {
    let begin = process.hrtime();
    let a = [];
    for (let i = 0; i < count; i++) {
      a.push(fn());
    }
    fn();
    let end = process.hrtime(begin);
    let diff = end[0] * 1e9 + end[1];
    let prefix = Array(15 - (diff.toString()).length).join('.');
    let suffix = Array(20 - fn.name.length).join('.');
    console.log(fn.name + suffix + prefix + diff + ' nanoseconds');
  }

};
