'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = new Map();
{
  var key1 = Symbol();
  a.set(key1, 'SkillBakery');

  var key2 = Symbol();
  a.set(key2, 'SkillBakery');

  console.log(a);
}

console.log(a.size);

var courseName = Symbol();

var course = _defineProperty({
  publisher: "SkillBakery"
}, courseName, "ES6");

console.log(course);

var props = [];
for (var prop in course) {
  props.push(prop);
}

console.log(props);