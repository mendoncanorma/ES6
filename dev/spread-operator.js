/**
 * Created by nmendonca on 3/8/2018
 */

const defaultColors = ['red', 'green'];

const userFavoriteColors = ['orange', 'yellow'];

console.log( [...defaultColors, ...userFavoriteColors] );

console.log("-----------------------------------------------------------------");


function join(array1, array2) {
  return [...array1, ...array2];
}

console.log(join([1, 2, 3], [4, 5, 6]));

console.log("-----------------------------------------------------------------");