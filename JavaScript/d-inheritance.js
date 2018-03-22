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


class ClassBasedAnimal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class ClassBasedDog extends ClassBasedAnimal {
  bark() {
    return `${this.name} is barking`;
  }
}


function createPrototypalDogs() {
  return dogNames.map((name) => new PrototypalDog(name));
}

function createClassBasedDogs() {
  return dogNames.map((name) => new ClassBasedDog(name));
}


benchmark.do(100000, 3, [
  createPrototypalDogs,
  createClassBasedDogs
]);
