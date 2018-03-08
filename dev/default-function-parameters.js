/**
 * Created by nmendonca on 3/7/2018
 */

function makeAjaxRequest (url, method='GET') {
  return method;
}

// returns null
console.log( makeAjaxRequest('google.com', null) );

// returns 'GET'
console.log( makeAjaxRequest('google.com', undefined) );

// returns 'POST'
console.log( makeAjaxRequest('google.com', 'POST') );


console.log("-----------------------------------------------------------------");


function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(1, 2));

console.log("-----------------------------------------------------------------");

function addOffset(style = {}) {
  style.offset = '10px';

  return style;
}

console.log(addOffset());


