'use strict';

const benchmark = require('./2-benchmark.js');

const fnLambdaBlock = () => {};
// eslint-disable-next-line
const fnLambdaBlockU = () => { return; };
// eslint-disable-next-line
const fnLambdaBlockN = () => { return null; };
// eslint-disable-next-line
const fnLambdaBlock0 = () => { return 0; };

const fnLambdaExprU = () => undefined;
const fnLambdaExprN = () => null;
const fnLambdaExpr0 = () => 0;

const fnExpression = function() {};
const fnExpressionU = function() { return; };
const fnExpressionN = function() { return null; };
const fnExpression0 = function() { return 0; };

function fnDeclaration() {}
function fnDeclarationU() { return; }
function fnDeclarationN() { return null; }
function fnDeclaration0() { return 0; }

benchmark.do(10000000, [
  fnLambdaBlock,
  fnLambdaBlockU,
  fnLambdaBlockN,
  fnLambdaBlock0,
  fnLambdaExprU,
  fnLambdaExprN,
  fnLambdaExpr0,
  fnDeclaration,
  fnDeclarationU,
  fnDeclarationN,
  fnDeclaration0,
  fnExpression,
  fnExpressionU,
  fnExpressionN,
  fnExpression0
]);
