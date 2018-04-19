'use strict';

/**
 * Created by nmendonca on 3/7/2018
 */

/* ES5  code*/
// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

/* ES6 code */
function doubleMessage(number) {
  return 'Your number doubled is ' + number * 2;
}

console.log(doubleMessage(2));

console.log("-----------------------------------------------------------------");

/* ES5  code*/
// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

/* ES6 Code */
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(fullName('Norma', 'Mendonca'));