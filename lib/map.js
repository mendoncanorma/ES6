"use strict";

/**
 * Created by nmendonca on 3/5/2018
 */
var doubled = [],
    numbers = [1, 2, 3];

doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

/* --------------------------------------------------------- */

var cars = [{ "name": "Safari", "price": "Expensive" }, { "name": "Nano", "price": "Cheap" }];

var price = cars.map(function (car) {
  return car.price;
});

console.log(price);

/* --------------------------------------------------------- */

function pluck(array, property) {
  return array.map(function (obj) {
    return obj[property];
  });
}

var paints = [{ color: 'red', paint: 1 }, { color: 'blue', paint: 2 }, { color: 'yellow', paint: 3 }];
var property = 'color';

console.log(pluck(paints, property));