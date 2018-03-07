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
