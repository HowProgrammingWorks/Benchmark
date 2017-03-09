'use strict';

const benchmark = require('./2-benchmark.js');
const creaters = require('./c-obj-create.js');

function actions(array) {
  let i;
  for (i = 0; i < creaters.arraySize; i++) {
    array[i].changeAge(1);
    array[i].changeName('New name');
    array[i] = '' + array[i]; // toString
  }
}

function mixinUse() {
  const array = creaters.mixinCreate();
  actions(array);
}

function classUse() {
  const array = creaters.classCreate();
  actions(array);
}

function prototypeUse() {
  const array = creaters.prototypeCreate();
  actions(array);
}

function closureUse() {
  const array = creaters.closureCreate();
  actions(array);
}

console.log('Creation + using arrays. Size = ' + creaters.arraySize + ':\n');
benchmark.do(1000, 3, [
  mixinUse,
  classUse,
  prototypeUse,
  closureUse
]);
