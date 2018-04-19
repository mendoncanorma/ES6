"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by nmendonca on 3/8/2018
 */

function addNumbers() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("-----------------------------------------------------------------");

function product() {
  for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rest[_key2] = arguments[_key2];
  }

  var numbers = rest;

  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}

console.log(product(1, 2, 3, 4, 5));

console.log("-----------------------------------------------------------------");

function unshift(array1) {
  for (var _len3 = arguments.length, array2 = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    array2[_key3 - 1] = arguments[_key3];
  }

  return [].concat(array2, _toConsumableArray(array1));
}

console.log(unshift([1, 2, 3, 4, 5], 6, 7, 8, 9, 10));