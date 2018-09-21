'use strict';

const benchmark = require('./2-benchmark.js');

const rangePush = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) arr.push(i);
  return arr;
};

const rangeNew = (from, to) => {
  if (to < from) return [];
  const len = to - from + 1;
  const range = new Array(len);
  for (let i = from; i <= to; i++) {
    range[i - from] = i;
  }
  return range;
};

const rangeEx = range => {
  const from = range[0];
  let to = range[1];
  const toType = typeof to;
  if (toType === 'undefined') {
    to = range[2];
    return api.common.range(from, to);
  } else if (toType !== 'number') {
    let count = to[0];
    if (count < 0) {
      const cpus = api.os.cpus().length;
      count = cpus + count;
    }
    return api.common.range(from, from + count - 1);
  }
};

benchmark.do(1000000, [
  function testRangePush() {
    rangePush(1, 1000);
  },
  function testRangeNew() {
    rangeNew(1, 1000);
  },
  function testRangeEx() {
    rangeNew(1, 1000);
  },
]);
