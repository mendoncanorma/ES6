let a = new Map();
{
  let key1 = Symbol();
  a.set(key1, 'SkillBakery');
  
  let key2 = Symbol();
  a.set(key2, 'SkillBakery');
  
  console.log(a);
}

console.log(a.size);

let courseName = Symbol();

let course = {
  publisher: "SkillBakery",
  [courseName]: "ES6"
};

console.log(course);

var props = [];
for (var prop in course) {
  props.push(prop);
}

console.log(props);


