/**
 * Created by nmendonca on 3/9/2018
 */
function* numbers() {
  let stuffFromStore,
      cleanClothes,
      groceries;

  console.log("1 ::", stuffFromStore, cleanClothes);

  stuffFromStore = yield 'cash';
  console.log("2 ::", stuffFromStore, cleanClothes);

  cleanClothes = yield 'laundry';
  console.log("3 ::", stuffFromStore, cleanClothes);

  return stuffFromStore;
}

const gen = numbers();

console.log(gen.next('generator 1'));

console.log(gen.next('generator 2'));

console.log(gen.next('generator 3'));