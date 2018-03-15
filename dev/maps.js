/**
 * Created by nmendonca on 3/11/2018
 */

var m = new Map();
sb = {name: 'SkillBakery'};
m.set(sb, 'Learning ES6');

console.log(m.has(sb));
console.log(m.get(sb));

console.log(sb);

for (var item of m.values()) {
  console.log(item);
}