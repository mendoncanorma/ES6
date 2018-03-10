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

const toyota = new Toyota({color: 'red', title: 'Daily driver'});

console.log( toyota.drive() );
console.log( toyota.honk() );

console.log("-----------------------------------------------------------------");

class CarES6 {

  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "vroom";
  }

};

const car = new CarES6({title: "Toyota"});
console.log(car);
console.log(car.drive());

console.log("-----------------------------------------------------------------");

class Monster {
  constructor (options) {
    this.health = 100;
    this.name = options.name;
  }
}

monster1 = new Monster({name: "Cheryl"});

console.log(monster1);

class Snake extends Monster {
  constructor (options) {
    super(options);
  }
  bite () {

  }
}

snake1 = new Snake({name: "Norma"});

console.log(snake1);