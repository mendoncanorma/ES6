// repeated strings
console.log("SkillBakery ".repeat(2));

// checking containment
console.log("World".includes("rl"));
console.log("SkillBakery ES6".startsWith("Skill"));
console.log("SkillBakery ES6".endsWith("Bakery"));

// unicode point ecsapes
console.log('\uD83D\uDE80');

// iteration over strings
for (var ch of 'SkillBakery') {
  console.log(ch);
}