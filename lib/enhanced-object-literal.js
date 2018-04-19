'use strict';

/**
 * Created by nmendonca on 3/7/2018
 */

// function createBookShop (inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function () {
//       return this.inventory.reduce(function (total, book) {
//         return total + book.price;
//       }, 0);
//     },
//     priceForTitle: function (title) {
//       return this.inventory.find(function (book) {
//         return book.title === title;
//       }).price;
//     }
//   };
// }

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function inventoryValue() {
      return this.inventory.reduce(function (total, book) {
        return total + book.price;
      }, 0);
    },
    priceForTitle: function priceForTitle(title) {
      return this.inventory.find(function (book) {
        return book.title === title;
      }).price;
    }
  };
}

var inventory = [{ title: 'Harry Potter', price: 10 }, { title: 'Eloquent JavaScript', price: 15 }];

var bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());

console.log(bookShop.priceForTitle('Harry Potter'));

console.log("-----------------------------------------------------------------");

var red = '#ff0000';
var blue = '#0000ff';

var COLORS = { red: red, blue: blue };

console.log(COLORS);

console.log("-----------------------------------------------------------------");

var fields = ['firstName', 'lastName', 'phoneNumber'];

var props = { fields: fields };

console.log(props);

console.log("-----------------------------------------------------------------");

var canvasDimensions = function canvasDimensions(width, initialHeight) {
  var height = initialHeight * 9 / 16;
  return {
    width: width,
    height: height
  };
};

console.log(canvasDimensions(100, 50));

console.log("-----------------------------------------------------------------");

var color = 'red';

var Car = {
  color: color,
  drive: function drive() {
    return 'Vroom!';
  },
  getColor: function getColor() {
    return this.color;
  }
};

console.log("-----------------------------------------------------------------");