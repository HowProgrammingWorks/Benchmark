'use strict';

const benchmark = require('./2-benchmark.js');

const data1 = [
  -100, -50, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
];

const data2 = [
  'Descartes', 'Pascal', 'Leibniz', 'Euler', 'Bernoulli', 'Kepler'
];

const testEachNumber = () => {
  const a = Array(data1.length);
  data1.forEach((item, i) => {
    a[i] = data1[i];
  });
  return a;
};

const testForOfNumber = () => {
  const a = Array(data1.length);
  let i = 0;
  for (const n of data1) {
    a[i++] = n;
  }
  return a;
};

const testEachString = () => {
  const a = Array(data2.length);
  data2.forEach((item, i) => {
    a[i] = data2[i];
  });
  return a;
};

const testForOfString = () => {
  const a = Array(data2.length);
  let i = 0;
  for (const s of data2) {
    a[i++] = s;
  }
  return a;
};

benchmark.do(5000000, [
  testEachNumber,
  testForOfNumber,
  testEachString,
  testForOfString,
]);
