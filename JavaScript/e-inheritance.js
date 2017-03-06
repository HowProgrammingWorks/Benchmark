'use strict';

const benchmark = require('./2-benchmark.js');
const dogNames = ['Jack', 'Toby', 'Oscar'];


function PrototypalAnimal(name) {
  this.name = name;
}

PrototypalAnimal.prototype.getName = function() {
  return this.name;
};

function PrototypalDog(...arg) {
  PrototypalAnimal.apply(this, arg);
}

PrototypalDog.prototype.bark = function() {
  return `${this.name} is barking`;
};

PrototypalDog.prototype.__proto__ = PrototypalAnimal.prototype;


function FunctionalAnimal(name) {
  this.name = name;
  this.getName = function() {
    return this.name;
  };
}

function FunctionalDog(...arg) {
  FunctionalAnimal.apply(this, arg);
  this.bark = function() {
    return `${this.name} is barking`;
  };
}


class ES6Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class ES6Dog extends ES6Animal {
  bark() {
    return `${this.name} is barking`;
  }
}


function createPrototypalDogs() {
  return dogNames.map((name) => new PrototypalDog(name));
}

function createFunctionalDogs() {
  return dogNames.map((name) => new FunctionalDog(name));
}

function createES6Dogs() {
  return dogNames.map((name) => new ES6Dog(name));
}


benchmark.do(100000, 3, [
  createPrototypalDogs,
  createFunctionalDogs,
  createES6Dogs
]);
