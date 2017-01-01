'use strict';

const benchmark = require('./2-benchmark.js');

benchmark.do(10000000, 3, [
  defineObject,
  defineArray,
  mixinObject,
  newInstance,
  newObject,
  objectCreate,
  callFactory
]);

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
  const obj = {};
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
  const obj = new Object();
  obj.hello = 'world';
  obj.size = 100500;
  obj.flag = true;
  return obj;
}

function objectCreate() {
  const obj = Object.create(objectCreate.prototype);
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
