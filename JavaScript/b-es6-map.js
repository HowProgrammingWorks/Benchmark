'use strict';

const benchmark = require('./2-benchmark.js');

const cities = new Map();
cities.set('Athens',  { name: 'Афины',  population:   664046 });
cities.set('Rome',    { name: 'Рим',    population:  2627000 });
cities.set('London',  { name: 'Лондон', population:  8674000 });
cities.set('Beijing', { name: 'Пекин',  population: 11510000 });
cities.set('Kiev',    { name: 'Киев',   population:  2804000 });
cities.set('Riga',    { name: 'Рига',   population:   643615 });

const citiesOld = {
  Athens:  { name: 'Афины',  population:   664046 },
  Rome:    { name: 'Рим',    population:  2627000 },
  London:  { name: 'Лондон', population:  8674000 },
  Beijing: { name: 'Пекин',  population: 11510000 },
  Kiev:    { name: 'Киев',   population:  2804000 },
  Riga:    { name: 'Рига',   population:   643615 }
};

const testForInHash = () => {
  const arr = [];
  for (const key in citiesOld) {
    arr.push([ citiesOld[key], key ]);
  }
};

const testForEach = () => {
  const arr = [];
  cities.forEach((value, key) => {
    arr.push([ value, key ]);
  });
};

const testForOf = () => {
  const arr = [];
  for (const [key, value] of cities) {
    arr.push([ value, key ]);
  }
};

const testForOfKeys = () => {
  const arr = [];
  for (const key of cities.keys()) {
    arr.push(key);
  }
};

const testForOfValues = () => {
  const arr = [];
  for (const value of cities.values()) {
    arr.push(value);
  }
};

const testForOfEntries = () => {
  const arr = [];
  for (const [key, value] of cities.entries()) {
    arr.push([ key, value ]);
  }
};

benchmark.do(1000000, [
  testForInHash,
  testForEach,
  testForOf,
  testForOfKeys,
  testForOfValues,
  testForOfEntries,
]);
