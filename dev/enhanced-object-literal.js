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

function createBookShop (inventory) {
  return {
    inventory,
    inventoryValue () {
      return this.inventory.reduce(function (total, book) {
        return total + book.price;
      }, 0);
    },
    priceForTitle (title) {
      return this.inventory.find(function (book) {
        return book.title === title;
      }).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Eloquent JavaScript', price: 15}
];

const bookShop = createBookShop(inventory);

console.log( bookShop.inventoryValue() );

console.log( bookShop.priceForTitle('Harry Potter') );

console.log("-----------------------------------------------------------------");

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

console.log(COLORS);

console.log("-----------------------------------------------------------------");

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

console.log(props);

console.log("-----------------------------------------------------------------");

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}

console.log(canvasDimensions(100, 50));

console.log("-----------------------------------------------------------------");

const color = 'red';

const Car = {
  color,
  drive () {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

console.log("-----------------------------------------------------------------");