"use strict";

/**
 * Created by nmendonca on 3/11/2018
 */

function logMessage(msg, _ref) {
  var courseName = _ref.name,
      publisherName = _ref.publisher;

  console.log(msg + " " + courseName + " by " + publisherName);
}

logMessage("I am learning", { name: "Master ES6", publisher: "Skill Bakery" });