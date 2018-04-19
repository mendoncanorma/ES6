'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by nmendonca on 3/8/2018
 */

var defaultColors = ['red', 'green'];

var userFavoriteColors = ['orange', 'yellow'];

console.log([].concat(defaultColors, userFavoriteColors));

console.log("-----------------------------------------------------------------");

function join(array1, array2) {
  return [].concat(_toConsumableArray(array1), _toConsumableArray(array2));
}

console.log(join([1, 2, 3], [4, 5, 6]));

console.log("-----------------------------------------------------------------");