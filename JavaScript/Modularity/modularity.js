'use strict';

const benchmark = require('../2-benchmark.js');

const test1api = {
  moduleName: {
    submodule1: require('./lib1/submodule1'),
    submodule2: require('./lib1/submodule2')
  }
};

const test2api = {
  moduleName: {
    submodule1: require('./lib2/submodule1'),
    submodule2: require('./lib2/submodule2')
  }
};

const test3api = {};
test3api.moduleName = {};
require('./lib3/submodule1')(test3api);
require('./lib3/submodule2')(test3api);

console.dir(test1api);
console.dir(test2api);
console.dir(test3api);

function test1() {
  const a = test1api.moduleName.submodule1.first('Value');
  const b = test1api.moduleName.submodule1.second(a);
  const c = test1api.moduleName.submodule2.third(b);
  const d = test1api.moduleName.submodule2.fourth(c);
  return d;
}

function test2() {
  const a = test2api.moduleName.submodule1.first('Value');
  const b = test2api.moduleName.submodule1.second(a);
  const c = test2api.moduleName.submodule2.third(b);
  const d = test2api.moduleName.submodule2.fourth(c);
  return d;
}

function test3() {
  const a = test3api.moduleName.first('Value');
  const b = test3api.moduleName.second(a);
  const c = test3api.moduleName.third(b);
  const d = test3api.moduleName.fourth(c);
  return d;
}

benchmark.do(100000000, 10, [
  test1,
  test2,
  test3
]);
