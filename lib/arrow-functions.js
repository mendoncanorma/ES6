'use strict';

/**
 * Created by nmendonca on 3/7/2018
 */

var double = function double(number) {
  return number * 2;
};
// const double = number => number * 2;

console.log(double(2));

console.log("-----------------------------------------------------------------");

var teama = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    var self = this;
    return this.members.map(function (member) {
      return member + ' is on team ' + self.teamName;
    });
  }
};

console.log(teama.teamSummary());

console.log("-----------------------------------------------------------------");

var teamb = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    var self = this;
    return this.members.map(function (member) {
      return member + ' is on team ' + self.teamName;
    }.bind(this));
  }
};

console.log(teamb.teamSummary());

console.log("-----------------------------------------------------------------");

var teamc = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    return this.members.map(function (member) {
      return member + ' is on team ' + teamc.teamName;
    }.bind(this));
  }
};

console.log(teamb.teamSummary());

console.log("-----------------------------------------------------------------");

var teamd = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function teamSummary() {
    var _this = this;

    return this.members.map(function (member) {
      return member + ' is on team ' + _this.teamName;
    });
  }
};

console.log(teamd.teamSummary());

console.log("-----------------------------------------------------------------");

var fibonacci = function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));

console.log("-----------------------------------------------------------------");

var profile = {
  name: 'Alex',
  getName: function getName() {
    return this.name;
  }
};

console.log(profile.getName());