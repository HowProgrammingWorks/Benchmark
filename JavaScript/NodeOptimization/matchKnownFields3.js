'use strict';

const benchmark = require('../2-benchmark.js');

const HTTP_HDR_TO_LOWER = {
  'Content-Type': 'content-type',
  'Content-Length': 'content-length',
  'User-Agent': 'user-agent',
  'Referer': 'referer',
  'Host': 'host',
  'Authorization': 'authorization',
  'Proxy-Authorization': 'proxy-authorization',
  'If-Modified-Since': 'if-modified-since',
  'If-Unmodified-Since': 'if-unmodified-since',
  'From': 'from',
  'Location': 'location',
  'Max-Forwards': 'max-forwards',
  'Retry-After': 'retry-after',
  'ETag': 'etag',
  'Last-Modified': 'last-modified',
  'Server': 'server',
  'Age': 'age',
  'Expires': 'expires'
};

{
  let key, value;
  for (key in HTTP_HDR_TO_LOWER) {
    value = HTTP_HDR_TO_LOWER[key];
    HTTP_HDR_TO_LOWER[value] = value;
  }
}

HTTP_HDR_TO_LOWER['Set-Cookie'] = '\u0001';
HTTP_HDR_TO_LOWER['set-Cookie'] = '\u0001';
HTTP_HDR_TO_LOWER['Cookie'] = '\u0002cookie';
HTTP_HDR_TO_LOWER['cookie'] = '\u0002cookie';

const HTTP_HDR_TO_LOWER_0 = {
  'Transfer-Encoding': 'transfer-encoding',
  'Date': 'date',
  'Connection': 'connection',
  'Cache-Control': 'cache-control',
  'Vary': 'vary',
  'Content-Encoding': 'content-encoding',
  'Origin': 'origin',
  'Upgrade': 'upgrade',
  'Expect': 'expect',
  'If-Match': 'if-match',
  'If-None-Match': 'if-none-match',
  'Accept': 'accept',
  'Accept-Encoding': 'accept-encoding',
  'Accept-Language': 'accept-language',
  'X-Forwarded-For': 'x-forwarded-for',
  'X-Forwarded-Host': 'x-forwarded-host',
  'X-Forwarded-Proto': 'x-forwarded-proto'
};

{
  let key, value, data;
  for (key in HTTP_HDR_TO_LOWER_0) {
    value = HTTP_HDR_TO_LOWER_0[key];
    data = '\u0000' + value;
    HTTP_HDR_TO_LOWER[key] = data;
    HTTP_HDR_TO_LOWER[value] = data;
  }
}

const httpHdrToLowerMap = new Map();

{
  let key, value;
  for (key in HTTP_HDR_TO_LOWER) {
    value = HTTP_HDR_TO_LOWER[key];
    httpHdrToLowerMap.set(key, value);
  }
}

function matchKnownFields3(field) {
  let toLower;
  toLower = httpHdrToLowerMap.get(field);
  if (toLower) return toLower;
  field = field.toLowerCase();
  toLower = httpHdrToLowerMap.get(field);
  if (toLower) return toLower;
  return '\u0000' + field;
}

function testMatchKnownFields3() {
  return [
    matchKnownFields3('Authorization'),
    matchKnownFields3('if-unmodified-since'),
    matchKnownFields3('Content-Type'),
    matchKnownFields3('last-modified'),
    matchKnownFields3('X-Forwarded-For'),
    matchKnownFields3('accept'),
    matchKnownFields3('Cache-Control'),
    matchKnownFields3('cookie')
  ];
}

benchmark.do(10000000, [testMatchKnownFields3]);
