/**
 * Created by nmendonca on 3/8/2018
 */

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary ({name, extension, size}, {color}) {
  return `The file ${name}.${extension} is of size ${size} and color ${color}`;
}

console.log( fileSummary(savedFile, {color: 'red'}) );

console.log("---------------------------------------------------");

function currentDate() {
  return {
    d: 15,
    m: 7,
    y: 2015
  };
}

var {d, m, y } = currentDate();
var {d: day, m: month, y: year } = currentDate();

console.log( d, m, y );
console.log( day, month, year );

console.log("---------------------------------------------------");

let course = {name: "name", publisher: "publisher"};
let {name, publisher, price} = course;
console.log(name, publisher, price);