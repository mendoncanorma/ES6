'use strict';

/**
 * Created by nmendonca on 3/6/2018
 */

var numbers = [10, 20, 30];

var result = numbers.reduce(function (sum, number) {
  return sum + number;
}, 25);

console.log(result);

console.log("---------------------------------------------------");

var primaryColors = [{ color: 'red' }, { color: 'green' }, { color: 'blue' }];

var colors = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

console.log(colors);

console.log("---------------------------------------------------");

function balancedParens(string) {

  var arrString = string.split("");

  var counter = arrString.reduce(function (previousValue, currentValue) {
    if (previousValue < 0) {
      return previousValue;
    }
    if (currentValue === "(") {
      return previousValue + 1;
    }
    if (currentValue === ")") {
      return previousValue - 1;
    }
  }, 0);

  return counter;
}

console.log(balancedParens("))))(((("));

console.log("---------------------------------------------------");

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (totalDistance, distance) {
  return totalDistance + distance.distance;
}, 0);

console.log(totalDistance);

console.log("---------------------------------------------------");

var desks = [{ type: 'sitting' }, { type: 'standing' }, { type: 'sitting' }, { type: 'sitting' }, { type: 'standing' }];

var deskTypes = desks.reduce(function (previousValue, currentValue) {
  if (currentValue.type === 'sitting') {
    previousValue.sitting++;
  } else if (currentValue.type === 'standing') {
    previousValue.standing++;
  }

  return previousValue;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

console.log("---------------------------------------------------");

function unique(arrNumbers) {
  return arrNumbers.reduce(function (previousNumber, currentNumber) {
    if (previousNumber.indexOf(currentNumber) === -1) {
      previousNumber.push(currentNumber);
    }
    return previousNumber;
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];

var uniqueNumbers = unique(numbers);

console.log(uniqueNumbers);