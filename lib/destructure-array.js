'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by nmendonca on 3/8/2018
 */

var companies = ['Google', 'Facebook', 'Uber'];

var name = companies[0],
    rest = companies.slice(1);
var length = companies.length;


console.log(name, length, rest);

console.log("-----------------------------------------------------------------");

var profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(_ref) {
  var title = _ref.title,
      department = _ref.department;

  return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile));

console.log("-----------------------------------------------------------------");

var classes = [['Chemistry', '9AM', 'Mr. Darnick'], ['Physics', '10:15AM', 'Mrs. Lithun'], ['Math', '11:30AM', 'Mrs. Vitalis']];

var classesAsObject = classes.map(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 3),
      subject = _ref3[0],
      time = _ref3[1],
      teacher = _ref3[2];

  return { subject: subject, time: time, teacher: teacher };
});

console.log(classesAsObject);

console.log("-----------------------------------------------------------------");

var numbers = [1, 2, 3];

function double(_ref4) {
  var _ref5 = _slicedToArray(_ref4, 3),
      a = _ref5[0],
      b = _ref5[1],
      c = _ref5[2];

  return [a * 2, b * 2, c * 2];
}

console.log(double([1, 2, 3]));

console.log("-----------------------------------------------------------------");

var numbers_nested = [1, 2, [3, 4, 5]];

var first_n = numbers_nested[0],
    second_n = numbers_nested[1],
    _numbers_nested$ = _slicedToArray(numbers_nested[2], 3),
    third_n = _numbers_nested$[0],
    fourth_n = _numbers_nested$[1],
    fifth_n = _numbers_nested$[2];

console.log(first_n, second_n, third_n, fourth_n, fifth_n);

console.log("-----------------------------------------------------------------");