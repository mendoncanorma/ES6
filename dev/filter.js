/**
 * Created by nmendonca on 3/5/2018
 */
var products = [
  {"name": "cucumber", "type": "vegetable", "quantity": 0, "price": 1},
  {"name": "banana", "type": "fruit", "quantity": 10, "price": 15},
  {"name": "celery", "type": "vegetable", "quantity": 30, "price": 13},
  {"name": "orange", "type": "fruit", "quantity": 3, "price": 5}
];

var filteredProducts = products.filter(function (product) {
  return product.type === "fruit";
});

console.log(filteredProducts);

/* --------------------------------------------------------- */

filteredProducts = products.filter(function (product) {
  return product.type === "vegetable" && product.quantity > 0 && product.price > 10;
});

console.log(filteredProducts);

/* --------------------------------------------------------- */

var post = {"id": 4, "title": 'New Post'},
    comments = [
      {"postId": 4, "comments": 'awesome post'},
      {"postId": 3, "comments": 'it was ok'},
      {"postId": 4, "comments": 'neat'}
    ];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

/* --------------------------------------------------------- */

function reject(array, iteratorFunction) {
  return array.filter(iteratorFunction);
}

var numbers = [5, 10, 15, 20, 25, 30];

var lessThanFifteen = reject(numbers, function (number) {
  return number < 15;
});

console.log(lessThanFifteen);