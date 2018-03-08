/**
 * Created by nmendonca on 3/8/2018
 */

function addNumbers (...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number
  }, 0);
};

console.log( addNumbers(1,2,3,4,5,6,7,8,9,10) );

console.log("-----------------------------------------------------------------");

function product(...rest) {
  var numbers = rest;

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

console.log( product(1, 2, 3, 4, 5) );

console.log("-----------------------------------------------------------------");

function unshift(array1, ...array2) {
  return [...array2, ...array1];
}

console.log( unshift([1, 2, 3, 4, 5], 6, 7, 8, 9, 10) );