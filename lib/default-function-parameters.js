'use strict';

/**
 * Created by nmendonca on 3/7/2018
 */

function makeAjaxRequest(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';

  return method;
}

// returns null
console.log(makeAjaxRequest('google.com', null));

// returns 'GET'
console.log(makeAjaxRequest('google.com', undefined));

// returns 'POST'
console.log(makeAjaxRequest('google.com', 'POST'));

console.log("-----------------------------------------------------------------");

function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return a + b;
}

console.log(sum(1, 2));

console.log("-----------------------------------------------------------------");

function addOffset() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  style.offset = '10px';

  return style;
}

console.log(addOffset());