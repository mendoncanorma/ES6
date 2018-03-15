/**
 * Created by nmendonca on 3/11/2018
 */

var words = ['Skill', 'Bakery', 'Studio'];

// entries - looping array 

for (let word of words.entries()) {
  console.log(word);
}

// values

var mapArray = new Map();

mapArray.set({name: 'Norma Mendonca'}, "Nimma");
mapArray.set({employee: 'McFadyen Solutions'}, "Digital");

for (let mapValue of mapArray.values()) {
 console.log(mapValue);
}

console.log("-----------------------------------------------------------------");

//keys

var setArray = new Set([10, 20, 30, 40]);

for (let setValue of setArray.keys()) {
  console.log(setValue);
}