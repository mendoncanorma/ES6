/**
 * Created by nmendonca on 3/11/2018
 */

function logMessage (msg, {name: courseName, publisher: publisherName}) {
  console.log(msg + " " + courseName + " by " + publisherName);
}

logMessage("I am learning", {name: "Master ES6", publisher: "Skill Bakery"});