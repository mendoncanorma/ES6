"use strict";

// repeated strings
console.log("SkillBakery ".repeat(2));

// checking containment
console.log("World".includes("rl"));
console.log("SkillBakery ES6".startsWith("Skill"));
console.log("SkillBakery ES6".endsWith("Bakery"));

// unicode point ecsapes
console.log("\uD83D\uDE80");

// iteration over strings
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = 'SkillBakery'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var ch = _step.value;

    console.log(ch);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}