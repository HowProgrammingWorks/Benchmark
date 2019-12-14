'use strict';

const benchmark = require('../2-benchmark.js');

function fieldKnown(field) {
  switch (field) {
  case 'Content-Type':
  case 'content-type': return 'content-type';
  case 'Content-Length':
  case 'content-length': return 'content-length';
  case 'User-Agent':
  case 'user-agent': return 'user-agent';
  case 'Referer':
  case 'referer': return 'referer';
  case 'Host':
  case 'host': return 'host';
  case 'Authorization':
  case 'authorization': return 'authorization';
  case 'Proxy-Authorization':
  case 'proxy-authorization': return 'proxy-authorization';
  case 'If-Modified-Since':
  case 'if-modified-since': return 'if-modified-since';
  case 'If-Unmodified-Since':
  case 'if-unmodified-since': return 'if-unmodified-since';
  case 'From':
  case 'from': return 'from';
  case 'Location':
  case 'location': return 'location';
  case 'Max-Forwards':
  case 'max-forwards': return 'max-forwards';
  case 'Retry-After':
  case 'retry-after': return 'retry-after';
  case 'ETag':
  case 'etag': return 'etag';
  case 'Last-Modified':
  case 'last-modified': return 'last-modified';
  case 'Server':
  case 'server': return 'server';
  case 'Age':
  case 'age': return 'age';
  case 'Expires':
  case 'expires': return 'expires';
  case 'Set-Cookie':
  case 'set-Cookie': return '\u0001';
  case 'Cookie':
  case 'cookie': return '\u0002cookie';
  case 'Transfer-Encoding':
  case 'transfer-encoding': return '\u0000transfer-encoding';
  case 'Date':
  case 'date': return '\u0000date';
  case 'Connection':
  case 'connection': return '\u0000connection';
  case 'Cache-Control':
  case 'cache-control': return '\u0000cache-control';
  case 'Vary':
  case 'vary': return '\u0000vary';
  case 'Content-Encoding':
  case 'content-encoding': return '\u0000content-encoding';
  case 'Origin':
  case 'origin': return '\u0000origin';
  case 'Upgrade':
  case 'upgrade': return '\u0000upgrade';
  case 'Expect':
  case 'expect': return '\u0000expect';
  case 'If-Match':
  case 'if-match': return '\u0000if-match';
  case 'If-None-Match':
  case 'if-none-match': return '\u0000if-none-match';
  case 'Accept':
  case 'accept': return '\u0000accept';
  case 'Accept-Encoding':
  case 'accept-encoding': return '\u0000accept-encoding';
  case 'Accept-Language':
  case 'accept-language': return '\u0000accept-language';
  case 'X-Forwarded-For':
  case 'x-forwarded-for': return '\u0000x-forwarded-for';
  case 'X-Forwarded-Host':
  case 'x-forwarded-host': return '\u0000x-forwarded-host';
  case 'X-Forwarded-Proto':
  case 'x-forwarded-proto': return '\u0000x-forwarded-proto';
  }
}

function lowerKnown(field) {
  switch (field) {
  case 'content-type': return 'content-type';
  case 'content-length': return 'content-length';
  case 'user-agent': return 'user-agent';
  case 'referer': return 'referer';
  case 'host': return 'host';
  case 'authorization': return 'authorization';
  case 'proxy-authorization': return 'proxy-authorization';
  case 'if-modified-since': return 'if-modified-since';
  case 'if-unmodified-since': return 'if-unmodified-since';
  case 'from': return 'from';
  case 'location': return 'location';
  case 'max-forwards': return 'max-forwards';
  case 'retry-after': return 'retry-after';
  case 'etag': return 'etag';
  case 'last-modified': return 'last-modified';
  case 'server': return 'server';
  case 'age': return 'age';
  case 'expires': return 'expires';
  case 'set-Cookie': return '\u0001';
  case 'cookie': return '\u0002cookie';
  case 'transfer-encoding': return '\u0000transfer-encoding';
  case 'date': return '\u0000date';
  case 'connection': return '\u0000connection';
  case 'cache-control': return '\u0000cache-control';
  case 'vary': return '\u0000vary';
  case 'content-encoding': return '\u0000content-encoding';
  case 'origin': return '\u0000origin';
  case 'upgrade': return '\u0000upgrade';
  case 'expect': return '\u0000expect';
  case 'if-match': return '\u0000if-match';
  case 'if-none-match': return '\u0000if-none-match';
  case 'accept': return '\u0000accept';
  case 'accept-encoding': return '\u0000accept-encoding';
  case 'accept-language': return '\u0000accept-language';
  case 'x-forwarded-for': return '\u0000x-forwarded-for';
  case 'x-forwarded-host': return '\u0000x-forwarded-host';
  case 'x-forwarded-proto': return '\u0000x-forwarded-proto';
  }
}

function matchKnownFields4(field) {
  let toLower;
  toLower = fieldKnown(field);
  if (toLower) return toLower;
  field = field.toLowerCase();
  toLower = lowerKnown(field);
  if (toLower) return toLower;
  return '\u0000' + field;
}

function testMatchKnownFields4() {
  return [
    matchKnownFields4('Authorization'),
    matchKnownFields4('if-unmodified-since'),
    matchKnownFields4('Content-Type'),
    matchKnownFields4('last-modified'),
    matchKnownFields4('X-Forwarded-For'),
    matchKnownFields4('accept'),
    matchKnownFields4('Cache-Control'),
    matchKnownFields4('cookie')
  ];
}

benchmark.do(10000000, [testMatchKnownFields4]);
