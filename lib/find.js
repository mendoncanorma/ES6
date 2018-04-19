"use strict";

var users = [{ "name": "Jill" }, { "name": "Alex" }, { "name": "Bill" }, { "name": "Alex" }];

var arrFound = users.find(function (user) {
  return user.name === 'Alex';
});

console.log(arrFound);

/* --------------------------------------------------------- */

var post = { "id": 4, "title": 'New Post' },
    comments = [{ "postId": 4, "comments": 'awesome post' }, { "postId": 3, "comments": 'it was ok' }, { "postId": 4, "comments": 'neat' }];

function commentsForPost(post, comments) {
  return comments.find(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

/* --------------------------------------------------------- */

function findWhere(array, criteria) {

  var key = Object.keys(criteria)[0],
      value = criteria[key];

  return array.find(function (ladder) {
    return ladder[key] === value;
  });
}

var ladders = [{ "id": 1, "height": 20 }, { "id": 3, "height": 25 }];

var ladder = findWhere(ladders, { height: 25 });

console.log(ladder);

/* --------------------------------------------------------- */

var result = ["Skill", "Bakery", "ES6", "Course"].find(function (x) {
  return x == "Bakery";
});
console.log(result);

/* --------------------------------------------------------- */

var output = [1, 2, 3, 5].find(function (x) {
  return x > 3;
}); // 5
console.log(output);