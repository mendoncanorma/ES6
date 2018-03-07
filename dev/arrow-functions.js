/**
 * Created by nmendonca on 3/7/2018
 */

const double = (number => number * 2);
// const double = number => number * 2;

console.log(double(2));

console.log("-----------------------------------------------------------------");

const teama = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    var self = this;
    return this.members.map(function (member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};

console.log( teama.teamSummary() );

console.log("-----------------------------------------------------------------");

const teamb = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    var self = this;
    return this.members.map(function (member) {
      return `${member} is on team ${self.teamName}`;
    }.bind(this));
  }
};

console.log( teamb.teamSummary() );


console.log("-----------------------------------------------------------------");

const teamc = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${teamc.teamName}`;
    }.bind(this));
  }
};

console.log( teamb.teamSummary() );


console.log("-----------------------------------------------------------------");

const teamd = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

console.log( teamd.teamSummary() );

console.log("-----------------------------------------------------------------");

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log( fibonacci(10) );

console.log("-----------------------------------------------------------------");

const profile = {
  name: 'Alex',
  getName () {
    return this.name;
  }
};

console.log( profile.getName() );