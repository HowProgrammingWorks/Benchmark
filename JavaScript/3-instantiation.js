'use strict';

const benchmark = require('./2-benchmark.js');

function makeClosure(hello, size, flag) {
  return () => {};
}

function closureInstance() {
  return makeClosure('world', 100500, true);
}

function defineArray() {
  return ['world', 100500, true];
}

function defineArrayOfString() {
  return ['world', 'world', 'world'];
}

function defineArrayOfNumber() {
  return [100500, 100500, 100500];
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

function ProtoItem(hello, size, flag) {
  this.hello = hello;
  this.size = size;
  this.flag = flag;
}

function newPrototype() {
  return new ProtoItem('world', 100500, true);
}

const ClassItem = class {
  constructor(hello, size, flag) {
    this.hello = hello;
    this.size = size;
    this.flag = flag;
  }
};

function newClass() {
  return new ClassItem('world', 100500, true);
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
  return itemFactory('world', 100500, true);
}

function itemFactory(hello, size, flag) {
  return { hello, size, flag };
}

benchmark.do(10000000, [
  closureInstance,
  defineObject,
  defineArray,
  defineArrayOfString,
  defineArrayOfNumber,
  mixinObject,
  newPrototype,
  newClass,
  newObject,
  objectCreate,
  callFactory
]);
