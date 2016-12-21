'use strict';

const COUNT = 10000000;
const RETRY = 3;

var tests = [
  defineObject,
  defineArray,
  mixinObject,
  newInstance,
  newObject,
  objectCreate,
  callFactory
];

for (let k = 0; k < RETRY; k++) {
  //tests.sort(function() {
  //  return Math.random() - 0.5;
  //});
  tests.map(test);
  console.log('---');
}

function test(fn) {
  let begin = process.hrtime();
  console.time(fn.name);
  let a = [];
  for (let i = 0; i < COUNT; i++) {
    a.push(fn());
  }
  fn();
  let end = process.hrtime(begin);
  let diff = end[0] * 1e9 + end[1];
  let prefix = Array(15 - (diff.toString()).length).join(' ');
  let suffix = Array(30 - fn.name.length).join(' ');
  console.log(fn.name + suffix + prefix + diff + ' nanoseconds');
}

function defineArray() {
  return [
    'world',
    100500,
    true
  ];
}

function defineObject() {
  return {
    hello: 'world',
    size: 100500,
    flag: true
  };
}

function mixinObject() {
  var obj = {};
  obj.hello = 'world';
  obj.size = 100500;
  obj.flag = true;
  return obj;
}

function newInstance() {
  return new Item(
    'world',
    100500,
    true
  );
}

function newObject() {
  var obj = new Object();
  obj.hello = 'world';
  obj.size = 100500;
  obj.flag = true;
  return obj;
}

function objectCreate() {
  var obj = Object.create(objectCreate.prototype);
  obj.hello = 'world';
  obj.size = 100500;
  obj.flag = true;
  return obj;
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
