'use strict';

const COUNT = 10000000;
const RETRY = 1;

var tests = [
  defineObject,
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
  console.time(fn.name);
  let a = [];
  for (let i = 0; i < COUNT; i++) {
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
};

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
