'use strict';

const benchmark = require('./2-benchmark.js');

const fnLambda = () => {};

const fnExpression = function() {
};

function fnDeclaration() {
}

benchmark.do(10000000, 5, [
  fnDeclaration,
  fnExpression,
  fnLambda,
]);
