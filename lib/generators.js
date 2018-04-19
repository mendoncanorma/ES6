"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(numbers);

/**
 * Created by nmendonca on 3/9/2018
 */
function numbers() {
  var stuffFromStore, cleanClothes, groceries;
  return regeneratorRuntime.wrap(function numbers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          stuffFromStore = void 0, cleanClothes = void 0, groceries = void 0;


          console.log("1 ::", stuffFromStore, cleanClothes);

          _context.next = 4;
          return 'cash';

        case 4:
          stuffFromStore = _context.sent;

          console.log("2 ::", stuffFromStore, cleanClothes);

          _context.next = 8;
          return 'laundry';

        case 8:
          cleanClothes = _context.sent;

          console.log("3 ::", stuffFromStore, cleanClothes);

          return _context.abrupt("return", stuffFromStore);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var gen = numbers();

console.log(gen.next('generator 1'));

console.log(gen.next('generator 2'));

console.log(gen.next('generator 3'));