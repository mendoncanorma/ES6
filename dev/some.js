/**
 * Created by nmendonca on 3/6/2018
 */
var computers = [
      {"name": "Apple", "ram": 24},
      {"name": "Compaq", "ram": 4},
      {"name": "Acer", "ram": 32}
    ],
    allComputersCanRunProgram = true,
    onlySomeComputersCanRunProgram = true;

for (var i=0; i<computers.length; i++) {
  var computer = computers[i];

  if ( computer.ram < 16 ) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log("All Computers Can Run Program : ", allComputersCanRunProgram);
console.log("Only Some Computers Can Run Program : ", onlySomeComputersCanRunProgram);

console.log("---------------------------------------------------");

allComputersCanRunProgram = computers.some(function (computer) {
  return computer.ram > 16;
});

console.log("All Computers Can Run Program : ", allComputersCanRunProgram);

console.log("---------------------------------------------------");

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function (request) {
  return request.status === 'complete';
});

console.log(inProgress);
