let largestString;

function findLargestString(strings) {
    // set largestString to point to the 
    // longest string found in the strings array passed in
  strings.forEach(function (_string) {
    if (largestString) {
      if (_string.length > largestString.length) {
        largestString = _string;
      }
    } else {
      largestString = _string;
    }
  });
}

findLargestString(['Norma Francia Mendonca', 'Conrad Prem Francis Dsouza', 'Cheryl Nicole Dsouza']);

console.log(largestString);

/***************************************************************************************************/

const userIds = [1, 2, 3];
const users = [];

function fun(cb) {
  setTimeout(cb)
};

// TODO: Fix this for loop by scoping the variable i.
// Do not use a IIFE to get to pass.
// HINT - remember how let and const work with block scope.
for (let i = 0; i < userIds.length; i++) {

  var callback = function () {
    users.push({
      userId: userIds[i]
    });
    console.log(users);
  }

  fun(callback);
}