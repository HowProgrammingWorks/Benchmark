'use strict';

const benchmark = require('./2-benchmark.js');

const cities = new Map();
cities.set('Athens',  { name: 'Афины',  population:   664046 });
cities.set('Rome',    { name: 'Рим',    population:  2627000 });
cities.set('London',  { name: 'Лондон', population:  8674000 });
cities.set('Beijing', { name: 'Пекин',  population: 11510000 });
cities.set('Kiev',    { name: 'Киев',   population:  2804000 });
cities.set('Riga',    { name: 'Рига',   population:   643615 });

function testForEach() {
  const arr = [];
  cities.forEach((value, key) => {
    arr.push([ value, key ]);
  });
}

function testForOf() {
  const arr = [];
  for (let [key, value] of cities) {
    arr.push([ value, key ]);
  }
}

function testForOfKeys() {
  const arr = [];
  for (let key of cities.keys()) {
    arr.push(key);
  }
}

function testForOfValues() {
  const arr = [];
  for (let value of cities.values()) {
    arr.push(value);
  }
}

function testForOfEntries() {
  const arr = [];
  for (let [key, value] of cities.entries()) {
    arr.push([ key, value ]);
  }
}

benchmark.do(1000000, 4, [
  testForEach,
  testForOf,
  testForOfKeys,
  testForOfValues,
  testForOfEntries,
]);
