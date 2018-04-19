'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by nmendonca on 3/9/2018
 */

/* ES6 way of writing classes */
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'vroom';
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'beep';
};

var toyota = new Toyota({ color: 'red', title: 'Daily driver' });

console.log(toyota.drive());
console.log(toyota.honk());

console.log("-----------------------------------------------------------------");

var CarES6 = function () {
  function CarES6(_ref) {
    var title = _ref.title;

    _classCallCheck(this, CarES6);

    this.title = title;
  }

  _createClass(CarES6, [{
    key: 'drive',
    value: function drive() {
      return "vroom";
    }
  }]);

  return CarES6;
}();

;

var car = new CarES6({ title: "Toyota" });
console.log(car);
console.log(car.drive());

console.log("-----------------------------------------------------------------");

var Monster = function Monster(options) {
  _classCallCheck(this, Monster);

  this.health = 100;
  this.name = options.name;
};

monster1 = new Monster({ name: "Cheryl" });

console.log(monster1);

var Snake = function (_Monster) {
  _inherits(Snake, _Monster);

  function Snake(options) {
    _classCallCheck(this, Snake);

    return _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, options));
  }

  _createClass(Snake, [{
    key: 'bite',
    value: function bite() {}
  }]);

  return Snake;
}(Monster);

snake1 = new Snake({ name: "Norma" });

console.log(snake1);
//# sourceMappingURL=classes-grunt.js.map
