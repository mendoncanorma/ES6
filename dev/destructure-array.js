/**
 * Created by nmendonca on 3/8/2018
 */


const companies  = ['Google', 'Facebook', 'Uber'];

const [name, ...rest] = companies
const { length } = companies;

console.log( name, length, rest );

console.log("-----------------------------------------------------------------");

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

console.log( isEngineer(profile) );

console.log("-----------------------------------------------------------------");

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map( ([subject, time, teacher]) => {
  return {subject, time, teacher};
});

console.log( classesAsObject );

console.log("-----------------------------------------------------------------");

const numbers = [1, 2, 3];

function double([a, b, c]) {
  return [a*2, b*2, c*2]
}

console.log(double([1, 2, 3]));

console.log("-----------------------------------------------------------------");


console.log("-----------------------------------------------------------------");
