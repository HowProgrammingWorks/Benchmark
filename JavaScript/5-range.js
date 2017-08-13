'use strict';

const benchmark = require('./2-benchmark.js');

function rangePush(min, max) {
  const arr = [];
  let i;
  for (i = min; i <= max; i++) arr.push(i);
  return arr;
}

function rangeNew(from, to) {
  if (to < from) return [];
  const len = to - from + 1;
  const range = new Array(len);
  let i;
  for (i = from; i <= to; i++) {
    range[i - from] = i;
  }
  return range;
}

function rangeEx(range) {
  const from = range[0];
  let to = range[1];
  const toType = typeof(to);
  let count, res;
  if (toType === 'undefined') {
    to = range[2];
    res = api.common.range(from, to);
  } else if (toType !== 'number') {
    count = to[0];
    if (count < 0) {
      cpus = api.os.cpus().length;
      count = cpus + count;
    }
    range = api.common.range(from, from + count - 1);
  }
  return res;
}

benchmark.do(1000000, [
  function testRangePush() {
    rangePush(1, 1000);
  },
  function testRangeNew() {
    rangeNew(1, 1000);
  }
]);
