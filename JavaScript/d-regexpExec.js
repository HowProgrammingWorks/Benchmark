'use strict';

const benchmark = require('./2-benchmark.js');

const str = 'Lorem Ipsum is simply dummy text of the printing and typesetting';

function testIndexOf() {
  const target = 'i';
  let pos = -1;
  do {
    pos = str.indexOf(target, pos + 1);
  } while (~pos);
}

function testRegexpExec() {
  const regexp = /i/g;
  let result = regexp.exec(str);
  while (result) {
    result = regexp.exec(str);
  }
}

benchmark.do(100000, 3, [
  testIndexOf,
  testRegexpExec
]);
