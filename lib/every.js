"use strict";

/**
 * Created by nmendonca on 3/6/2018
 */
var computers = [{ "name": "Apple", "ram": 24 }, { "name": "Compaq", "ram": 4 }, { "name": "Acer", "ram": 32 }],
    allComputersCanRunProgram = true,
    onlySomeComputersCanRunProgram = true;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log("All Computers Can Run Program : ", allComputersCanRunProgram);
console.log("Only Some Computers Can Run Program : ", onlySomeComputersCanRunProgram);

console.log("---------------------------------");

allComputersCanRunProgram = computers.every(function (computer) {
  return computer.ram > 16;
});

console.log("All Computers Can Run Program : ", allComputersCanRunProgram);

console.log("---------------------------------------------------");

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
  return field.validate();
});

console.log("The form is ", formIsValid ? "valid" : "invalid");

console.log("---------------------------------------------------");

var users = [{ id: 21, hasSubmitted: true }, { id: 62, hasSubmitted: false }, { id: 4, hasSubmitted: true }];

var hasSubmitted = users.every(function (user) {
  return user.hasSubmitted === true;
});

console.log("Every user has ", hasSubmitted ? "" : "not", "submitted the form.");