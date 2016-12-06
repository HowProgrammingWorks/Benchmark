'use strict';

const LOOP = 10000000;

for (let k = 0; k < 3; k++) {
  test(defineObject);
  test(newInstance);
  test(callFactory);
  console.log('---');
}

function test(fn) {
  console.time(fn.name);
  let a = [];
  for (let i = 0; i < LOOP; i++) {
    a.push(fn());
  }
  fn();
  console.timeEnd(fn.name);
}

function defineObject() {
  return {
    hello: 'world',
    size: 100500,
    flag: true
  };
}

function newInstance() {
  return new Item(
    'world',
    100500,
    true
  );
}

function callFactory() {
  return item(
    'world',
    100500,
    true
  );
}

function Item(hello, size, flag) {
  this.hello = hello;
  this.size = size;
  this.flag = flag;
}

function item(hello, size, flag) {
  return {
    hello: hello,
    size: size,
    flag: flag
  };
}
