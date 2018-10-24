'use strict';

const benchmark = require('./2-benchmark.js');

// Define Data Source

const data1 = [
  { name: 'Marcus Aurelius',
    birth: new Date('212-04-26'),
    city: 'Rome' },
  { name: 'Victor Glushkov',
    birth: new Date('1923-08-24'),
    city: 'Rostov on Don' },
  { name: 'Ibn Arabi',
    birth: new Date('1165-11-16'),
    city: 'Murcia' },
  { name: 'Mao Zedong',
    birth: new Date('1893-12-26'),
    city: 'Shaoshan' },
  { name: 'Rene Descartes',
    birth: new Date('1596-03-31'),
    city: 'La Haye en Touraine' },
];

const data2 = [
  ['Marcus Aurelius', '212-04-26', 'Rome'],
  ['Victor Glushkov', '1923-08-24', 'Rostov on Don'],
  ['Ibn Arabi', '1165-11-16', 'Murcia'],
  ['Mao Zedong', '1893-12-26', 'Shaoshan'],
  ['Rene Descartes', '1596-03-31', 'La Haye en Touraine']
];

const metadata = {
  name: 'string',
  birth: 'Date',
  city: 'string',
  age() {
    const difference = new Date() - this.birth;
    return Math.floor(difference / 31536000000);
  }
};

// Prepare prototype

function Person() {}

let index = 0;
for (const name in metadata) {
  buildGetter(Person.prototype, name, metadata[name], index++);
}

function buildGetter(proto, fieldName, fieldType, fieldIndex) {
  if (fieldType === 'Date') {
    Object.defineProperty(proto, fieldName, {
      get() {
        return new Date(this[fieldIndex]);
      }
    });
  } else if (typeof fieldType === 'function') {
    Object.defineProperty(proto, fieldName, { get: fieldType });
  } else {
    Object.defineProperty(proto, fieldName, {
      get() {
        return this[fieldIndex];
      }
    });
  }
}

data2.forEach(person => Object.setPrototypeOf(person, Person.prototype));
//data2.forEach(person => person.__proto__ = Person.prototype);

// Define query

const query = person => (
  person.name !== '' &&
  person.age > 18 &&
  person.city === 'Rome'
);

// Execute tests

benchmark.do(1000000, [
  function filterObjects() {
    data1.filter(query);
  },
  function filterArrays() {
    data2.filter(query);
  }
]);
