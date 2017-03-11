'use strict';

const creaters = {};
module.exports = creaters;

creaters.arraySize = 1000; // Size of arrays in tests

// Create array that consist of arraySize elements using mixins
creaters.mixinCreate = function mixinCreate() {

  // Function for adding properties and funсtions to object
  const extend = (obj, mixin) => (
    Object.keys(mixin).forEach(key => obj[key] = mixin[key]), obj
  );

  // Creating mix
  const mix = {
    age: 0,
    name: 'Anonimus',

    toString() {
      return this.name + ' was born ' + this.age + ' years ago.';
    },

    changeAge(newAge) {
      if (newAge >= 0) this.age = newAge;
      return this;
    },

    changeName(newName) {
      if (newName) this.name = newName;
      return this;
    }
  };

  // Creating array of objects
  const array = [];
  array.lenght = creaters.arraySize;

  let counter;
  for (counter = 0; counter < creaters.arraySize; counter++) {
    array[counter] = extend({}, mix);
  }

  return array;
};

// Create array that consist of arraySize elements using classes
creaters.classCreate = function classCreate() {

  // Creating class
  class SomeClass {
    constructor() {
      this.name = 'Anonimus';
      this.age = 0;
    }

    toString() {
      return this.name + ' was born ' + this.age + ' years ago.';
    }

    changeAge(newAge) {
      if (newAge >= 0) this.age = newAge;
      return this;
    }

    changeName(newName) {
      if (newName) this.name = newName;
      return this;
    }
  }

  // Creating array of objects
  const array = [];
  array.lenght = creaters.arraySize;

  let counter;
  for (counter = 0; counter < creaters.arraySize; counter++) {
    array[counter] = new SomeClass();
  }

  return array;
};

// Create array that consist of arraySize elements using prototypes
creaters.prototypeCreate = function prototypeCreate() {

  // Creating class
  const Creater = function() {
    this.name = 'Anonimus';
    this.age = 0;
  };

  Creater.prototype.toString = () => {
    return this.name + ' was born ' + this.age + ' years ago.';
  };

  Creater.prototype.changeAge = (newAge) => {
    if (newAge >= 0) this.age = newAge;
    return this;
  };

  Creater.prototype.changeName = (newName) => {
    if (newName) this.name = newName;
    return this;
  };

  // Creating array of objects
  const array = [];
  array.lenght = creaters.arraySize;

  let counter;
  for (counter = 0; counter < creaters.arraySize; counter++) {
    array[counter] = new Creater();
  }

  return array;
};

// Create array that consist of arraySize elements using closures
creaters.closureCreate = function closureCreate() {

  // Creating closure
  const Closure = () => {

    let name = 'Anonimus';
    let age = 0;

    return {
      toString() {
        return name + ' was born ' + age + ' years ago.';
      },

      changeAge(newAge) {
        if (newAge >= 0) age = newAge;
      },

      changeName(newName) {
        if (newName) name = newName;
      }
    };
  };

  // Creating array of objects
  const array = [];
  array.lenght = creaters.arraySize;

  let counter;
  for (counter = 0; counter < creaters.arraySize; counter++) {
    array[counter] = Closure();
  }

  return array;
};

// Testing
if (module.parent === null) {
  const benchmark = require('./2-benchmark.js');
  console.log('Creation + using arrays. Size = ' + creaters.arraySize + ':\n');
  benchmark.do(1000, 3, [
    creaters.mixinCreate,
    creaters.classCreate,
    creaters.prototypeCreate,
    creaters.closureCreate
  ]);
}
