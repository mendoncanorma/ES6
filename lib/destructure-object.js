'use strict';

/**
 * Created by nmendonca on 3/8/2018
 */

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(_ref, _ref2) {
  var name = _ref.name,
      extension = _ref.extension,
      size = _ref.size;
  var color = _ref2.color;

  return 'The file ' + name + '.' + extension + ' is of size ' + size + ' and color ' + color;
}

console.log(fileSummary(savedFile, { color: 'red' }));

console.log("---------------------------------------------------");

function currentDate() {
  return {
    d: 15,
    m: 7,
    y: 2015
  };
}

var _currentDate = currentDate(),
    d = _currentDate.d,
    m = _currentDate.m,
    y = _currentDate.y;

var _currentDate2 = currentDate(),
    day = _currentDate2.d,
    month = _currentDate2.m,
    year = _currentDate2.y;

console.log(d, m, y);
console.log(day, month, year);

console.log("---------------------------------------------------");

var course = { name: "name", publisher: "publisher" };
var name = course.name,
    publisher = course.publisher,
    price = course.price;

console.log(name, publisher, price);