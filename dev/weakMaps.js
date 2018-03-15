var weak = new WeakMap();

//weak.set('publisher', 'skillbakery');
//console.log(weak.get('publisher'));

console.log("------------------------------------------------------------------");

var course = {name: 'ES6 Next Level', publisher: 'SkillBakery'};
var company = {name: 'SkillBakery'};

weak.set(course, {price: 59});
weak.set(company, "SB");

console.log(weak);

company = null;

console.log(weak.get(company));

console.log(weak.has(course));

weak.delete(course);

console.log(weak);