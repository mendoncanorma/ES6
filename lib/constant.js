"use strict";

var negativeNumbers = [];

function extractNegativeNumbers(numbers) {
  // append any negative numbers found in the numbers array 
  // into the negativeNumbers array constant variable above
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 && negativeNumbers.indexOf(numbers[i]) === -1) {
      negativeNumbers.push(numbers[i]);
    }
  }
}

extractNegativeNumbers([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -1, -2, -10]);

console.log(negativeNumbers);